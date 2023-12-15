from django.contrib import admin

from .models import Schedule,UserSchedule,TripType

admin.site.register(Schedule)
admin.site.register(UserSchedule)
admin.site.register(TripType)