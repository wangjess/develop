from django.urls import path

from . import views

urlpatterns = [
    # ex: /users/
    path('', views.index, name='index'),
    # ex: /users/5/
    path('<int:id>/', views.detail, name='detail'),
    # ex: /users/5/results/
    path('<int:id>/results/', views.results, name='results'),
    # ex: /users/5/create_user/
    path('<int:id>/create_user/', views.create_user, name='create_user'),
    # ex: /users/5/delete_user/
    path('<int:id>/delete_user/', views.delete_user, name='delete_user'),
]