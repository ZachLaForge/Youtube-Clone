from django.urls import path
from . import views



urlpatterns = [
	path('', views.user_comment),
	path('<int:pk>/', views.comment_detail)
]