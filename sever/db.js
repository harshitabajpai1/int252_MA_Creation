// const mysql = require('mysql2');

// // Create a connection to the database
// const db = mysql.createConnection({
//     host: 'localhost',  // change to your database host
//     user: 'root',       // change to your database username
//     password: '',       // change to your database password
//     database: 'ma_creations'  // your database name
// });

// const { Pool } = require('pg');

// const pool = new Pool({
//     user: 'postgres',         // Your PostgreSQL username
//     host: 'localhost',        // Database server
//     database: 'ma_creations', // Database name
//     password: 'root', // Your PostgreSQL password
//     port: 5432,               // PostgreSQL port
// });

// db.connect((err) => {
//     if (err) {
//         console.error('Error connecting to the database: ' + err.stack);
//         return;
//     }
//     console.log('Connected to the database');
// });

// module.exports = db;


// const { Pool } = require('pg');

// // Create a new Pool instance with your database configuration
// const pool = new Pool({
//     user: 'postgres',         // Your PostgreSQL username
//     host: 'localhost',        // Database host
//     database: 'ma_creations', // Your database name
//     password: 'root', // Your PostgreSQL password
//     port: 5432,               // PostgreSQL default port
// });

// // Test the database connection
// pool.connect((err) => {
//     if (err) {
//         console.error('Database connection error:', err.stack);
//     } else {
//         console.log('Connected to the database!');
//     }
// });

// // Export the pool instance for reuse in other modules
// module.exports = pool;


// db.js
// require('dotenv').config(); // Ensure environment variables are loaded

const { Pool } = require('pg');

// const pool = new Pool({
//     user: process.env.DB_USER,         // Use environment variables
//     host: process.env.DB_HOST || 'localhost',
//     database: process.env.DB_NAME,  
//     password: process.env.DB_PASSWORD,
//     port: 5432,               
// });
const pool = new Pool({
    user: 'postgres',            // Explicitly setting it here to 'postgres'
    host: 'localhost',
    database: 'ma_creations',
    password: 'root',            // Explicitly setting the password here to 'root'
    port: 5432,
});

pool.connect()
    .then(() => {
        console.log('Connected to the database!');
    })
    .catch(err => {
        console.error('Error connecting to the database:', err.stack);
    });

module.exports = pool;
