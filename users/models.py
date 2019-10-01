import logging
import uuid

from django.conf import settings
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.contrib.auth.validators import UnicodeUsernameValidator
from django.db import models
from django.utils.translation import ugettext_lazy as _

LOG = logging.getLogger(__name__)

class UserManager(BaseUserManager):
    use_in_migrations = True
    def _create_user(self, username, email, password, **extra_fields):
        """
        Create and save a user with the given username, email, and password.
        """
        if not username:
            raise ValueError('The given username must be set')
        if not email:
            raise ValueError('The given email must be set')
        username = self.model.normalize_username(username)
        user = self.model(
            username=username,
            **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        # Now create Account
        if email:
            from account.models import EmailAddress
            LOG.info('User %s (%s) was assigned email address: "%s"', username, user.pk, email)
            email = self.normalize_email(email)
            EmailAddress.objects.add_email(user, email, primary=True)
            LOG.info('User %s (%s) was successfully assigned the primary email address: "%s"', username, user.pk, email)
        return user

    def create_user(self, username, email=None, password=None, **extra_fields):
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(username, email, password, **extra_fields)

    def create_superuser(self, username, email, password, **extra_fields):
        extra_fields.setdefault('is_superuser', True)
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')
        return self._create_user(username, email, password, **extra_fields)

class User(AbstractBaseUser, PermissionsMixin):
    """
    Fully featured User model with
    admin-compliant permissions.
    Username and password are required. Other fields are optional.
    """
    username_validator = UnicodeUsernameValidator()
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    username = models.CharField(
        _('username'),
        max_length=150,
        unique=True,
        help_text=_('Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.'),
        validators=[username_validator],
        error_messages={
            'unique': _("A user with that username already exists."),
        },
    )
    name = models.CharField(_('name'), max_length=255, blank=True)
    objects = UserManager()
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = []

    class Meta:
        verbose_name = _('user')
        verbose_name_plural = _('users')

    def clean(self):
        super().clean()
        # self.email = self.__class__.objects.normalize_email(self.email)

    def get_username(self):
        """Return the username for the user."""
        return self.username

    @property
    def email(self):
        return self.get_email()

    def email_user(self, subject, message, from_email=None, **kwargs):
        """Send an email to this user."""
        email = self.email
        if email:
            send_mail(subject, message, from_email, [self.email], **kwargs)

    def get_primary_email(self):
        return self.emailaddress_set.filter(primary=True).first()

    def get_email(self):
        email = self.get_primary_email()
        if email:
            return email.email
            
    def get_email_verified(self):
        email = self.get_primary_email()
        if email:
            return email.verified
        else:
            return False
