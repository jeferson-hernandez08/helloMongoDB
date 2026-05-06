db.employees.aggregate([
    { $project: {
        _id: 0, name: 1, email: 1,
        birthDate: { $toDate: "$date.birthDate" },
        hireDate: { $toDate: "$date.hireDate" },
        coordinates: { 
            latitude: { $toDouble: "$coordinates.latitude" },
            longitude: { $toDouble: "$coordinates.longitude" }
        }
    } },
    {
        $project: {
            name: 1, email: 1, birthDate: 1, hireDate: 1,
            location: {
                type: "Point",
                coordinates: [
                    "$coordinates.longitude",
                    "$coordinates.latitude"
                ]
            }
        }
    },
    {
        $out: "geoJsonEmployees"
    }
])