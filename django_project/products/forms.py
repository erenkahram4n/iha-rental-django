from django.forms import ModelForm
from .models import *
from .widgets import BootstrapDateTimePickerInput
from django.utils import timezone
from django import forms

class ProductForm(ModelForm):
    class Meta:
        model = Products
        fields = ['category', 'brand', 'model','weight', 'details', 'price', 'photo']

    def __init__(self, *args, **kwargs):
        super(ProductForm, self).__init__(*args, **kwargs)
        for name, field in self.fields.items():
            field.widget.attrs.update({'class':'form-control'})

class RentalForm(forms.Form):
    start_time = forms.DateTimeField(widget=BootstrapDateTimePickerInput())
    end_time = forms.DateTimeField(widget=BootstrapDateTimePickerInput())

    def clean(self):
        cleaned_data = super().clean()
        start_time = cleaned_data.get('start_time')
        end_time = cleaned_data.get('end_time')

        if start_time and end_time:
            if start_time >= end_time:
                raise forms.ValidationError('Başlangıç zamanı bitiş zamanından büyük olamaz.')

            if end_time <= timezone.now():
                raise forms.ValidationError('Geçmiş tarihler için kiralanamaz.')

        return cleaned_data