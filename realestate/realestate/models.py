from django.contrib.auth.models import User
from django.db import models
from django.db.models.fields import CharField
import moneyed
from djmoney.models.fields import MoneyField

# Create your models here.

#-------------------------------------------------------------------------
#  Main Model
#-------------------------------------------------------------------------
class Main(models.Model):
    id=models.IntegerField(primary_key=True)
    address=models.CharField(max_length=100)
    city=models.CharField(max_length=50)
    state=models.CharField(max_length=50)
    zip_code=models.IntegerField()
    bedrooms=models.IntegerField()
    bathrooms_full=models.IntegerField()
    bathrooms_full=models.IntegerField()
    square_feet=models.IntegerField()
    square_feet_lot=models.IntegerField()
    price=MoneyField(max_digits=99, decimal_places=0, default_currency='USD')
    description=models.CharField(max_length=200)
    style=models.CharField(max_length=100)
    home_type=models.CharField(max_length=50)
    year_built=models.IntegerField()
    price_per_square_foot=models.IntegerField()
    date_posted=models.DateField()
    status=models.CharField(max_length=10)
    longitude=models.IntegerField()
    latitude=models.IntegerField()
    create_date=models.DateField()
    original_url=models.CharField(max_length=100)
    features=models.CharField(max_length=100)



#-------------------------------------------------------------------------
#  listing_provider Model
#-------------------------------------------------------------------------
class listing_provider(models.Model):
    id=models.IntegerField(primary_key=True)
    main_id=models.ForeignKey(Main)
    listing_agent=models.CharField(max_length=50)
    agent_phone_number=models.IntegerField()
    listed_by=models.CharField(max_length=100)
    broker_location=models.CharField(max_length=50)
    data_source=models.CharField(max_length=50)

    def __unicode__(self):
        return self.id



#-------------------------------------------------------------------------
#  schools Model
#-------------------------------------------------------------------------
class schools(models.Model):
    id=models.IntegerField(primary_key=True)
    main_id=models.IntegerField()
    score=models.IntegerField()
    name=models.CharField(max_length=50)
    grades=models.CharField(max_length=100)
    distance=models.IntegerField()

    def __unicode__(self):
        return self.id





#-------------------------------------------------------------------------
#  Image_Profile Model
#-------------------------------------------------------------------------
class images(models.Model):
    id=models.IntegerField(primary_key=True)
    main_id=models.IntegerField()
    name=models.CharField(max_length=100)
    path=models.CharField(max_length=200)
    alt=models.CharField(max_length=50)

    def __unicode__(self):
        return self.id