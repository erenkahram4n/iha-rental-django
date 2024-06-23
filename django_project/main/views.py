from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'index.html');
def giyim(request):
    return render(request, 'baykarmagaza.com/tr/product/product-list/indexd94b.html');
def maket(request):
    return render(request, 'baykarmagaza.com/tr/product/product-list/index3412.html');
def cocuk(request):
    return render(request, 'baykarmagaza.com/tr/product/product-list/index40d7.html');
def aksesuar(request):
    return render(request, 'baykarmagaza.com/tr/product/product-list/index80ce.html');