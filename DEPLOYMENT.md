# Deployment Guide

This guide covers deploying your portfolio to various platforms.

## Table of Contents
1. [Vercel (Recommended)](#vercel-recommended)
2. [Netlify](#netlify)
3. [GitHub Pages](#github-pages)
4. [Docker + Manual Server](#docker--manual-server)
5. [Environment Setup](#environment-setup)

---

## Vercel (Recommended)

Vercel is the official Next.js deployment platform with the best integration.

### Prerequisites
- GitHub account with your portfolio repository pushed
- Vercel account (free at https://vercel.com)

### Steps

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/portfolio.git
   git branch -M main
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to https://vercel.com/new
   - Click "Import Git Repository"
   - Select your portfolio repository
   - Vercel will auto-detect Next.js configuration

3. **Configure Project**:
   - Project name: `portfolio` or your preference
   - Framework: Next.js (auto-detected)
   - Root directory: `./` (default)
   - Build command: `npm run build` (auto-detected)
   - Output directory: `.next` (auto-detected)

4. **Deploy**:
   - Click "Deploy"
   - Wait 2-3 minutes for build completion
   - Your site will be live at `your-project.vercel.app`

5. **Custom Domain** (Optional):
   - Go to Project Settings → Domains
   - Add your custom domain (e.g., `satya.dev`)
   - Follow DNS configuration instructions
   - Free SSL certificate auto-provisioned

### Environment Variables
Create `.env.local` for sensitive data:
```env
# Example (not required for portfolio)
NEXT_PUBLIC_API_URL=https://api.example.com
```

---

## Netlify

### Prerequisites
- GitHub account
- Netlify account (free at https://netlify.com)

### Steps

1. **Connect Repository**:
   - Go to https://netlify.com
   - Click "New site from Git"
   - Select GitHub → Choose your repository

2. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `.next` or `.next/static`
   - Environment variables: (add if needed)

3. **Deploy**:
   - Click "Deploy site"
   - Build will start automatically
   - Site available at `your-site.netlify.app`

4. **Custom Domain**:
   - Site settings → Custom domain
   - Add your domain and configure DNS

### Netlify Functions (Optional)
For contact form handling:
```typescript
// netlify/functions/contact.ts
export async function handler(event: any) {
  // Handle form submission
}
```

---

## GitHub Pages

### Prerequisites
- GitHub account
- Repository named `yourusername.github.io`

### Steps

1. **Update next.config.js**:
   ```javascript
   const nextConfig = {
     output: 'export',
     basePath: '/',
     assetPrefix: '/',
   };
   export default nextConfig;
   ```

2. **Create GitHub Action** (`.github/workflows/deploy.yml`):
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches:
         - main

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         
         - name: Setup Node
           uses: actions/setup-node@v3
           with:
             node-version: '18'
         
         - name: Install dependencies
           run: npm install
         
         - name: Build
           run: npm run build
         
         - name: Deploy
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./out
   ```

3. **Enable GitHub Pages**:
   - Repository Settings → Pages
   - Source: GitHub Actions
   - Custom domain (optional)

---

## Docker + Manual Server

### Prerequisites
- Docker installed
- VPS or dedicated server
- Domain name (optional)

### Create Dockerfile

Create `Dockerfile` in project root:
```dockerfile
# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./

EXPOSE 3000
CMD ["npm", "start"]
```

### Create .dockerignore
```
node_modules
npm-debug.log
.git
.gitignore
README.md
.env
```

### Build and Deploy

```bash
# Build image
docker build -t portfolio:latest .

# Run container
docker run -d -p 80:3000 --name portfolio portfolio:latest

# View logs
docker logs portfolio

# Stop container
docker stop portfolio
```

### Using Docker Compose

Create `docker-compose.yml`:
```yaml
version: '3'
services:
  portfolio:
    build: .
    ports:
      - "80:3000"
    environment:
      - NODE_ENV=production
    restart: always
```

Run with: `docker-compose up -d`

### With Nginx Reverse Proxy

`nginx.conf`:
```nginx
upstream portfolio {
  server app:3000;
}

server {
  listen 80;
  server_name yourdomain.com;

  location / {
    proxy_pass http://portfolio;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_cache_bypass $http_upgrade;
  }
}
```

---

## Environment Setup

### Local Development
```bash
# Install Node 18+
node --version  # v18.0.0 or higher

# Install dependencies
npm install

# Run dev server
npm run dev

# Visit http://localhost:3000
```

### Production Build
```bash
# Build for production
npm run build

# Start production server
npm start

# Server runs on port 3000
```

### Environment Variables
Create `.env.local`:
```env
# API endpoints
NEXT_PUBLIC_API_URL=https://api.example.com

# Analytics
NEXT_PUBLIC_GA_ID=your-ga-id

# Other public vars (accessible in browser)
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### Performance Optimization

1. **Image Optimization**:
   ```bash
   # Compress images before deployment
   npm install -g imagemin-cli
   imagemin public/images/* --out-dir=public/images
   ```

2. **Build Optimization**:
   ```typescript
   // next.config.js
   module.exports = {
     compress: true,
     poweredByHeader: false,
     productionBrowserSourceMaps: false,
   };
   ```

3. **Monitor Performance**:
   - Use Vercel Analytics
   - Google PageSpeed Insights
   - Lighthouse (Chrome DevTools)

---

## Maintenance & Updates

### Update Dependencies
```bash
# Check for updates
npm outdated

# Update packages
npm update

# Update Next.js
npm install next@latest react@latest react-dom@latest

# Test after updates
npm run build
npm run dev
```

### Backup
```bash
# Create backup
git clone --mirror https://github.com/yourusername/portfolio.git portfolio.backup.git

# Or use git backup service
```

### Monitor Uptime
- Use Uptime Robot (free)
- Google Analytics for traffic
- Vercel Analytics for performance

---

## Troubleshooting

### Build Fails
```bash
# Clear build cache
rm -rf .next node_modules
npm install
npm run build
```

### Site Not Loading
- Check domain DNS settings
- Verify environment variables
- Review deployment logs
- Test locally: `npm run dev`

### Slow Performance
- Analyze with Lighthouse
- Compress images
- Use CDN for assets
- Enable caching headers

### 404 Errors
- Verify file paths are correct
- Check `.next` directory created
- Rebuild if assets missing
- Review web server config

---

## Cost Breakdown

| Platform | Cost | Features |
|----------|------|----------|
| **Vercel** | Free | Perfect for Next.js, auto-scaling |
| **Netlify** | Free | Good alternative, edge functions |
| **GitHub Pages** | Free | Static sites, limited |
| **VPS** | $2-20/mo | Full control, self-managed |
| **AWS S3 + CloudFront** | ~$1-5/mo | Static + CDN, complex setup |

---

## Security Checklist

- [ ] Remove sensitive data from code
- [ ] Use environment variables for secrets
- [ ] Enable HTTPS (all platforms provide free SSL)
- [ ] Configure CORS if needed
- [ ] Set security headers in `next.config.js`
- [ ] Regular dependency updates
- [ ] Monitor for vulnerabilities: `npm audit`

```javascript
// Security headers in next.config.js
headers: async () => {
  return [{
    source: '/:path*',
    headers: [
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'X-Frame-Options', value: 'DENY' },
      { key: 'X-XSS-Protection', value: '1; mode=block' },
    ],
  }];
},
```

---

## Support

For deployment issues:
- Vercel Docs: https://vercel.com/docs
- Next.js Deployment: https://nextjs.org/docs/deployment
- Docker: https://docs.docker.com/
- Your hosting provider's documentation

---

**Last Updated**: December 2025
