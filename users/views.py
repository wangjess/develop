from django.shortcuts import render
from django.http import HttpResponse

from .models import User

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .serializers import *

# Create your views here.

@api_view(['GET', 'POST'])
def list_users(request):
    """Lists users."""
    if request.method == 'GET':
        latest_user_list = User.objects.order_by('id')[:5]
        output = ', '.join([u.username for u in latest_user_list])
        return HttpResponse(output)
        return HttpResponse({'data': serializer.data})
    elif request.method == 'POST':
        return HttpResponse('tried to fucking post bitch')

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