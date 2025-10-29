const path = require('path');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// In-memory storage (for demo - use MongoDB for production)
let likesCount = 0;

// API Routes

// Get likes count
app.get('/likes/getLikes', (req, res) => {
  res.json({ 
    status: 'success',
    data: likesCount 
  });
});

// Update likes count
app.post('/likes/updateLikes', (req, res) => {
  likesCount++;
  res.json({ 
    status: 'success',
    message: 'Like count updated',
    data: likesCount 
  });
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

// Serve frontend build in production
const buildPath = path.join(__dirname, 'build');
app.use(express.static(buildPath));

// SPA fallback (Express v5 compatible)
app.get('/*', (req, res) => {
  try {
    res.sendFile(path.join(buildPath, 'index.html'));
  } catch (e) {
    res.status(200).json({ message: 'Portfolio service', status: 'ok' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📍 http://localhost:${PORT}`);
});

