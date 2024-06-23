from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from users.views import *

urlpatterns = [
path('giris/', userLogin, name='login'),
path('kayit/', userRegister, name='register'),
path('cikis/', userLogout, name='logout'),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT);