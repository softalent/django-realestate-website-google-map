# coding:utf-8
from django.core.management.base import BaseCommand
from realestate import models


class Command(BaseCommand):

    def handle(self, *args, **options):
        # Get all cities with available properties
        cities = models.Main.objects.filter(
            available=True).order_by('city').distinct('city')

        c_count = 0
        u_count = 0
        for city in cities:
            obj, created = models.City.objects.get_or_create(
                name=city.city,
                state=city.state,
                zip_code=city.zip_code)
            if created:
                c_count += 1
            else:
                if obj.available != city.available:
                    u_count += 1
            obj.available = city.available
            obj.save()

        msg = '{0} cities created and {1} updated'.format(c_count, u_count)
        print(msg)
