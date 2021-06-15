const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

// Database Connection
const dbConnect = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

dbConnect.connect(function (error) {
    if (error) throw error;
    console.log('Database Connected Successfully.');
});

module.exports = dbConnect;