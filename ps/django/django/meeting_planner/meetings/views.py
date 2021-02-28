from django.shortcuts import render, get_object_or_404, redirect
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
    if request.method == "POST":
        form = MeetingForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("home")

    else:
        form = MeetingForm()
    return render(request, "meetings/new.html", {"form": form})
