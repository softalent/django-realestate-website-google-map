from __future__ import unicode_literals
import json
from django.db import models

# Create your models here.
# model for API:
#   1. adwords script calls /api/{{state}}/{{city}}
#   2. /api/{{state}}/{{city}} returns JSON of URL strings for each property in {{city}}

class States(models.Model):
    state = models.CharField(max_length=100)

class Cities(models.Model):
    city = models.CharField(max_length=100)

class Properties(models.Model):
    id = models.IntegerField(primary_key=True)
    state_name = models.CharField(max_length=100)
    city_name = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    zip_code = models.CharField(max_length=5)
    url_string = models.CharField(max_length=9999)
