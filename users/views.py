from django.shortcuts import render
from django.http import HttpResponse
from .models import User

# Create your views here.
# def index(request):
#     return HttpResponse("Hello, world. You're at the USERS index.")

def index(request):
    latest_user_list = User.objects.order_by('id')[:5]
    output = ', '.join([u.username for u in latest_user_list])
    return HttpResponse(output)

# Get more detail about a user.
def detail(request, id):
    return HttpResponse("You're looking at user number %s." % id)

def results(request, id):
    response = "You're looking at the results of question %s."
    return HttpResponse(response % id)

# Create a user.
def create_user(request, id):
    return HttpResponse("You're creating user number %s." % id)

# Delete a user.
def delete_user(request, id):
    return HttpResponse("You're deleting user number %s." % id)