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

// Routes
app.get('/', (req, res) => {
  res.json({ 
    message: 'Portfolio Backend API',
    status: 'Running',
    endpoints: {
      getLikes: 'GET /likes/getLikes',
      updateLikes: 'POST /likes/updateLikes'
    }
  });
});

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

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📍 http://localhost:${PORT}`);
});

