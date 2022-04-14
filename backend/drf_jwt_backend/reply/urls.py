from django.urls import path
from . import views



urlpatterns = [
	path('', views.user_reply),
	path('<int:pk>/', views.reply_detail)
]