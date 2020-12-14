from core import views
from django.urls import path

urlpatterns = [
    path('api/dapau', views.dapau),
    path('api/login', views.login),
    path('api/logout', views.logout),
    path('api/whoami', views.whoami),
    path('api/settings', views.settings),
    path('api/add_todo', views.add_todo),
    path('api/list_todos', views.list_todos),
    path('/api/list_names', views.list_names),
    path('api/list_messages', views.list_messages),
    path('/api/message_salva', views.message_salva),
    path('/api/aniversario_salva', views.aniversario_salva)
]
