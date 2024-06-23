from django.forms import DateTimeInput

class BootstrapDateTimePickerInput(DateTimeInput):
    template_name = 'widgets/bootstrap_datetimepicker.html'  # Özel widget template'i

    def __init__(self, attrs=None):
        default_attrs = {'class': 'datetimepicker-input form-control'}
        if attrs:
            default_attrs.update(attrs)
        super().__init__(attrs=default_attrs)