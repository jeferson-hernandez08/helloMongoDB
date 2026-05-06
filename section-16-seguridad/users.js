db.createUser(
    {
        user: "adminFake",
        pwd: "1234",
        roles: [
            { 
                role: "userAdminAnyDatabase", 
                db: "admin" 
            },
            {
                role: "readWriteAnyDatabase",
                db: "admin"
            }
        ]
    }
)


db.createUser(
    {
        user: "adminDatademy",
        pwd: passwordPrompt(),
        roles: [
            { 
                role: "userAdminAnyDatabase", 
                db: "admin" 
            },
            {
                role: "readWriteAnyDatabase",
                db: "admin"
            }
        ]
    }
)