db.runCommand( { collMod: "product", 
    validator: { 
        $jsonSchema: { 
            bsonType: "object", 
            required: [ "name", "price", "ammount", "available", "orderDate", "dimensions", "color", "brand" ],
            description: "Los campos name, price, ammount, available, orderDate, dimensions, color y brand son obligatorios.",
            properties: {
                name: {
                    bsonType: "string",
                    description: "Solo acepta tipo de dato string."
                },
                price: {
                    bsonType: [ "double", "int" ],
                    description: "Acepta double o int."
                },
                ammount: {
                    bsonType: "int",
                    description: "Solo acepta valores enteros."
                },
                available: {
                    bsonType: "bool",
                    description: "Solo acepta true o false."
                },
                orderDate: {
                    bsonType: "date",
                    description: "Solo acepta fecha."
                },
                dimensions: {
                    bsonType: [ "null", "string" ],
                    description: "Acepta valores null o string."
                },
                color: {
                    bsonType: "array",
                    description: "Agregar los colores disponibles del producto.",
                    minItems: 1,
                    uniqueItems: true
                },
                brand: {
                    enum: [ "Logitech", "Microsoft", "Corsair", "Apple" ],
                    description: "Solo se acepta marcas que se encuentren en la lista."
                }
            }
        } 
    }
})



db.product.insertOne(
    {
        "name": "Mouse",
        "price": 19.90,
        "ammount": 20,
        "available": true,
        "orderDate": new Date("2023-08-15T14:00:00"),
        "dimensions": null,
        "color": [ "Red", "Blue", "Green", "Red", "Green" ]
    }
)


db.product.insertOne(
    {
        "name": "Mouse",
        "price": 19.90,
        "ammount": 20,
        "available": true,
        "orderDate": new Date("2023-08-15T14:00:00"),
        "dimensions": null,
        "color": [ "Red", "Blue", "Green" ]
    }
)


db.product.insertOne(
    {
        "name": "Mouse",
        "price": 19.90,
        "ammount": 20,
        "available": true,
        "orderDate": new Date("2023-08-15T14:00:00"),
        "dimensions": null,
        "color": [ "Red", "Blue", "Green" ],
        "brand": "Mouse AA"
    }
)


db.product.insertOne(
    {
        "name": "Mouse",
        "price": 19.90,
        "ammount": 20,
        "available": true,
        "orderDate": new Date("2023-08-15T14:00:00"),
        "dimensions": null,
        "color": [ "Red", "Blue", "Green" ],
        "brand": "Logitech"
    }
)