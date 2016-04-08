from __future__ import unicode_literals
import json
from django.db import models

# Create your models here.
# model for API:
#   1. adwords script calls /api/{{city}}
#   2. /api/{{city}} returns JSON of URL strings for each property in {{city}}

class Cities(models.Model):
    id = models.IntegerField()
    city = models.CharField(max_length=100)
    # zip_codes = models.CharField(max_lenth=9999)

class CityProperties(models.Model):
    id = models.IntegerField()
    state_name = CharField(max_length=100)
    city_name = CharField(max_length=100)
    address = CharField(max_length=100)
    zip_code = CharField(max_length=5)
    urlString = CharField(max_length=9999)
