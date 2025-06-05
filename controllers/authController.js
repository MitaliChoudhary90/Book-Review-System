// auth.controller.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
  const { username, password } = req.body;
  const userExists = await User.findOne({ username });
  if (userExists) return res.status(400).json({ message: "User already exists" });

  const user = await User.create({ username, password });
  res.status(201).json({ message: "User registered" });
};

const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user || !(await user.matchPassword(password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
  res.json({ token });
};

module.exports = { signup, login };
