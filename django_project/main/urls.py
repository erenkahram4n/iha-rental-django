from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from main.views import *

urlpatterns = [
path('', home, name='home'),
path('giyim/', giyim, name='giyim'),
path('maket/', maket, name='maket'),
path('cocuk-giyim/', cocuk, name='cocuk'),
path('aksesuar/', aksesuar, name='aksesuar'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT);