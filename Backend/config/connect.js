//  his is how to connect to database
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: '',
    database: "product_database"
})

module.exports = pool.promise();