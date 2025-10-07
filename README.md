# Portfolio Backend API

Backend API for portfolio like counter and other features.

## Tech Stack
- Node.js
- Express.js
- MongoDB (optional)

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run production server
npm start
```

## API Endpoints

- `GET /` - API information
- `GET /likes/getLikes` - Get current like count
- `POST /likes/updateLikes` - Increment like count
- `GET /health` - Health check

## Deployment to Render

1. Push code to GitHub
2. Go to [render.com](https://render.com)
3. Create new Web Service
4. Connect GitHub repository
5. Configure:
   - Build Command: `npm install`
   - Start Command: `npm start`
6. Add environment variables if needed
7. Deploy!

## Environment Variables

- `PORT` - Server port (default: 5000)
- `MONGODB_URI` - MongoDB connection string (optional)
- `NODE_ENV` - Environment (development/production)

