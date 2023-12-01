from django.db import models


class OverallStat(models.Model):
    total_customers = models.IntegerField()
    yearly_sales_total = models.IntegerField()
    yearly_total_sold_units = models.IntegerField()
    year = models.IntegerField()

    # Define monthly data as a JSONField
    monthly_data = models.JSONField(default=list)

    # Define daily data as a JSONField
    daily_data = models.JSONField(default=list)

    # Define sales by category as a JSONField
    sales_by_category = models.JSONField(default=dict)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


# model for events
class Event(models.Model):
    title = models.CharField(max_length=255)
    start = models.DateTimeField()
    end = models.DateTimeField()
    all_day = models.BooleanField(default=False)
