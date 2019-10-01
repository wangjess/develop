from django.db import models

# Create your models here.
class Photo(models.Model):
    description = models.CharField(max_length=255, blank=True)
    image = models.FileField(upload_to='static/documents/')

    # Return description because I said so  
    def __str__(self):
        return self.description

    # Return image.
    # FIXME
    def get_username(self):
        return self.image