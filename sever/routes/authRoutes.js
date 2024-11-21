// const express = require('express');
// const { registerUser, loginUser } = require('../controllers/authController');

// const router = express.Router();

// router.post('/register', registerUser);
// router.post('/login', loginUser);

// module.exports = router;


// routes/authRoutes.js
const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController'); // Import controller functions

const router = express.Router();

// Define authentication routes
router.post('/register', registerUser); // Register route
router.post('/login', loginUser);       // Login route

module.exports = router;

