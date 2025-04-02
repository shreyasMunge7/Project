from django.urls import path
from .views import user_login, user_logout, summarize_notes_view

urlpatterns = [
    path('api/login/', user_login, name='login'),
    path('api/logout/', user_logout, name='logout'),
    path('summarize/', summarize_notes_view, name='summarize'),
]
