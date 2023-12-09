from django import forms
from .models import Project

class ProjectForm(forms.ModelForm):
    class Meta:
        model = Project
        fields = ['project_name', 'project_description', 'date_needed_by', 'style_color_preferences', 'specific_components']