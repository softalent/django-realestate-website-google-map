from django.db import models


class MainManager(models.Manager):
    def distinct_cities_at(self, state):
        '''Return a list of one property for each city on db for the given
        state, '''
        queryset = self.get_queryset().filter(
            available=True, state=state).order_by('city').distinct('city')
        return queryset


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
    objects = MainManager()

    def get_url(self):
        return 'http://seethisproperty.com' + self.get_absolute_url()

    def translate(self, data):
        character = '/,*,#,$,%,^,&,@, ,(,),-,'
        newdata = []
        for i in data:
            if i not in character:
                newdata.append(i)
            else:
                newdata.append('-')
        new_add = ''.join(newdata)
        return new_add

    def get_complete_state(self):
        from realestate.us_states import US_STATES
        if self.state in US_STATES:
            return US_STATES[self.state]
        else:
            return self.state

    def get_images(self):
        return self.image.all() or [{'url': '/static/images/noImage.jpg'}]

    def get_absolute_url(self):
        return '/'.join([
            '/' + str(self.state), self.city_slug, self.address_slug,
            str(self.pk)])

    @property
    def city_slug(self):
        return self.translate(str(self.city))

    @property
    def address_slug(self):
        return self.translate(str(self.address))

    class Meta:
        db_table = 'main'
        ordering = ['-id']


class School(models.Model):
    id = models.IntegerField(primary_key=True)
    main = models.ForeignKey(
        'Main', related_name='school', db_column='main_id')
    score = models.CharField(max_length=10)
    name = models.CharField(max_length=100)
    grades = models.CharField(max_length=50)
    distance = models.CharField(max_length=50)

    class Meta:
        db_table = 'schools'


class Image(models.Model):
    id = models.IntegerField(primary_key=True)
    main = models.ForeignKey('Main', related_name='image', db_column='main_id')
    url = models.CharField(max_length=350)
    alt = models.CharField(max_length=200)

    class Meta:
        db_table = 'images'


class City(models.Model):
    name = models.TextField(null=True, blank=True)
    state = models.CharField(max_length=2, null=True, blank=True)
    available = models.BooleanField(default=True)
    image = models.CharField(max_length=350, null=True, blank=True)


class MainRemoved(models.Model):
    main = models.ForeignKey(
        Main, related_name='+', on_delete=models.DO_NOTHING)
    date_removed = models.DateField()

    @property
    def address(self):
        return self.main.address or ''

    @property
    def city(self):
        return self.main.city or ''

    @property
    def state(self):
        return self.main.state or ''

    @property
    def zip_code(self):
        return self.main.zip_code or ''

    @property
    def mainid(self):
        return self.main.id or ''

    @property
    def removed_at(self):
        return self.date_removed.strftime('%Y/%m/%d')

    def get_url(self):
        return self.main.get_url() or ''
