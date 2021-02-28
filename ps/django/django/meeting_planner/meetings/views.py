from django.shortcuts import render, get_object_or_404
from .models import Meeting, Room
from django.forms import modelform_factory


# Create your views here.


def detail(request, id):
    meeting = get_object_or_404(Meeting, pk=id)
    return render(request, "meetings/details.html", {"meeting": meeting})


def roomdetail(request, id):
    room = get_object_or_404(Room, pk=id)
    return render(request, "meetings/roomdetails.html", {"rooms": room})


MeetingForm = modelform_factory(Meeting, exclude=[])  # class


def new(request):
    form = MeetingForm()
    return render(request, "meetings/new.html", {"form": form})
