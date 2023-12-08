from django.urls import path
from . import views

urlpatterns = [
    path('', view=views.index, name="index"),
    path('about/', view=views.about, name="about"),
    path('hireme/', view=views.hireme, name="hireme"),
    path('projects/', view=views.projects, name="projects"),
    path('status/', view=views.status, name="status"),
    path('projects/Quotes/', view=views.project1, name="project1"),
    path('projects/CompLib/', view=views.project2, name="project2"),
    path('projects/Recipe/', view=views.project3, name="project3"),
]