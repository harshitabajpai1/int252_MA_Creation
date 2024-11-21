const { Pool } = require('pg');

// const pool = new Pool({
//     user: process.env.DB_USER,         // Use environment variables
//     host: process.env.DB_HOST || 'localhost',
//     database: process.env.DB_NAME,  
//     password: String(process.env.DB_PASSWORD),
//     port: 5432,  // Default PostgreSQL port
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
