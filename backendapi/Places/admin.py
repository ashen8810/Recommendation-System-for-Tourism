from django.contrib import admin

from .models import Place,ReviewPlace,PlaceComments

admin.site.register(Place)
admin.site.register(ReviewPlace)
admin.site.register(PlaceComments)