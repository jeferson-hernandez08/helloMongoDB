
{
    "name": "keyboard",
    "price": 39.90,
    "ammount": 200,
    "available": true,
    "orderDate": new Date("2023-08-12T10:00:00")
}


db.createCollection( "product", { 
    validator: { 
        $jsonSchema: { 
            bsonType: "object", 
            required: [ "name", "price", "ammount", "available", "orderDate", "dimensions" ],
            description: "Los campos name, price, ammount, available, orderDate y dimensions son obligatorios.",
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
                }
            }
        } 
    } 
} )


db.product.insertOne({
    "name": "Monitor",
    "price": 230,
    "ammount": 80,
    "available": true,
    "orderDate": new Date("2023-08-12T14:00:00"),
    "dimensions": null,
})


db.product.insertOne({
    "name": "Keyboard",
    "price": 49.90,
    "ammount": 80,
    "available": true,
    "orderDate": new Date("2023-08-12T14:00:00"),
    "dimensions": "28.5 x 13 x 1.2"
})