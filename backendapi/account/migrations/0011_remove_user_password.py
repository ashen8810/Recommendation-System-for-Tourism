# Generated by Django 4.2.6 on 2023-12-15 08:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("account", "0010_alter_user_isbanned"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="user",
            name="password",
        ),
    ]
