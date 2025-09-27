# Portfolio Website Deployment Guide - Vercel

This guide will help you deploy your full-stack portfolio website to Vercel.

## 🚀 Quick Start

### Prerequisites
- [Vercel Account](https://vercel.com/signup)
- [GitHub Account](https://github.com) (recommended for automatic deployments)
- PostgreSQL database (recommended: [Supabase](https://supabase.com) or [PlanetScale](https://planetscale.com))

## 📋 Step-by-Step Deployment

### 1. Database Setup (Production)

**Option A: Supabase (Recommended)**
1. Go to [Supabase](https://supabase.com) and create a new project
2. Get your database URL from Settings > Database
3. Format: `postgresql://postgres:[password]@[host]:5432/postgres`

**Option B: PlanetScale**
1. Go to [PlanetScale](https://planetscale.com) and create a new database
2. Get your connection string from the dashboard

### 2. Push to GitHub
```bash
# Initialize git repository (if not already done)
git init
git add .
git commit -m "Initial commit"

# Add your GitHub repository
git remote add origin https://github.com/yourusername/your-portfolio.git
git push -u origin main
```

### 3. Deploy to Vercel

#### Method 1: Vercel Dashboard (Recommended)
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your GitHub repository
4. Configure the project:
   - **Framework Preset**: Other
   - **Root Directory**: `integrated-portfolio`
   - **Build Command**: `npm run build`
   - **Output Directory**: `client/dist`
   - **Install Command**: `npm run install:all`

#### Method 2: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Navigate to project root
cd integrated-portfolio

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? (select your account)
# - Link to existing project? N
# - Project name: your-portfolio
# - Directory: ./
```

### 4. Configure Environment Variables

In your Vercel project dashboard, go to Settings > Environment Variables and add:

#### Production Environment Variables
```
# Database
DATABASE_URL=postgresql://username:password@hostname:port/database_name
DB_DIALECT=postgres

# Server
NODE_ENV=production
PORT=4000
CORS_ORIGIN=https://your-domain.vercel.app

# Email (Gmail SMTP)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password_here
EMAIL_FROM=your_email@gmail.com
EMAIL_TO=your_email@gmail.com

# JWT (Generate a secure secret)
JWT_SECRET=your-super-secure-jwt-secret-key-for-production

# GraphQL
GRAPHQL_INTROSPECTION=false
GRAPHQL_PLAYGROUND=false

# Client Variables
VITE_GRAPHQL_URI=https://your-domain.vercel.app/graphql
VITE_API_URL=https://your-domain.vercel.app
```

### 5. Update Domain References

After deployment, update the following:

1. **Client Environment**: Update `client/.env.production` with your actual Vercel domain
2. **CORS_ORIGIN**: Update in Vercel environment variables with your actual domain

### 6. Database Migration

After deployment, you may need to run database migrations:

```bash
# If using Vercel CLI
vercel env pull .env.local
npm run db:migrate
```

## 🔧 Configuration Files Explained

### `vercel.json`
- Configures how Vercel builds and routes your application
- Sets up both frontend (static) and backend (serverless) deployment
- Routes API calls to the server and static files to the client

### Environment Variables
- **Development**: Uses `.env` files in server and client directories
- **Production**: Set in Vercel dashboard under project settings

## 🚨 Important Notes

### Database Considerations
- **SQLite**: Not recommended for production (file-based, not persistent in serverless)
- **PostgreSQL**: Recommended for production (persistent, scalable)
- **Migration**: You'll need to migrate your data from SQLite to PostgreSQL

### Email Configuration
- Gmail App Password is already configured
- Make sure 2FA is enabled on your Gmail account
- App Password should be 16 characters without spaces

### Performance Optimization
- Static assets are served via Vercel's CDN
- GraphQL endpoint is serverless (cold starts possible)
- Database connection pooling is configured

## 🔍 Troubleshooting

### Common Issues

1. **Build Fails**
   ```bash
   # Check build locally
   npm run build
   ```

2. **Database Connection Issues**
   - Verify DATABASE_URL format
   - Check database credentials
   - Ensure database allows external connections

3. **CORS Errors**
   - Verify CORS_ORIGIN matches your domain
   - Check that both HTTP and HTTPS are configured if needed

4. **Environment Variables Not Loading**
   - Ensure variables are set in Vercel dashboard
   - Redeploy after adding new variables

### Logs and Debugging
- View function logs in Vercel dashboard
- Use `vercel logs` command for real-time logs
- Check browser network tab for API errors

## 📱 Post-Deployment Checklist

- [ ] Website loads correctly
- [ ] Navigation works on all pages
- [ ] Contact form sends emails
- [ ] Projects load from database
- [ ] All images and assets load
- [ ] Mobile responsiveness works
- [ ] Performance is acceptable (check with Lighthouse)

## 🔄 Continuous Deployment

Once connected to GitHub:
- Pushes to `main` branch automatically deploy to production
- Pull requests create preview deployments
- Environment variables persist across deployments

## 📞 Support

If you encounter issues:
1. Check Vercel documentation
2. Review function logs in Vercel dashboard
3. Test locally with production environment variables
4. Check database connectivity

---

**Your portfolio is now ready for the world! 🌟**