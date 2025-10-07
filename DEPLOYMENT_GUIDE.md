# 🚀 Complete Deployment Guide

## Backend Deployment to Render

### Step 1: Push Backend to GitHub

```bash
# In portfolio-backend directory
git add .
git commit -m "Initial backend setup"

# Create a new GitHub repository (or use existing)
# Option 1: New repo
git remote add origin https://github.com/YOUR_USERNAME/portfolio-backend.git

# Option 2: Add to existing portfolio repo as a folder
# (Push this backend folder to your existing PORTFOLIO repo)
```

### Step 2: Deploy to Render

1. **Go to [render.com](https://render.com)** and sign up/login

2. **Click "New +"** → Select **"Web Service"**

3. **Connect GitHub Repository:**
   - Click "Connect Account" → Authorize GitHub
   - Select `portfolio-backend` repository
   - Click "Connect"

4. **Configure Web Service:**
   ```
   Name: portfolio-backend
   Environment: Node
   Region: Choose closest to your users
   Branch: main
   Root Directory: (leave empty or specify if in subfolder)
   
   Build Command: npm install
   Start Command: npm start
   
   Instance Type: Free
   ```

5. **Environment Variables:**
   - Click "Advanced" → "Add Environment Variable"
   - Add any required variables:
     ```
     PORT=10000 (auto-set by Render)
     NODE_ENV=production
     ```

6. **Click "Create Web Service"** 🎉

7. **Wait for deployment** (~2-5 minutes)

8. **Your API will be live at:**
   ```
   https://portfolio-backend-XXXX.onrender.com
   ```

### Step 3: Update Frontend API URLs

After backend is deployed, update your frontend code:

**File: `PORTFOLIO/src/components/LikeBtn.js`**

Replace:
```javascript
const uri = "https://porfolio-backend.vercel.app/likes/getLikes";
const postUri = "https://porfolio-backend.vercel.app/likes/updateLikes";
```

With your new Render URL:
```javascript
const uri = "https://your-backend.onrender.com/likes/getLikes";
const postUri = "https://your-backend.onrender.com/likes/updateLikes";
```

### Step 4: Redeploy Frontend

```bash
# In PORTFOLIO directory
cd ../PORTFOLIO
git add .
git commit -m "Update API endpoints"
git push

# Vercel will auto-deploy if connected via GitHub
# Or manually: vercel --prod
```

---

## Testing Your Deployment

### Test Backend API

```bash
# Health check
curl https://your-backend.onrender.com/health

# Get likes
curl https://your-backend.onrender.com/likes/getLikes

# Update likes (POST)
curl -X POST https://your-backend.onrender.com/likes/updateLikes
```

### Test Frontend

1. Visit your Vercel URL: `https://your-app.vercel.app`
2. Click the heart/like button
3. Check if counter updates
4. Refresh page - counter should persist

---

## Important Notes

### Render Free Tier Limitations:
- ⚠️ **Spins down after 15 minutes of inactivity**
- ⚠️ **First request after sleep takes 30-60 seconds**
- ✅ **750 hours/month free** (enough for 1 service)
- ✅ **Automatic HTTPS**

### Solutions for Spin-down:
1. **Use a service like [Uptime Robot](https://uptimerobot.com)** to ping your backend every 14 minutes
2. **Upgrade to paid plan** ($7/month)
3. **Add loading state** in frontend while backend wakes up

### Add Persistent Storage (Optional):
Use MongoDB Atlas (free tier) for data persistence:

1. Sign up at [mongodb.com/atlas](https://www.mongodb.com/atlas)
2. Create free cluster
3. Get connection string
4. Add to Render environment variables: `MONGODB_URI`
5. Update `server.js` to use MongoDB instead of in-memory storage

---

## Troubleshooting

### Backend not responding?
- Check Render logs: Dashboard → Your Service → Logs
- Verify build succeeded
- Check environment variables

### CORS errors?
- Update `server.js` cors configuration:
  ```javascript
  app.use(cors({
    origin: ['https://your-vercel-app.vercel.app'],
    credentials: true
  }));
  ```

### Frontend can't reach backend?
- Verify API URLs in `LikeBtn.js`
- Check browser console for errors
- Test backend URL directly in browser

---

## Custom Domains (Optional)

### Vercel (Frontend):
1. Dashboard → Your Project → Settings → Domains
2. Add your custom domain
3. Update DNS records as shown

### Render (Backend):
1. Dashboard → Your Service → Settings → Custom Domain
2. Add domain (e.g., `api.yourdomain.com`)
3. Update DNS CNAME record

---

## Monitoring & Analytics

### Vercel Analytics:
- Enable in Project Settings → Analytics
- Free tier: 100k events/month

### Render Monitoring:
- Dashboard shows: Requests, Response times, Memory usage
- Set up alerts for downtime

---

## Cost Breakdown

| Service | Free Tier | Paid (if needed) |
|---------|-----------|------------------|
| **Vercel** | Unlimited personal projects | $20/month |
| **Render** | 750 hours/month, 1 service | $7/month |
| **Total** | **$0/month** ✅ | ~$27/month |

---

## Quick Reference

### Vercel URLs:
- Dashboard: https://vercel.com/dashboard
- Docs: https://vercel.com/docs

### Render URLs:
- Dashboard: https://dashboard.render.com
- Docs: https://render.com/docs

### Your Deployments:
- Frontend: https://your-project.vercel.app
- Backend: https://your-backend.onrender.com
- GitHub: https://github.com/Rehan9508/PORTFOLIO

---

## Next Steps

1. ✅ Deploy frontend to Vercel
2. ✅ Deploy backend to Render  
3. ✅ Update API endpoints in frontend
4. ✅ Test everything works
5. 📈 Add MongoDB for persistence (optional)
6. 🔔 Set up Uptime Robot (optional)
7. 🌐 Add custom domain (optional)
8. 📊 Enable analytics (optional)

**Happy Deploying! 🚀**

