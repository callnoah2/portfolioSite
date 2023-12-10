from django.db import models
from django.contrib.auth.models import User

class Form(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    projName = models.CharField(max_length=255)
    projDescription = models.TextField()
    projDate = models.DateField()
    projStyle = models.CharField(max_length=255)
    projComponents = models.TextField()
