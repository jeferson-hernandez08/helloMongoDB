db.createCollection( "employee", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            properties: {
                employees: {
                    bsonType: "array",
                    description: "Debemos agregar una matriz.",
                    items: {
                        bsonType: "object",
                        required: [ "name", "lastName" ],
                        properties: {
                            name: {
                                bsonType: "string",
                                description: "Debe ingresar el nombre."
                            },
                            lastName: {
                                bsonType: "string",
                                description: "Debe ingresar el apellido."
                            }
                        }
                    }
                }
            }
        }
    }
} )


db.employee.insertOne(
    {
        employees: [
            {
                name: "Hugo",
                lastName: "Fernandez"
            },
            {
                name: "Marco",
                lastName: "Prado"
            },
            {
                name: "Micaela",
                lastName: "Rojas"
            }
        ]
    }
)