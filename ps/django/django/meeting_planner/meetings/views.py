from django.shortcuts import render, get_object_or_404
from .models import Meeting
from .models import Room

# Create your views here.


def detail(request, id):
    meeting = get_object_or_404(Meeting, pk=id)
    return render(request, "meetings/details.html", {"meeting": meeting})


def roomdetail(request, id):
    room = get_object_or_404(Room, pk=id)
    return render(request, "meetings/roomdetails.html", {"rooms": room})
