from django.urls import path, include
from . import views


urlpatterns = [
    path('<int:id>', views.detail, name="detail"),
    path('rooms/<int:id>', views.roomdetail, name="rooms"),
]
