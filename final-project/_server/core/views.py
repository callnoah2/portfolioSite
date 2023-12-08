# Load manifest when the server launches
from django.shortcuts import render
from django.conf import settings
from django.http import HttpResponse
import json
import os
from django.contrib.auth.decorators import login_required

# Load manifest when the server launches
MANIFEST = {}
if not settings.DEBUG:
    f = open(f"{settings.BASE_DIR}/_server/core/static/core/manifest.json")
    MANIFEST = json.load(f)


def index(req):
    context = {
        "asset_url": os.environ.get("ASSET_URL", ""),
        "debug": settings.DEBUG,
        "manifest": MANIFEST,
        "js_file": "" if settings.DEBUG else MANIFEST["src/main.js"]["file"],
        "css_file": "" if settings.DEBUG else MANIFEST["src/main.js"]["css"][0]
    }
    return render(req, "core/index.html", context)


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


def projects(req):
    context = {
        "asset_url": os.environ.get("ASSET_URL", ""),
        "debug": settings.DEBUG,
        "manifest": MANIFEST,
        "js_file": "" if settings.DEBUG else MANIFEST["src/pages/Projects.jsx"]["file"],
        "css_file": "" if settings.DEBUG else MANIFEST["src/pages/Projects.jsx"]["css"][0]
    }
    return render(req, "core/projects.html", context)

def quotes(req):
    return render(req, "core/projects/Quotes/quotes.html")

def compLib(req):
    return render(req, 'core/projects/CompLib/index.html')

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
