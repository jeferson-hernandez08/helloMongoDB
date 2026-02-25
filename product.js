
{
    "name": "keyboard",
    "price": 39.90,
    "ammount": 200,
    "available": true,
    "orderDate": new Date("2023-08-12T10:00:00")
}


{
    "name": "mouse",
    "price": 19.90,
    "ammount": 50,
    "available": true,
    "orderDate": new Date("2023-08-13T10:00:00"),
    "warranty": "1 year"
}


db.createCollection( "product", { 
    validator: { 
        $jsonSchema: { 
            bsonType: "object", 
            required: [ "name", "price", "ammount", "available", "orderDate" ],
            description: "Los campos name, price, ammount, available y orderDate son obligatorios.",
            properties: {
                name: {
                    bsonType: "string",
                    description: "Solo acepta tipo de dato string."
                },
                price: {
                    bsonType: "double",
                    description: "Solo acepta valores decimales."
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
                }
            }
        } 
    } 
} )