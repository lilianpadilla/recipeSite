const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('MySQL connection successful!');
});

module.exports = connection;

// not sure where to put this, but most of the recipe descriptions and ingredient desriptions where either AI generated
// taken from other recipe sites/wikipedia


