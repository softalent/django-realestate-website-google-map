from django.db import models


class Main(models.Model):
    id = models.IntegerField(primary_key=True)
    address = models.TextField()
    city = models.TextField()
    state = models.CharField(max_length=2)
    zip_code = models.CharField(max_length=10)
    bedrooms = models.SmallIntegerField()
    bathrooms_full = models.SmallIntegerField()
    bathrooms_half = models.SmallIntegerField()
    square_feet = models.IntegerField()
    square_feet_lot = models.CharField('Square Feet Lot', max_length=30)
    price = models.DecimalField(max_digits=15, decimal_places=2)
    description = models.TextField()
    home_type = models.CharField(max_length=250)
    year_built = models.CharField('Year Built', max_length=4)
    price_per_square_foot = models.CharField(max_length=30)
    date_posted = models.DateField()
    status = models.CharField(max_length=100)
    longitude = models.CharField(max_length=20)
    latitude = models.CharField(max_length=20)
    meta_keywords = models.TextField()
    meta_description = models.TextField()
    create_date = models.DateField()
    original_url = models.TextField()
    features = models.TextField()
    available = models.BooleanField(default=True)

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
    url = models.CharField(max_length=350)
    alt = models.CharField(max_length=200)

    class Meta:
        db_table = 'images'
