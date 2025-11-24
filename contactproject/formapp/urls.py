from django.urls import path
from .views import submit_form, index

urlpatterns = [
    path('', index, name='index'),
    path('submit/', submit_form, name='submit_form'),
]