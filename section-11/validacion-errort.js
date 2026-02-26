db.createCollection( "contact2", {
    validator: { $jsonSchema: {
       bsonType: "object",
       required: [ "name" ],
       properties: {
          name: {
             bsonType: "string",
             description: "Debe ingresar un nombre."
          },
          email: {
             bsonType : "string",
             pattern : "@mongodb\\.com$",
             description: "Debe ingresar un correo electronico valido."
          }
       }
    } },
    validationAction: "error"
 } )


db.contact2.insertOne(
    {
        name: "Cristian",
        email: "cristian@abc.com"
    }
)

db.contact2.insertOne(
    {
        name: "Cristian",
        email: "cristian@mongodb.com"
    }
)