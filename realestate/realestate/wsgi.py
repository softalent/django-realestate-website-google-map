"""
WSGI config for realestate project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/1.7/howto/deployment/wsgi/
"""

import os
import sys

path = "/root/seethisproperty/stp-django/realestate/realestate"
    if path not in sys.path:
        sys.path.append(path)
        
os.environ['PYTHON_EGG_CACHE'] = '/tmp/.python-eggs'
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "realestate.settings")

from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
