# coding:utf-8
import os
from PIL import Image
from django.conf import settings


class Thumbnailed(object):
    def __init__(self, file, thumbnail_size=(150, 150)):
        self.thumbnail_size = thumbnail_size
        self.file = file
        self.image = Image.open(self.file.file)
        self.full_name = self.file.name
        self.file_extension = self.full_name.split('.')[-1]
        self.name_noext = self.full_name.replace('.' + self.file_extension, '')
        self.thumb_name = self.name_noext + '_thumb.jpg'
        self.thumb_url = settings.MEDIA_URL + self.thumb_name
        # Convert to RGB if necessary
        if self.image.mode not in ('L', 'RGB'):
            try:
                self.image = self.image.convert('RGB')
            except:
                pass

    def compress_image(self, quality=70):
        try:
            self.image.save(self.full_name, quality=quality)
        except:
            pass

    def create_thumbnail(self, quality=70):
        try:
            thumb = self.image.copy()
            thumb.thumbnail(self.thumbnail_size)
            thumb.save(
                settings.MEDIA_ROOT + '/' + self.thumb_name,
                'jpeg', quality=quality)
        except Exception as e:
            print(e)

    def delete_thumbnail(self):
        try:
            os.remove(settings.MEDIA_ROOT + '/' + self.thumb_name)
            os.remove(settings.MEDIA_ROOT + '/' + self.full_name)
        except Exception as e:
            print(e)
