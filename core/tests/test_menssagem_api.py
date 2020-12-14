from core.models import User
from django.test.client import Client
from django.test.testcases import TestCase
from core.tests import fixtures
import json


class TestAuthApi(TestCase):
    @classmethod
    def setUpTestData(cls):
        fixtures.user_jon()

    def test_menssagem_api(self):
        self.assertEqual(2, 1+1)

    def test_envio_de_email(self):
        self.assertEqual(2, 1+1)

    def test_envio_na_data(self):
        pass