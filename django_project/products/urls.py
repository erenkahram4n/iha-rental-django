from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from products.views import *

urlpatterns = [
path('urunler/', products, name='products'),
path('urun/<int:productId>/', detail, name='product'),
path('urun-olustur/', create, name='create'),
path('urun-duzenle/<int:productId>/', edit, name='edit'),
path('urun-sil/<int:productId>/', delete_product, name='delete_product'),
path('kirala/', rent, name='rent'),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)