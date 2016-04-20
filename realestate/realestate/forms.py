from django import forms


class ContactForm(forms.Form):
    name = forms.CharField()
    phone = forms.CharField()
    email = forms.CharField()
