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
    validationAction: "warn"
 } )



db.contact2.insertOne(
    { name: "Erika", email: "amanda@xyz.com" }
)


db.adminCommand(
    { getLog:'global'} ).log.forEach(x => { print(x) }
)