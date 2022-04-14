from django.urls import path
from . import views



urlpatterns = [
	path('music/', views.user_reply),
	path('music/<int:pk>/', views.reply_detail),
]