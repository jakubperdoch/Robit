// Importing required modules
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const uri =
 'mongodb+srv://perdochjakub:J8h0vfrsyhsc6QzV@robit.tzpuqox.mongodb.net/Users?retryWrites=true&w=majority';

mongoose
 .connect(uri)
 .then((result) => {
  app.listen(3000);
 })
 .catch((err) => {
  console.log(err);
 });

const userSchema = new mongoose.Schema({
 username: String,
 email: String,
 password: String,
});

const User = mongoose.model('User', userSchema);

app.use(express.json());

const verifyToken = (req, res, next) => {
 const token = req.headers['authorization'];
 if (!token) {
  return res.status(401).json({ error: 'Unauthorized' });
 }

 jwt.verify(token, 'secret', (err, decoded) => {
  if (err) {
   return res.status(401).json({ error: 'Unauthorized' });
  }
  req.user = decoded;
  next();
 });
};

app.post('/api/register', async (req, res) => {
 try {
  // Check if the email already exists
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

  const token = jwt.sign({ email: user.email }, 'secret');
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
