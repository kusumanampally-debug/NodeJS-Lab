const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'your_secret_key';

const mockUser = {
  username: 'admin',
  password: 'admin123'
};

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (
    username === mockUser.username &&
    password === mockUser.password
  ) {
    const token = jwt.sign(
      { username },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    return res.json({ token });
  }

  return res.status(401).json({
    error: 'Invalid credentials'
  });
});

module.exports = router;