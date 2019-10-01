from django.db import models

# Create your models here.
class User(models.Model):
    username = models.CharField(max_length=100)
    email = models.EmailField(blank=True, unique=True)
    password = models.CharField(max_length=50)

    # Return username because I said so  
    def __str__(self):
        return self.username

    # Return username.
    def get_username(self):
        return self.username 

    # Return email.
    def get_email(self):
        return self.email

# class Gallery(models.Model):
#     question = models.ForeignKey(Question, on_delete=models.CASCADE)
#     choice_text = models.CharField(max_length=200)
#     votes = models.IntegerField(default=0)