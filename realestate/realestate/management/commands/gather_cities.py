# coding:utf-8
from django.core.management.base import BaseCommand
from realestate import models


class Command(BaseCommand):

    def handle(self, *args, **options):
        # Get all cities with available properties
        cities = models.Main.objects.all().order_by('city').distinct('city')

        cities_dict = [
            {'city': x.city, 'state': x.state, 'available': x.available}
            for x in cities]

        c_count = 0  # created count
        u_count = 0  # updated count
        t_count = 0  # total count
        for city in cities_dict:
            obj, created = models.City.objects.get_or_create(
                name=city.get('city', 'blank'),
                state=city.get('state', 'blank'))
            if created:
                c_count += 1
            else:
                if obj.available != city.available:
                    u_count += 1
            obj.available = city.available
            obj.save()
            t_count += 1
            print('Total of {0} cities on DB'.format(t_count))

        msg = 'END!{0} cities created and {1} updated'.format(c_count, u_count)
        print(msg)
