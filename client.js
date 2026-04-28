db.createCollection( "client", { 
    validator: { 
        $jsonSchema: { 
            bsonType: "object", 
            required: [ "name", "age", "email" ],
            description: "Los campos name, age y email son obligatorios.",
            properties: {
                name: {
                    bsonType: "string",
                    description: "Solo acepta tipo de dato string."
                },
                age: {
                    bsonType: "int",
                    description: "Acepta int(32 bit)."
                },
                email: {
                    bsonType: [ "null", "string" ],
                    description: "Acepta valores null o string."
                }
            }
        }
    } 
} )