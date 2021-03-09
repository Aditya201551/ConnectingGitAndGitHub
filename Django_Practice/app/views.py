from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def renderPage(request):
    return HttpResponse("<em>This is a render function text</em>")

def index(request):
    return render(request, "app/index.html", context={'text_content':"This is inserted via context dictionary in views"})

def appURL(request):
    return HttpResponse("<h1>This is text via appURL addressed by app's URL.py</h1>")