from django.db import models

# Create your models here.
class Category(models.Model):
    name= models.CharField(max_length=35)

    def __str__(self):
        return self.name
    
class Products(models.Model):
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)
    brand = models.CharField(max_length=30)
    model = models.CharField(max_length=50)
    weight = models.CharField(max_length=100)
    details = models.CharField(max_length=500)
    price = models.IntegerField()
    photo = models.FileField(upload_to='products/',null=True)

    def __str__(self):
        return f"{self.category} / {self.brand} / {self.model}"
