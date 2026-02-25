db.runCommand( { collMod: "product", 
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
})