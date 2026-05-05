{
maritalStatus: "M",
}



_id: 0,
email: 1,
phone: 1,
address: 1,
fullName: {
$concat: [
{
$toLower: "$name.FirstName",
},
" ",
{
$toUpper: {
$ifNull: ["$name.MiddleName", ""],
},
},
" ",
{
$toUpper: "$name.LastName",
},
],
}




fullName: {
$replaceOne: {
input: "$fullName",
find: " ",
replacement: " ",
},
},
email: 1,
phone: 1,
address: 1,




