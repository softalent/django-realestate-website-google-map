from django.db import models


class Main(models.Model):
    id = models.IntegerField(primary_key=True)
    address = models.CharField(max_length=100)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    zip_code = models.CharField(max_length=10)
    bedrooms = models.IntegerField()
    bathrooms_full = models.IntegerField()
    bathrooms_full = models.IntegerField()
    square_feet = models.IntegerField()
    square_feet_lot = models.IntegerField()
    price = models.DecimalField(max_digits=99, decimal_places=0)
    description = models.CharField(max_length=200)
    home_type = models.CharField(max_length=50)
    year_built = models.IntegerField()
    price_per_square_foot = models.IntegerField()
    date_posted = models.DateField()
    status = models.CharField(max_length=10)
    longitude = models.IntegerField()
    latitude = models.IntegerField()
    create_date = models.DateField()
    original_url = models.CharField(max_length=100)
    features = models.CharField(max_length=100)

    def get_url(self):
        main_url = 'http://seethisproperty.com'
        state = self.translate(self.state)
        city = self.translate(self.city)
        address = self.translate(self.address)
        return '/'.join([main_url, state, city, address])

    def translate(self, data):
        character = '/,*,#,$,%,^,&,@, ,'
        newdata = []
        for i in data:
            if i not in character:
                newdata.append(i)
            else:
                newdata.append('-')
        new_add = ''.join(newdata)
        return new_add

    class Meta:
        db_table = 'main'


class ListingProvider(models.Model):
    id = models.IntegerField(primary_key=True)
    main = models.ForeignKey(
        'Main', related_name='listing_provider', db_column='main_id')
    listing_agent = models.CharField(max_length=50)
    agent_phone_number = models.IntegerField()

    class Meta:
        db_table = 'listing_provider'


class School(models.Model):
    id = models.IntegerField(primary_key=True)
    main = models.ForeignKey(
        'Main', related_name='school', db_column='main_id')
    score = models.IntegerField()
    name = models.CharField(max_length=50)
    grades = models.CharField(max_length=100)
    distance = models.IntegerField()

    class Meta:
        db_table = 'schools'


class Image(models.Model):
    id = models.IntegerField(primary_key=True)
    main = models.ForeignKey('Main', related_name='image', db_column='main_id')
    path = models.CharField(max_length=350)
    alt = models.CharField(max_length=200)

    class Meta:
        db_table = 'images'
