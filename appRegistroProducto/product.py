class Product:
    def __init__(self, nombre, precio, cantidad):   # Constructor
        self.nombre = nombre      # Atributos
        self.precio = precio
        self.cantidad = cantidad

    def toDBCollection(self):      # Función para darnos la estrucutura para poder almacenar los daatos en la DB, retorna un objeto con nuestros datos 
        return{
            'nombre': str(self.nombre),   # Esto es el documento, clave: valor
            'precio': float(self.precio),
            'cantidad': int(self.cantidad)
        }