from django.shortcuts import render
import sys
# Create your views here.
from django.http import HttpResponse
from django.shortcuts import render_to_response, redirect
from django.template import RequestContext
from django.template.loader import get_template
from models import Main, schools,listing_provider,images
import os
from django.core.urlresolvers import resolve
from django.core.urlresolvers import reverse
from django.http import HttpResponseRedirect
from django.http import HttpResponsePermanentRedirect
import json
from django.core.mail import send_mail
from django.template.loader import get_template
from django.template import Context
import ast


###render to home page###
def home(request):
	ctx = RequestContext(request, {})
	return render_to_response('home.html',
                              {
                              }, context_instance=ctx)

###send email from see this property contact form###
def send_email(request):
	if request.method=='POST':
		print 'yes inside function...'
		full_name=request.POST['full_name']
		email=request.POST['email']
		phone=request.POST['phone']
		send_mail('New Query through website',get_template('email-template/email.html').render(
        Context({
            'name': full_name,
            'email': email,
            'phone' : phone,
        })
    	),
    	['admin@localmarketingenterprisesllc.com'],
    	fail_silently = True
		)
		return HttpResponse('OK')
	else:
		print 'no'

###function to fetch data from database###
def property(request,state,city,address):
	current_url = str(request.path)
	query_state=current_url.split('/',3)
	state=query_state[1]
	query_city=current_url.split('/',4)
	city=query_city[2]
	query_address=current_url.split('/',5)
	address=query_address[3]
	new_add=address.replace('-','%')
	new_address=translate(address)
	new_url=str('/'+state+'/'+city+'/'+new_address+'/')
	image_data=[]
	image_dict={'path':'','alt':''}
	school_data=[]
	school_dict={'name':'','grades':'','distance':''}
	main_data=[]
	main_dict={'address':'','state':'','city':'','zip_code':'','bedrooms':'','bathrooms_full':'',
	'bathrooms_half':'','square_feet':'','square_feet_lot':'','price':'','description':'','style':'',
	'home_type':'','year_built':'','price_per_square_foot':'','date_posted':'','status':'','longitude':'',
	'latitude':'','create_date':'','features':''}
	for data in Main.objects.raw ('SELECT * FROM Main WHERE address LIKE %s ', ['%'+new_add+'%']):
		main_id=data.id
		db_address=data.address
		address=rm_special(db_address)
		price=data.price[:-3]
		main_dict['address']=address
		main_dict['price']=price
		main_dict['state']=data.state
		main_dict['city']=data.city
		main_dict['zip_code']=data.zip_code
		main_dict['bedrooms']=data.bedrooms
		main_dict['bathrooms_full']=data.bathrooms_full
		main_dict['bathrooms_half']=data.bathrooms_half
		main_dict['square_feet']=data.square_feet
		main_dict['square_feet_lot']=data.square_feet_lot
		main_dict['description']=data.description
		main_dict['latitude']=data.latitude
		main_dict['longitude']=data.longitude
		main_dict['home_type']=data.home_type
		main_dict['year_built']=data.year_built
		main_dict['price_per_square_foot']=data.price_per_square_foot
		main_dict['date_posted']=data.date_posted
		main_dict['status']=data.status
		main_dict['create_date']=data.create_date
		main_dict['features']=data.features
		main_data.append(main_dict.copy())


	for img in images.objects.raw('SELECT * FROM images WHERE main_id = %s', [main_id]):
		img_path=img.url
		alt_tag=img.alt
		image_dict['path']=str(img_path)
		image_dict['alt']=str(alt_tag)
		image_data.append(image_dict.copy())
	for info in schools.objects.raw('SELECT * FROM schools WHERE main_id = %s', [main_id]):
		name=info.name
		grades=info.grades
		distance=info.distance
		school_dict['name']=str(name)
		school_dict['grades']=grades
		school_dict['distance']=distance
		school_data.append(school_dict.copy())

	ctx = RequestContext(request, {})
	return render_to_response('index.html',
                              {'image_data':image_data,'school_data':school_data,
                              'main_data':main_data,'new_url':new_url
                              }, context_instance=ctx)


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
