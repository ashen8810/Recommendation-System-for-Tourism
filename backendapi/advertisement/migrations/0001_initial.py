# Generated by Django 4.2.6 on 2023-12-20 05:26

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('account', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Advertisement',
            fields=[
                ('adId', models.CharField(max_length=8, primary_key=True, serialize=False)),
                ('frequencyOfDisplay', models.IntegerField()),
                ('size', models.FloatField()),
                ('fee', models.FloatField()),
                ('adminId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='account.admin')),
                ('userId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='AdvertisementMedia',
            fields=[
                ('mediaID', models.CharField(max_length=7, primary_key=True, serialize=False)),
                ('mediaType', models.CharField(max_length=10)),
                ('media', models.TextField(max_length=20000)),
                ('adId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='advertisement.advertisement')),
            ],
        ),
    ]
