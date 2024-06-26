# Generated by Django 5.0.6 on 2024-06-22 18:56

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('isim', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='subCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('isim', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('marka', models.CharField(max_length=30)),
                ('model', models.TextField(max_length=30)),
                ('price', models.IntegerField()),
                ('photo', models.FileField(blank=True, null=True, upload_to='products/')),
                ('slug', models.SlugField(blank=True, editable=False, null=True)),
                ('category', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='products.category')),
                ('subCategory', models.ManyToManyField(to='products.subcategory')),
            ],
        ),
    ]
