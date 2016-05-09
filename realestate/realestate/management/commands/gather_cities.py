# coding:utf-8
from django.core.management.base import BaseCommand
from realestate import models
import requests
import json
import us


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
            city_name = city.get('city', 'blank')
            state_abbr = city.get('state', 'blank')
            obj, created = models.City.objects.get_or_create(
                name=city_name,
                state=state_abbr)
            if created:
                c_count += 1
            else:
                if obj.available != city.get('available', False):
                    u_count += 1
            obj.available = city.get('available', False)
            image_url = self.get_city_thumb(city_name, state_abbr)
            if not image_url:
                try:
                    image_url = models.Main.objects.filter(
                        city=city_name,
                        state=state_abbr,
                        available=True)[0].image.all()[0].url
                except:
                    image_url = ''
            obj.image = image_url
            obj.save()
            t_count += 1
            print('Total of {0} cities on DB'.format(t_count))

        msg = 'END!{0} cities created and {1} updated'.format(c_count, u_count)
        print(msg)

    def get_city_thumb(self, city_name, state):
        url = 'https://en.wikipedia.org/w/api.php'
        params = {
            'action': 'query',
            'prop': 'pageimages',
            'rvprop': 'content',
            'format': 'json',
            'pithumbsize': '300'
        }

        try:
            params['titles'] = city_name
            page_json = json.loads(requests.get(url, params=params).content)
            page_id = page_json.get('query').get('pages').keys()[0]
            thumb_url = page_json.get(
                'query').get('pages').get(page_id).get(
                'thumbnail').get('source')
        except:
            thumb_url = ''

        if not thumb_url:
            try:
                params['titles'] = city_name + ',_' + us.states.lookup(
                    state).name
                page_json = json.loads(requests.get(
                    url, params=params).content)
                page_id = page_json.get('query').get('pages').keys()[0]
                thumb_url = page_json.get(
                    'query').get('pages').get(page_id).get(
                    'thumbnail').get('source')
            except:
                pass
        return thumb_url
