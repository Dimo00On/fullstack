# Generated by Django 5.0 on 2023-12-16 13:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('publications', '0007_rename_posted_by_publication_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='publication',
            name='other_tags',
            field=models.ManyToManyField(blank=True, to='publications.tag'),
        ),
    ]
