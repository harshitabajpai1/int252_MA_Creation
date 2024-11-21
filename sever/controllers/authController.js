// controllers/authController.js
const bcrypt = require('bcryptjs');
const { createUser, getUserByEmail } = require('../models/userModel');

// Handle user registration
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    if (!password) {
        return res.status(400).json({ message: 'Password is required' });
    }

    try {
        const existingUser = await getUserByEmail(email);
        if (existingUser.length > 0) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user in the database
        await createUser(name, email, hashedPassword);

        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err });
    }
};

// Handle user login
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await getUserByEmail(email);
        if (user.length === 0) {
            return res.status(400).json({ message: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user[0].password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        res.status(200).json({ message: 'Login successful' });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err });
    }
};

module.exports = { registerUser, loginUser };
