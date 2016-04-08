from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from api.serializers import UserSerializer, GroupSerializer, CitiesSerializer, StatesSerializer, PropertiesSerializer
from models import Cities, Properties, States

###function to replace special characters with hyphen###
def translate(data):
	character= '/,*,#,$,%,^,&,@, ,'
	newdata =[]
	for i in data:
		if i not in character:
			newdata.append(i)
		else:
			newdata.append('-')
	        new_add=''.join(newdata)
	return new_add

###unction to replace special characters from fetched value from db with space###
def rm_special(data):
	character= '/,*,#,$,%,^,&,@'
	newdata =[]
	for i in data:
		if i not in character:
			newdata.append(i)
		else:
			newdata.append(' ')
	        new_add=''.join(newdata)
	return new_add

# tell CitiesViewSet what state to look under and PropertiesViewSet what city/state to look under?
# data = []
# results = {'city':'', 'state':'',}
class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

class StatesViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows states to be viewed and selected.
    """
    queryset = States.objects.raw('SELECT DISTINCT state FROM main')
    serializer_class = StatesSerializer


class CitiesViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows cities to be viewed and selected.
    """
    queryset = Cities.objects.raw("SELECT DISTINCT city FROM main WHERE state='%s'" % States.state)
    serializer_class = CitiesSerializer

class PropertiesViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows properties to be viewed and selected.
    """
    queryset = States.objects.raw("SELECT id, city, state, address, zip_code FROM main WHERE state='%s' AND city='%s'" % (States.state, Cities.city))
    serializer_class = PropertiesSerializer

    # get URL for each address
    for i in queryset:
        current_url = '/%s/%s/%s' % (i.state, i.city, i.address)
    	query_state=current_url.split('/',3)
    	state=query_state[1]
    	query_city=current_url.split('/',4)
    	city=query_city[2]
    	query_address=current_url.split('/',5)
    	address=query_address[3]
    	new_add=address.replace('-','%')
    	new_address=translate(address)
    	new_url=str('/'+state+'/'+city+'/'+new_address+'/')
        States.url_string = new_url
