# Generated by Django 4.2.6 on 2024-02-08 15:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('schedule', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='schedule',
            name='destination',
            field=models.CharField(max_length=1000),
        ),
        migrations.AlterField(
            model_name='schedule',
            name='hotels',
            field=models.CharField(max_length=1000, null=True),
        ),
    ]
