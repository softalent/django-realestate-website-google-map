from django.conf.urls import patterns, include, url
from django.contrib import admin
from rest_framework import routers
from realestate import views


router = routers.DefaultRouter()
router.register(r'main', views.MainViewSet)

urlpatterns = patterns(
    '',
    url(r'^api/', include(router.urls)),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', views.HomeView.as_view(), name='home'),
    # Receives as parameters State / City / Address
    url(r'^(?P<s>[A-Z]{2})/(?P<c>[-A-Za-z]{2,20})/(?P<a>[-\w\s]{3,100})/$',
        views.PropertyView.as_view(), name='property'),
)
