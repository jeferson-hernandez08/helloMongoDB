from pymongo import MongoClient
import certifi
import urllib

MONGO_URI = "mongodb+srv://jeferson_hernandez_udemy:" + urllib.parse.quote('ASDasd.123') + "@cluster0.resnduv.mongodb.net/?appName=Cluster0"
ca = certifi.where()

def dbConnection():
    try:
        client = MongoClient(MONGO_URI, tlsCAFile = ca)
        db = client["db_app_product"]    # Nombre de base de datos db_app_product, le podemos cualquier nombre aquí
    except ConnectionError as e:
        print("Error de conexión con la base de datos!")
    else:
        print("Estás conectado!")   
        return db