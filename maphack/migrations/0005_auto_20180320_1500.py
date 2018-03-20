# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2018-03-20 09:30
from __future__ import unicode_literals

from django.db import migrations, models
import maphack.models


class Migration(migrations.Migration):

    dependencies = [
        ('maphack', '0004_guides_postal_code'),
    ]

    operations = [
        migrations.AddField(
            model_name='guides',
            name='image',
            field=models.ImageField(blank=True, upload_to=maphack.models.Guides.get_upload_path),
        ),
        migrations.AddField(
            model_name='guides',
            name='rating',
            field=models.FloatField(blank=True, default=0),
        ),
    ]