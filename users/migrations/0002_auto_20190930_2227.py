# Generated by Django 2.2.5 on 2019-09-30 22:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Customer',
            new_name='User',
        ),
    ]
