from django.urls import path
from . import views

urlpatterns = [
    path('stories/', views.get_stories, name='stories'),
]
