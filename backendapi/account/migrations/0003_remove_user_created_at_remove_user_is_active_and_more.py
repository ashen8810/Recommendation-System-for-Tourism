# Generated by Django 4.2.6 on 2023-12-15 05:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("account", "0002_user_username_alter_user_adminid"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="user",
            name="created_at",
        ),
        migrations.RemoveField(
            model_name="user",
            name="is_active",
        ),
        migrations.RemoveField(
            model_name="user",
            name="is_admin",
        ),
        migrations.RemoveField(
            model_name="user",
            name="updated_at",
        ),
    ]
