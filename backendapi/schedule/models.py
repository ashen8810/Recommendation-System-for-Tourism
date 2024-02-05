from django.db import models
from account.models import User


class Schedule(models.Model):
    scheduleId = models.AutoField(primary_key=True)
    partner = models.CharField(max_length=50)
    fromDate = models.DateTimeField()
    toDate = models.DateTimeField()
    destination = models.CharField(max_length=500)
    description = models.CharField(max_length=255)
    type = models.CharField(max_length=50)
    att = models.CharField(max_length=500,null=True)
    hotels = models.CharField(max_length=500,null=True)
    userId = models.ForeignKey(User, on_delete=models.CASCADE)
    class Meta:
        app_label = "schedule"

    def __str__(self):
        return f"Schedule ID: {self.scheduleId}, Partner: {self.partner}, Destination: {self.destination}"


