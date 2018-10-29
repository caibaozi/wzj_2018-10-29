from django.conf.urls import url

from App import views

urlpatterns=[
    url(r'^$',views.index),
    url(r'^cart/$',views.cart),
    url(r'^list/$',views.list),
    url(r'load/$',views.load),
    url(r'^product/$',views.product),
    url(r'^register/$',views.register)
]