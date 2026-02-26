db.contact.insertMany([
    {
        "_id": 1,
        "name": "Cristian",
        "phone": "988776655",
        "country": "Perú",
        "city": "Ica" 
    },
    {
        "_id": 2,
        "name": "Fernanda",
        "country": "Perú"
    }
])




db.runCommand( {
    collMod: "contact",
    validator: { $jsonSchema: {
       bsonType: "object",
       required: [ "name", "phone" ],
       properties: {
        name: {
            bsonType: "string",
            description: "Ingre el nombre."
        },
        phone: {
            bsonType: "string",
            description: "Ingrese el numero de telefono."
        }
       }
    } },
    validationLevel: "strict"
 } )




 db.contact.updateOne(
    { _id: 1 },
    { $set: { name: "Erick" } }
 )

 db.contact.updateOne(
    { _id: 2 },
    { $set: { name: "Isabel" } }
 )

 db.contact.updateOne(
    { _id: 2 },
    { $set: { name: "Isabel", phone: "911223344" } }
 )