# Generated by Django 4.2.6 on 2024-02-02 08:06

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('account', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Place',
            fields=[
                ('imageID', models.CharField(auto_created=True, max_length=7, null=True)),
                ('placeId', models.AutoField(primary_key=True, serialize=False)),
                ('createdDate', models.DateTimeField(auto_now_add=True)),
                ('contactNumber', models.CharField(max_length=15)),
                ('placeName', models.CharField(max_length=50)),
                ('coordinateX', models.DecimalField(decimal_places=5, max_digits=8)),
                ('coordinateY', models.DecimalField(decimal_places=5, max_digits=8)),
                ('category', models.CharField(max_length=50)),
                ('website', models.CharField(max_length=150)),
                ('openingTime', models.TimeField()),
                ('closingTime', models.TimeField()),
                ('isUserUploaded', models.BooleanField()),
                ('description', models.CharField(max_length=500)),
                ('image', models.TextField(max_length=20000)),
                ('adminId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='account.admin')),
                ('userId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='ReviewPlace',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('review', models.CharField(max_length=500)),
                ('rating', models.IntegerField()),
                ('placeId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Places.place')),
                ('userId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='PlaceComments',
            fields=[
                ('commentId', models.CharField(max_length=8, primary_key=True, serialize=False)),
                ('comment', models.CharField(max_length=500)),
                ('isApproved', models.CharField(max_length=8)),
                ('placeId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Places.place')),
            ],
        ),
    ]
