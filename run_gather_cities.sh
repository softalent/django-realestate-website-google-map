#!/bin/bash

cd /var/www/html/seethisproperty
source seethisproperty-env/bin/activate
cd stp-django/realestate
python manage.py gather_cities >> gather_cities_log.txt
deactivate
