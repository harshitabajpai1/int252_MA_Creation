
// models/userModel.js
const { Pool } = require('pg');

// Create a new Pool instance with your database configuration
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

// Function to insert a new user into the database
const createUser = (name, email, password) => {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3)';
        pool.query(query, [name, email, password], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

// Function to get a user by email
const getUserByEmail = (email) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM users WHERE email = $1';
        pool.query(query, [email], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results.rows); // Ensure to access the `rows` property
            }
        });
    });
};

module.exports = { createUser, getUserByEmail };
