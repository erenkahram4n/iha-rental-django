from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout

# Create your views here.

def userLogin(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            messages.success(request, 'Giriş yapıldı!')
            return redirect('home')
        else:
            messages.error(request,'e-posta veya şifre hatalı!')
            return redirect('login')
    return render(request, 'baykarmagaza.com/tr/account/login/index.html');

def userRegister(request):
    if request.method == 'POST':
        username = request.POST['username'];
        password1 = request.POST['password1'];
        password2 = request.POST['password2'];
        if username != '' and password1 != '' and password2 != '':
            if password1 == password2:
                if User.objects.filter(username = username).exists():
                    messages.error(request, 'Bu e-posta adresi zaten mevcut!');
                    return redirect('register');
                elif len(password1) < 6:
                    messages.error(request, 'Şifre en az 6 karakter olmalıdır!');
                    return redirect('register');
                else:
                    user = User.objects.create_user(username =username, password=password1);
                    user.save();
                    messages.success(request, 'Kullanıcı oluşturuldu!');
                    return redirect('login');
            else:
                messages.error(request, 'Şifreler uyuşmuyor!');
                return redirect('register');
        else:
            messages.error(request, 'Tüm alanların doldurulması zorunludur!');
            return redirect('register');
    return render(request, 'baykarmagaza.com/tr/account/signup/index.html');

def userLogout(request):
    logout(request);
    messages.success(request,'Çıkış Yapıldı!');
    return redirect('home');