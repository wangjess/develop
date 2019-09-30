from django.db import models

# Create your models here.

class User(models.Model):
    username = models.CharField("username", max_length=255)
    email = models.EmailField()
    password = models.CharField("password", max_length=255)

    def __str__(self):
        return self.email
