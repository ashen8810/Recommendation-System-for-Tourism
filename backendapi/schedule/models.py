from django.db import models
from account.models import User

class Schedule(models.Model):
    scheduleId = models.CharField(max_length=10, primary_key=True)
    partner = models.CharField(max_length=50)
    fromDate = models.DateTimeField()
    toDate = models.DateTimeField()
    destination = models.CharField(max_length=50)
    description = models.CharField(max_length=255)

    def __str__(self):
        return f"Schedule ID: {self.scheduleId}, Partner: {self.partner}, Destination: {self.destination}"

class UserSchedule(models.Model):
    userId = models.ForeignKey(User, on_delete=models.CASCADE)
    scheduleId = models.ForeignKey(Schedule, on_delete=models.CASCADE, primary_key=True)

    def __str__(self):
        return f"User ID: {self.userId.userId}, Schedule ID: {self.scheduleId.scheduleId}"

class TripType(models.Model):
    scheduleId = models.ForeignKey(Schedule, on_delete=models.CASCADE)
    type = models.CharField(max_length=50, primary_key=True)

    def __str__(self):
        return f"Schedule ID: {self.scheduleId.scheduleId}, Type: {self.type}"
