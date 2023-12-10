# Load manifest when the server launches
from django.shortcuts import render
from django.conf import settings
from django.http import HttpResponse, JsonResponse
import json
import os
from django.contrib.auth.decorators import login_required
from django.forms.models import model_to_dict
from .models import Form

# Load manifest when the server launches
MANIFEST = {}
if not settings.DEBUG:
    f = open(f"{settings.BASE_DIR}/_server/core/static/core/manifest.json")
    MANIFEST = json.load(f)

@login_required
def index(req):
    context = {
        "asset_url": os.environ.get("ASSET_URL", ""),
        "debug": settings.DEBUG,
        "manifest": MANIFEST,
        "js_file": "" if settings.DEBUG else MANIFEST["src/main.js"]["file"],
        "css_file": "" if settings.DEBUG else MANIFEST["src/main.js"]["css"][0]
    }
    return render(req, "core/index.html", context)

@login_required
def about(req):
    context = {
        "asset_url": os.environ.get("ASSET_URL", ""),
        "debug": settings.DEBUG,
        "manifest": MANIFEST,
        "js_file": "" if settings.DEBUG else MANIFEST["src/pages/about.jsx"]["file"],
        "css_file": "" if settings.DEBUG else MANIFEST["src/pages/about.jsx"]["css"][0]
    }
    return render(req, "core/about.html", context)

@login_required
def hireme(req):
    context = {
        "asset_url": os.environ.get("ASSET_URL", ""),
        "debug": settings.DEBUG,
        "manifest": MANIFEST,
        "js_file": "" if settings.DEBUG else MANIFEST["src/pages/HireMe.jsx"]["file"],
        "css_file": "" if settings.DEBUG else MANIFEST["src/pages/HireMe.jsx"]["css"][0]
    }
    return render(req, "core/hire-me.html", context)

@login_required
def projects(req):
    context = {
        "asset_url": os.environ.get("ASSET_URL", ""),
        "debug": settings.DEBUG,
        "manifest": MANIFEST,
        "js_file": "" if settings.DEBUG else MANIFEST["src/pages/Projects.jsx"]["file"],
        "css_file": "" if settings.DEBUG else MANIFEST["src/pages/Projects.jsx"]["css"][0]
    }
    return render(req, "core/projects.html", context)

@login_required
def quotes(req):
    return render(req, "core/projects/quotes/quotes.html")

@login_required
def compLib(req):
    return render(req, "core/projects/CompLib/index.html")

@login_required
def recipeCards(req):
    return render(req, "core/projects/Recipe/index.html")

@login_required
def status(req):
    context = {
        "asset_url": os.environ.get("ASSET_URL", ""),
        "debug": settings.DEBUG,
        "manifest": MANIFEST,
        "js_file": "" if settings.DEBUG else MANIFEST["src/pages/Status.jsx"]["file"],
        "css_file": "" if settings.DEBUG else MANIFEST["src/pages/Status.jsx"]["css"][0]
    }
    return render(req, "core/status.html", context)

@login_required
def me(req):
    return JsonResponse({"user": model_to_dict(req.user)})

@login_required
def forms(req):
    if req.method == "POST":
        body = json.loads(req.body)
        form = Form(
            projName = body["projectName"],
            projDescription = body["projectDescription"],
            projDate = body["dateNeededBy"],
            projStyle = body["styleColorPreferences"],
            projComponents = body["specificComponents"],
            user = req.user,
        )

        form.save()
        return JsonResponse({"form": model_to_dict(form)})
    else:
        forms = [model_to_dict(form) for form in req.user.form_set.all()]
        return JsonResponse({"forms": forms})


