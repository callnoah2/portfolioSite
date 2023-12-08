# Load manifest when the server launches
from django.shortcuts import render
from django.conf import settings
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

def project1(req):
    context = {
        "asset_url": os.environ.get("ASSET_URL", ""),
        "debug": settings.DEBUG,
        "manifest": MANIFEST,
        "js_file": "" if settings.DEBUG else MANIFEST["src/pages/projects/Quotes/quotes.html"]["file"],
        "css_file": "" if settings.DEBUG else MANIFEST["src/pages/projects/Quotes/quotes.html"]["css"][0]
    }
    return render(req, "core/project1.html", context)

def project2(req):
    context = {
        "asset_url": os.environ.get("ASSET_URL", ""),
        "debug": settings.DEBUG,
        "manifest": MANIFEST,
        "js_file": "" if settings.DEBUG else MANIFEST["src/pages/projects/CompLib/index.html"]["file"],
        "css_file": "" if settings.DEBUG else MANIFEST["src/pages/projects/CompLib/index.html"]["css"][0]
    }
    return render(req, "core/project2.html", context)

def project3(req):
    context = {
        "asset_url": os.environ.get("ASSET_URL", ""),
        "debug": settings.DEBUG,
        "manifest": MANIFEST,
        "js_file": "" if settings.DEBUG else MANIFEST["src/pages/projects/Recipe/index.html"]["file"],
        "css_file": "" if settings.DEBUG else MANIFEST["src/pages/projects/Recipe/index.html"]["css"][0]
    }
    return render(req, "core/project3.html", context)

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
