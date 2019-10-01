from django.shortcuts import render
from django.http import HttpResponse

from .models import Photo

# FIXME: Try to fetch all the photos from the database
def index(request):
    # return HttpResponse("Hello, world. You're at the PHOTOS index.")
    # get all current photos ordered by the latest
    all_images = Photo.objects.all().order_by('-id')
    # return the index.html template, passing in all the feeds
    return render(request, 'index.html', {'all_images': all_images})