db.createUser(
    {
        user: "userDataScience",
        pwd: passwordPrompt(),
        roles: [
            {
                role: "read",
                db: "onlineEducation"
            },
            {
                role: "read",
                db: "Datademy"
            }
        ]
    }
)


db.updateUser(
    "userDataScience",
    {
        roles: [
            {
                role: "readWrite",
                db: "onlineEducation"
            },
            {
                role: "readWrite",
                db: "Datademy"
            }
        ]
    }
)

// Prueba Commit