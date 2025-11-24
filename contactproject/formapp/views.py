from django.shortcuts import render

from django.http import JsonResponse
from .models import ContactRequest
import json

def index(request):
    return render(request, "formapp/index.html")

def submit_form(request):
    if request.method == "POST":
        import json
        print(request.body)
        data = json.loads(request.body)

        ContactRequest.objects.create(
            name=data.get("name"),
            email=data.get("email"),
            subject=data.get("subject"),
            message=data.get("message"),
        )

        return JsonResponse({"message": "Your request has been submitted ✔"})

    return JsonResponse({"error": "Invalid method"}, status=400)








