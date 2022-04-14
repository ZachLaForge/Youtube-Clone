from django.urls import path
from . import views



urlpatterns = [
	path('', views.get_all_comments),
	path('auth/', views.user_comment),
	path('<int:pk>/', views.comment_detail)
]