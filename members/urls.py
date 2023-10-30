from django.urls import path
from . import views
from django.urls import include, path
urlpatterns = [ path('', views.main, name='main'),
    path('members/', views.members, name='members'), 
    path('members/details/<int:id>',views.details, name='details'),
    path('testing/', views.testing, name='testing'), ]