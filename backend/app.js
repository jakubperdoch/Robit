const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const uri = process.env.MONGODB_URI;

mongoose
 .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
 .then(() => {
  app.listen(port, () => {
   console.log(`Server running on port ${port}`);
  });
 })
 .catch((err) => {
  console.log(err);
 });

app.use(express.json());

const userSchema = new mongoose.Schema({
 username: String,
 email: String,
 password: String,
});

const User = mongoose.model('User', userSchema);

const verifyToken = (req, res, next) => {
 const token = req.headers['authorization'];
 if (!token) {
  return res.status(401).json({ error: 'Unauthorized' });
 }

 jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
  if (err) {
   return res.status(401).json({ error: 'Unauthorized' });
  }
  req.user = decoded;
  next();
 });
};

app.post('/api/register', async (req, res) => {
 try {
  const existingUser = await User.findOne({ email: req.body.email });
  if (existingUser) {
   return res.status(400).json({ error: 'Email already exists' });
  }

  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  const newUser = new User({
   username: req.body.username,
   email: req.body.email,
   password: hashedPassword,
  });

  await newUser.save();
  res.status(201).json({ message: 'User registered successfully' });
 } catch (error) {
  res.status(500).json({ error: 'Internal server error' });
 }
});

app.post('/api/login', async (req, res) => {
 try {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
   return res.status(401).json({ error: 'Invalid credentials' });
  }

  const passwordMatch = await bcrypt.compare(req.body.password, user.password);
  if (!passwordMatch) {
   return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET);
  res.status(200).json({ token });
 } catch (error) {
  res.status(500).json({ error: 'Internal server error' });
 }
});

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

app.get('/', (req, res) => {
 res.send('Hello World!');
});
