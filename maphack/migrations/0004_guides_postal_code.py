# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2018-03-19 13:04
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('maphack', '0003_guides_mob_no'),
    ]

    operations = [
        migrations.AddField(
            model_name='guides',
            name='postal_code',
            field=models.IntegerField(default=341023),
            preserve_default=False,
        ),
    ]
