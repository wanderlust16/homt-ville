# Generated by Django 3.0.3 on 2020-03-10 03:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('yoga_page', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='branch',
            name='image',
            field=models.ImageField(upload_to='yoga_images'),
        ),
    ]