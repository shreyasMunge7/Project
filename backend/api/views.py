from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .gemini_utils import summarize_notes as gemini_summarize  # Rename for clarity

# User Authentication APIs
@api_view(["POST"])
def user_login(request):
    username = request.data.get("username")
    password = request.data.get("password")
    user = authenticate(username=username, password=password)
    if user:
        login(request, user)
        return Response({"message": "Login successful", "user": user.username})
    return Response({"error": "Invalid credentials"}, status=400)

@api_view(["POST"])
def user_logout(request):
    logout(request)
    return Response({"message": "Logged out successfully"})

# Summarization API (Gemini)
@api_view(["POST"])
def summarize_notes_view(request):  # Renamed the view
    text = request.data.get('text')
    if not text:
        return Response({"error": "No text provided"}, status=400)

    summary = gemini_summarize(text)  # Correctly calling the Gemini API function
    return Response({"summary": summary})
