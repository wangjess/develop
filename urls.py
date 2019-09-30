from django.contrib import admin
from django.urls import path
from users import views
from django.conf.urls import url

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^api/users/$', views.users_list),
    url(r'^api/users/(?P<pk>[0-9]+)$', views.users_detail),
]