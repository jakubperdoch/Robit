// Importing required modules
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const port = 8888;

// Use environment variables for sensitive data
const uri = process.env.MONGODB_URI;
const jwtSecret = process.env.JWT_SECRET || 'secret';

// MongoDB connection
mongoose
	.connect(uri)
	.then(() => {
		console.log('Connected to MongoDB');
		app.listen(port, () => {
			console.log(`Server running on port ${port}`);
		});
	})
	.catch((err) => {
		console.error('Error connecting to MongoDB:', err);
	});

// User schema and model
const userSchema = new mongoose.Schema({
	username: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

app.use(express.json());

// Middleware for verifying JWT token
const verifyToken = (req, res, next) => {
	const token = req.headers['authorization'];
	if (!token) {
		return res.status(401).json({ error: 'Unauthorized' });
	}

	jwt.verify(token, jwtSecret, (err, decoded) => {
		if (err) {
			return res.status(401).json({ error: 'Unauthorized' });
		}
		req.user = decoded;
		next();
	});
};

// Register endpoint
app.post('/api/register', async (req, res) => {
	try {
		const { username, email, password } = req.body;

		if (!email || !password) {
			return res.status(400).json({ error: 'Missing required fields' });
		}

		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(400).json({ error: 'Email already exists' });
		}

		const hashedPassword = await bcrypt.hash(password, 10);

		const newUser = new User({ username, email, password: hashedPassword });

		await newUser.save();
		res.status(201).json({ message: 'User registered successfully' });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal server error' });
	}
});

// Login endpoint
app.post('/api/login', async (req, res) => {
	try {
		const { email, password } = req.body;

		const user = await User.findOne({ email });
		if (!user) {
			return res.status(401).json({ error: 'Invalid credentials' });
		}

		const passwordMatch = await bcrypt.compare(password, user.password);
		if (!passwordMatch) {
			return res.status(401).json({ error: 'Invalid credentials' });
		}

		const token = jwt.sign({ email: user.email }, jwtSecret, { expiresIn: '1h' });
		res.status(200).json({ token });
	} catch (error) {
		res.status(500).json({ error: 'Internal server error' });
	}
});

// Get user info endpoint
app.get('/api/user', verifyToken, async (req, res) => {
	try {
		const user = await User.findOne({ email: req.user.email });
		if (!user) {
			return res.status(404).json({ error: 'User not found' });
		}
		res.status(200).json({ username: user.username, email: user.email });
	} catch (error) {
		res.status(500).json({ error: 'Internal server error' });
	}
});

// Home route
app.get('/', (req, res) => {
	res.send('Welcome to Robit Backend Server!');
});
