from django.shortcuts import render
from django.http import HttpResponse
from datetime import datetime

# Create your views here.


def welcome(request):
    return HttpResponse("What sup this is skyler's django first page")


def date(request):
    return HttpResponse(" your request at" + str(datetime.now()))


def skyler(request):
    return HttpResponse(" This is skyler yo")


def opendoor(request):
    #opendoor_template = "app/opendoor.html"
    # return HttpResponse(opendoor_template.render())
    return render_to_response('app//opendoor.html')


def myself(request):
    return HttpResponse(" I think I am the center of the universe")
