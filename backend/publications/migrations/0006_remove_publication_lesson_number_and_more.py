# Generated by Django 5.0 on 2023-12-16 12:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('publications', '0005_alter_publication_image_url_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='publication',
            name='lesson_number',
        ),
        migrations.RemoveField(
            model_name='publication',
            name='lesson_type',
        ),
        migrations.RemoveField(
            model_name='publication',
            name='semester',
        ),
        migrations.RemoveField(
            model_name='publication',
            name='subject',
        ),
        migrations.RemoveField(
            model_name='publication',
            name='teacher',
        ),
        migrations.RemoveField(
            model_name='publication',
            name='type',
        ),
        migrations.AlterField(
            model_name='publication',
            name='image_url',
            field=models.ImageField(default='images/ok.jpg', null=True, upload_to='images'),
        ),
        migrations.AlterField(
            model_name='publication',
            name='main_file_url',
            field=models.FileField(null=True, upload_to='files'),
        ),
    ]
