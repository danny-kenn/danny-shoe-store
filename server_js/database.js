const mysql = require('mysql2'); // Use mysql2 library

const pool = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "6132",
    database: "mydatabase",
    connectionLimit: 10
});

pool.query('SELECT * FROM registration', (err, result, fields) => {
    if (err) {
        return console.log(err);
    }
    console.log(result);
});
