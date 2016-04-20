"""
Django settings for realestate project.

For more information on this file, see
https://docs.djangoproject.com/en/1.7/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.7/ref/settings/
"""

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
import os
from decouple import config
from dj_database_url import parse as dburl

# BASE_DIR = os.path.dirname(os.path.dirname(__file__))
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.7/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = config('SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
<<<<<<< HEAD
DEBUG = config('DEBUG', default=False, cast=bool)
=======
DEBUG = False
>>>>>>> 7b422abf0f27649badd1aa035c77c14ee68c5ede

TEMPLATE_DEBUG = False

ALLOWED_HOSTS = ['seethisproperty.com', 'www.seethisproperty.com', '148.251.15.39']

# Application definition

INSTALLED_APPS = (
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'realestate',
    'rest_framework',
)

MIDDLEWARE_CLASSES = (
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.auth.middleware.SessionAuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
)


ROOT_URLCONF = 'realestate.urls'

WSGI_APPLICATION = 'realestate.wsgi.application'


# https://docs.djangoproject.com/en/1.9/ref/settings/#databases
default_dburl = 'sqlite:///' + os.path.join(BASE_DIR, 'db.sqlite3')
DATABASES = {
<<<<<<< HEAD
    'default': config('DATABASE_URL', default=default_dburl, cast=dburl),
=======
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'house_rent',
        'USER': 'app_user',
        'PASSWORD': 'P8zR3cPjAh87p3J',
        'HOST': '127.0.0.1',
        'PORT': '5432',
    }
>>>>>>> 7b422abf0f27649badd1aa035c77c14ee68c5ede
}


REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': ('rest_framework.permissions.IsAdminUser',),
}

# Internationalization
# https://docs.djangoproject.com/en/1.7/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.7/howto/static-files/

STATIC_URL = '/static/'
MEDIA_URL = '/images/'


REST_FRAMEWORK = {
    'DEFAULT_RENDERER_CLASSES': (
        'rest_framework.renderers.JSONRenderer',
    ),
}


EMAIL_USE_TLS = False
EMAIL_HOST = 'mail.seethisproperty.com'
EMAIL_PORT = 587
EMAIL_HOST_USER = 'contact@seethisproperty.com'
EMAIL_HOST_PASSWORD = '2vdn8bhm1k'
DEFAULT_FROM_EMAIL = 'contact@seethisproperty.com'
