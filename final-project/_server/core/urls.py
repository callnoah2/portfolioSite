from django.urls import path
from . import views

urlpatterns = [
    path('', view=views.index, name="index"),
    path('about/', view=views.about, name="about"),
    path('hireme/', view=views.hireme, name="hireme"),
    path('projects/', view=views.projects, name="projects"),
    path('status/', view=views.status, name="status"),
    path('projects/Quotes/', view=views.quotes, name="quotes"),
    path('projects/CompLib/', view=views.compLib, name="compLib"),
    path('projects/Recipe/', view=views.recipeCards, name="Recipe"),
]