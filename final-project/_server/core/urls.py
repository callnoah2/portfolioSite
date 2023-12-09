from django.urls import path
from . import views

urlpatterns = [
    path('', view=views.index, name="index"),
    path('about/', view=views.about, name="about"),
    path('hireme/', view=views.hireme, name="hireme"),
    path('projects/', view=views.projects, name="projects"),
    path('status/', view=views.status, name="status"),
    path('quotes/', view=views.quotes, name="quotes"),
    path('compLib/', view=views.compLib, name="compLib"),
    path('recipe/', view=views.recipeCards, name="Recipe"),
]