from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    # ex: /photos/5/
    path('<int:id>/', views.index, name='index'),
]