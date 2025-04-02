import google.generativeai as genai
from django.conf import settings

# Configure Gemini API with the key
genai.configure(api_key=settings.GEMINI_API_KEY)

def summarize_notes(text):
    try:
        model = genai.GenerativeModel("models/gemini-1.5-pro-002")
        response = model.generate_content(f"Summarize this text: {text}")
        return response.text
    except Exception as e:
        print("Error:", e)
        return "Failed to summarize. Try again."
