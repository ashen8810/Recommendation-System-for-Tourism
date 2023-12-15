from django.contrib import admin

from .models import Admin,User,Notification,GetNotification

admin.site.register(Admin)
admin.site.register(User)
admin.site.register(Notification)
admin.site.register(GetNotification)