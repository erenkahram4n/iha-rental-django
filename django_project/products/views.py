from django.shortcuts import render, redirect, get_object_or_404
from django.db.models import Q
from .models import *
from django.contrib import messages
from .forms import *
from django.core.exceptions import PermissionDenied

# Create your views here.

def products(request):
    products= Products.objects.all()
    categories = Category.objects.all()
    search=''
    if request.GET.get('search'):
        search = request.GET.get('search')
        products = Products.objects.filter(
            Q(category__name__icontains = search) |
            Q(brand__icontains = search) |
            Q(model__icontains = search)
        )
    context = {
        'products':products,
        'search':search,
        'categories':categories,
    }
    return render(request, 'baykarmagaza.com/tr/product/product-list/index2cf8.html', context);
def detail(request, productId):
    products = Products.objects.filter(id = productId)
    context = {
        'products':products
    }
    return render(request, 'baykarmagaza.com/tr/product/detail/detail.html', context)

def superuser_required(function):
    def wrap(request, *args, **kwargs):
        if not request.user.is_superuser:
            raise PermissionDenied
        return function(request, *args, **kwargs)
    return wrap
@superuser_required
def create(request):
    form = ProductForm()
    if request.method == 'POST':
        form = ProductForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            messages.success(request, 'Ürün Oluşturuldu ve Eklendi')
            return redirect('products')
    
    context = {
        'form':form
    }
    return render(request, 'baykarmagaza.com/tr/product/create.html', context)

@superuser_required
def edit(request, productId):
    product = get_object_or_404(Products, pk=productId)
    if request.method == 'POST':
        form = ProductForm(request.POST, request.FILES, instance=product)
        if form.is_valid():
            form.save()
            return redirect('detail', pk=product.pk) 
    else:
        form = ProductForm(instance=product)
    return render(request, 'baykarmagaza.com/tr/product/edit.html', {'form': form, 'product': product})

@superuser_required
def delete_product(request, productId):
    product = get_object_or_404(Products, pk=productId)
    
    if request.method == 'POST':
        product.delete()
        return redirect('products')
    
    return render(request, 'baykarmagaza.com/tr/product/delete.html', {'product': product})

def rent(request):
    return render(request, 'baykarmagaza.com/tr/product/rent.html')

