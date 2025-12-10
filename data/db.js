const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "movieschema"
});

connection.connect((err) => {
    // if error is true discard it
    if (err) throw err;
    console.log("connected!");

})

module.exports = connection;