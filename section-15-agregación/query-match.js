db.employees.aggregate([
    { $match: { maritalStatus: "S" } }
])

db.employees.aggregate([
    { $match: { 
        $and: [
            {
                maritalStatus: "S"
            },
            {
                gender: "male"
            }
        ]
    } }
])

db.employees.aggregate([
    { $match: { 
        $and: [
            {
                maritalStatus: "S"
            },
            {
                gender: "male"
            }
        ]
    } },
    { $group: { _id: { country: "$location.country"}, countEmployee: { $count: { } } } }
])

db.employees.aggregate([
    { $match: { 
        $and: [
            {
                maritalStatus: "S"
            },
            {
                gender: "male"
            }
        ]
    } },
    { $group: { _id: { country: "$location.country"}, countEmployee: { $sum: 2 } } }
])

db.employees.aggregate([
    { $match: { 
        $and: [
            {
                maritalStatus: "S"
            },
            {
                gender: "male"
            }
        ]
    } },
    { $group: { _id: { country: "$location.country"}, maxYearPaymentPerCountry: { $max: "$yearlyPayment" } } }
])

db.employees.aggregate([
    { $match: { 
        $and: [
            {
                maritalStatus: "S"
            },
            {
                gender: "male"
            }
        ]
    } },
    { $group: { _id: null, count: { $count: {  } }  } }
])

db.employees.aggregate([
    { $match: { 
        $and: [
            {
                maritalStatus: "S"
            },
            {
                gender: "male"
            }
        ]
    } },
    { $group: { _id: { country: "$location.country", state: "$location.state" }, countEmployee: { $count: {}  } } }
])