from django.shortcuts import render
from django.http import HttpResponse
from datetime import datetime

from meetings.models import Meeting, Room
# Create your views here.


def welcome(request):
    return render(request, "website/welcome.html",
                  {"message": "This data was sent  from skyler's secret pocekt( you dont wanna knw where)",
                   "x": "https://skyler-world.tistory.com/",
                   "num_meetings": Meeting.objects.count(),
                   "meetings": Meeting.objects.all(),
                   "rooms": Room.objects.all(),
                   "home": "http://127.0.0.1:8000"})


def date(request):
    return HttpResponse(" your request at" + str(datetime.now()))


def skyler(request):
    return HttpResponse(" This is skyler yo")


def opendoor(request):
    return render(request, "website/opendoor.html")


def myself(request):
    return HttpResponse(" I think I am the center of the universe")
