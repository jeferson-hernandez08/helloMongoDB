db.createUser(
    {
        user: "userBackup",
        pwd: passwordPrompt(),
        roles: [
            {
                role: "backup",
                db: "admin"
            },
            {
                role: "restore",
                db: "admin"
            }
        ]
    }
)