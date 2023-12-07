from django.urls import path
from . import views

urlpatterns = [
    path('', view=views.index, name="index"),
    path('about/', view=views.about, name="about"),
    path('hire-me/', view=views.hireme, name="hire-me"),
    path('projects/', view=views.projects, name="projects"),
    path('status/', view=views.status, name="status"),
]