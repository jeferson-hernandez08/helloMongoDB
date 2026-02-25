db.createCollection( "customer", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: [ "name", "age", "address", "product" ],
            description: "Los campos name, age, address y product son obligatorios.",
            properties: {
                name: {
                    bsonType: "string",
                    description: "Agregar el nombre del cliente."
                },
                age: {
                    bsonType: "int",
                    minimum: 18,
                    maximum: 110,
                    description: "La edad debe estar entre el rango de 18 a 110 años."
                },
                address:{
                    bsonType: "object",
                    required: [ "country", "city", "avenue" ],
                    description: "Los campos country, city y avenue son obligatorios",
                    properties: {
                        country: {
                            bsonType: "string",
                            description: "Debe ingresar el nombre del país."
                        },
                        city: {
                            bsonType: "string",
                            description: "Debe ingresar el nombre de la ciudad."
                        },
                        avenue: {
                            bsonType: "string",
                            description: "Debe ingresar la avenida de su domicilio."
                        }
                    }
                },
                product: {
                    bsonType: "array",
                    description: "Debemos agregar una matriz.",
                    items: {
                        bsonType: "object",
                        required: [ "productId" ],
                        properties: {
                            productId: {
                                bsonType: "objectId",
                                description: "Debe insertar un tipo de dato objectId."
                            }
                        }
                    }
                }
            }
        }
    }
} )

db.customer.insertOne(
    {
        name: "Cristian",
        age: 15
    }
)

db.customer.insertOne(
    {
        name: "Cristian",
        age: 48,
        address: {
            country: "Perú",
            city: "Lima",
            avenue: "Jr de historia 222"
        },
        product: [
            {
                productId: ObjectId('699f585a9c42f273f17c290d')
            }
        ]
    }
)