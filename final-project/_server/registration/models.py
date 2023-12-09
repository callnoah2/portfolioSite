from django.db import models
from django.contrib.auth.models import User

class Project(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    project_name = models.CharField(max_length=255)
    project_description = models.TextField()
    date_needed_by = models.DateField()
    style_color_preferences = models.CharField(max_length=255)
    specific_components = models.TextField()