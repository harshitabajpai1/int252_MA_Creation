// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const authRoutes = require('./routes/authRoutes');

// const app = express();

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Routes
// app.use('/api/auth', authRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });



// // server.js
// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const authRoutes = require('./routes/authRoutes');  // Import routes from 'routes' folder

// // Load environment variables
// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json()); // Parse JSON requests

// // Routes
// app.use('/api/auth', authRoutes); // All authentication routes will be handled here

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });



const express = require('express');
const app = express();
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');  // Your routes

// Use middleware
app.use(cors());
app.use(express.json());

// Define routes
app.use('/api/auth', authRoutes);  // Register auth routes

// Add a default route to prevent "Cannot GET /" error
app.get('/', (req, res) => {
    res.send('Welcome to the server!');
});

// Start the server
app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
