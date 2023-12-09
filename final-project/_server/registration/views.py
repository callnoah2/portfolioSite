from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import login, authenticate, logout
from django.http import JsonResponse
from .forms import ProjectForm

# Create your views here.
def hire_me(request):
    if request.method == "POST":
        form = ProjectForm(request.POST)
        if form.is_valid():
            project = form.save(commit=False)
            project.user = request.user
            project.save()
            return redirect("/")
    else:
        form = ProjectForm()

    return render(request, "hire_me/hire_me.html", {"form": form})

def sign_up(req):
    if req.method == "POST":
        user = User.objects.create_user(
            username=req.POST.get("email"),
            password=req.POST.get("password"),
            email=req.POST.get("email"),
            first_name=req.POST.get("first_name"),
            last_name=req.POST.get("last_name")
        )
        login(req, user)
        return redirect("/")
    else:
        return render(req, "registration/sign_up.html")

def sign_in(req):
    if req.method == "POST":
        user = authenticate(req, username=req.POST.get("email"), password=req.POST.get("password"))
        if user is not None:
            login(req, user)
            return redirect("/")

        return render(req, "registration/sign_in.html")
    else:
        return render(req, "registration/sign_in.html")

def logout_view(request):
    logout(request)
    return JsonResponse({"success": True })