const mysql = require('mysql');
const con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "contacts-crud"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = {
    connection: con,
}