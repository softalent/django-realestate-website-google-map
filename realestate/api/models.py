from __future__ import unicode_literals
import json
from django.db import models

# Create your models here.
# model for API:
#   1. adwords script calls /api/{{city}}
#   2. /api/{{city}} returns JSON of URL strings for each property in {{city}}

class Cities(models.Model):
    id = models.IntegerField(primary_key=True)
    city = models.CharField(max_length=100)
    # zip_codes = models.CharField(max_lenth=9999)

class CityProperties(models.Model):
    id = models.IntegerField(primary_key=True)
    state_name = models.CharField(max_length=100)
    city_name = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    zip_code = models.CharField(max_length=5)
    urlString = models.CharField(max_length=9999)
