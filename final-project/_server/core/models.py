from django.db import models
from django.contrib.auth.models import User

class Form(models.Model):

    AWAITING_REVIEW = 'Awaiting Review'
    NEEDS_CLIENT_REVIEW = 'Needs Client Review'
    FINISHED = 'Project Finished'

    STATUS_CHOICES = [
        (AWAITING_REVIEW, 'Awaiting Review'),
        (NEEDS_CLIENT_REVIEW, 'Needs Client Review'),
        (FINISHED, 'Project Finished')
    ]

    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    projName = models.CharField(max_length=255)
    projDescription = models.TextField()
    projDate = models.DateField()
    projStyle = models.CharField(max_length=255)
    projComponents = models.TextField()
    projStatus = models.CharField(
        max_length=255,
        choices=STATUS_CHOICES,
        default=AWAITING_REVIEW,)