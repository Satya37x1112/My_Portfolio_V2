# Quick Start Guide

Get your portfolio running in 5 minutes!

## 🚀 Installation & Setup

### Step 1: Install Dependencies
```bash
# Using npm
npm install

# Or using Bun (faster)
bun install

# Or using yarn
yarn install
```

### Step 2: Start Development Server
```bash
# Using npm
npm run dev

# Or using Bun
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📝 Customize Your Portfolio

### 1. Update Personal Information

**Edit these files with YOUR information:**

#### `/src/components/sections/hero.tsx`
```typescript
// Change headline
<h1>Hi, I'm [YOUR NAME] — [YOUR TITLE]</h1>

// Update subheadline
<p>B.Tech CSE | [YOUR SPECIALIZATION]</p>

// Modify description
<p>I build [YOUR FOCUS]...</p>
```

#### `/src/components/sections/about.tsx`
```typescript
// Update bio paragraphs
<p>I'm a B.Tech Computer Science student...</p>

// Change email
href="mailto:YOUR.EMAIL@example.com"

// Update location
<p className="text-slate-400">Your Location</p>
```

#### `/src/components/sections/projects.tsx`
```typescript
// Update projects array
const projects: Project[] = [
  {
    title: "Your Project Name",
    description: "Project description",
    image: "/your-image.jpg",
    tags: ["Tech1", "Tech2"],
    githubUrl: "https://github.com/yourusername/project",
  },
  // ... more projects
];
```

#### `/src/components/sections/skills.tsx`
```typescript
// Update skill categories and proficiency levels
const skillCategories: SkillCategory[] = [
  {
    name: "Your Skill Category",
    skills: [
      { name: "Skill 1", level: 90 },
      { name: "Skill 2", level: 85 },
    ],
  },
];
```

#### `/src/components/sections/experience.tsx`
```typescript
// Update timeline events
const timeline: TimelineEvent[] = [
  {
    year: "2024 - Present",
    title: "Your Title",
    subtitle: "Organization",
    description: "What you're doing",
    type: "internship",
  },
];
```

#### `/src/components/sections/contact.tsx`
```typescript
// Update social links
href="https://github.com/YOUR_USERNAME"
href="https://linkedin.com/in/YOUR_PROFILE"
href="mailto:YOUR.EMAIL@example.com"
```

### 2. Add Your Assets

Place these files in the `/public/` folder:

| File | Size | Format | Purpose |
|------|------|--------|---------|
| `portrait.jpg` | 400x400px | JPG/PNG | Profile picture (circular) |
| `logo.svg` | 24-64px | SVG | Your logo/initials |
| `resume.pdf` | Any | PDF | Your resume |
| `project1.jpg` | 600x400px | JPG/PNG | First project |
| `project2.jpg` | 600x400px | JPG/PNG | Second project |
| `project3.jpg` | 600x400px | JPG/PNG | Third project |
| `research-slide-deck.pdf` | Any | PDF | Research presentation |

**Quick image optimization**:
```bash
# Using ImageMagick (install if needed: brew install imagemagick)
convert portrait.jpg -resize 400x400 -quality 85 portrait.jpg
convert project1.png -resize 600x400 -quality 85 project1.jpg
```

### 3. Update Navigation Links

Edit `/src/components/navigation.tsx`:
```typescript
const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Research", href: "#research" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];
```

Add or remove sections as needed.

### 4. Update Footer

Edit `/src/components/footer.tsx`:
```typescript
// Update social links
<a href="https://github.com/YOUR_USERNAME">GitHub</a>
<a href="https://linkedin.com/in/YOUR_PROFILE">LinkedIn</a>

// Update copyright year
© {currentYear} Your Name
```

### 5. Update Metadata

Edit `/src/app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "Your Name | Your Title",
  description: "Your description here...",
  keywords: ["your", "keywords"],
};
```

---

## 🎨 Customize Styling

### Change Colors

Edit `/tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      indigo: {
        950: "#YOUR_COLOR",
      },
      cyan: {
        400: "#YOUR_COLOR",
      },
      amber: {
        400: "#YOUR_COLOR",
      },
    },
  },
}
```

### Adjust Typography

```javascript
fontFamily: {
  sans: ["Your Font", "sans-serif"],
  mono: ["Your Mono Font", "monospace"],
}
```

### Modify Animations

Edit `/src/app/globals.css`:
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

---

## 🔍 Testing

### Local Testing
```bash
# Start dev server
npm run dev

# Visit http://localhost:3000
# Test all sections and links
# Check mobile responsiveness
```

### Build Testing
```bash
# Build for production
npm run build

# Start production server
npm start

# Verify site works correctly
```

### Mobile Testing
- Use Chrome DevTools (F12) → Device toolbar
- Test on actual mobile device
- Check touch interactions
- Verify forms work

### Performance Testing
- Run Lighthouse (Chrome DevTools)
- Check Core Web Vitals
- Use PageSpeed Insights: https://pagespeed.web.dev/

---

## 📱 Add Contact Form Handler

Currently, the contact form logs to console. To make it functional:

### Option 1: Email Service (EmailJS)

1. Sign up: https://www.emailjs.com/
2. Get your Service ID and Template ID
3. Update `/src/components/sections/contact.tsx`:

```typescript
import emailjs from '@emailjs/browser';

emailjs.init('YOUR_PUBLIC_KEY');

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formData
    );
    alert('Message sent successfully!');
  } catch (error) {
    alert('Failed to send message');
  }
};
```

### Option 2: Formspree

1. Sign up: https://formspree.io/
2. Create a form
3. Update form action:

```typescript
<form onSubmit={handleSubmit} method="POST" action="https://formspree.io/f/YOUR_ID">
```

### Option 3: Backend API

Create a backend endpoint and update the form handler.

---

## 🚀 Deploy

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts and your site goes live!
```

Or connect your GitHub repo to Vercel for automatic deployments.

### Other Options
- **Netlify**: Connect GitHub repo at https://netlify.com
- **GitHub Pages**: See [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Docker**: See [DEPLOYMENT.md](./DEPLOYMENT.md)

---

## ✅ Pre-Launch Checklist

Before going live, verify:

- [ ] All personal information is correct and up-to-date
- [ ] All images/assets are in `/public/` folder
- [ ] Links to GitHub, LinkedIn, Twitter are correct
- [ ] Email address is accurate
- [ ] Resume PDF is properly formatted
- [ ] All projects have accurate descriptions and links
- [ ] Skills list is comprehensive
- [ ] Experience timeline is complete
- [ ] Contact form works (test it!)
- [ ] Mobile responsive (test on phone)
- [ ] Dark mode toggle works
- [ ] All sections scroll smoothly
- [ ] No broken links
- [ ] Site loads fast (< 3s on decent connection)
- [ ] SEO metadata is set
- [ ] Open Graph image is set (for social sharing)

---

## 🎯 Next Steps

1. **Customize** - Update all sections with your info
2. **Add Assets** - Add your images and resume
3. **Test** - Run locally and test thoroughly
4. **Deploy** - Push to GitHub and deploy to Vercel/Netlify
5. **Share** - Share your portfolio with recruiters!

---

## 📚 Learn More

- Next.js Docs: https://nextjs.org/docs
- TailwindCSS Docs: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/
- shadcn/ui: https://ui.shadcn.com/

---

## 💡 Tips & Tricks

### Run Multiple Sections Simultaneously
```bash
# In one terminal
npm run dev

# In another terminal
npm run build
```

### Faster Development with Hot Reload
Changes in `/src` are automatically reflected. No need to refresh!

### Debug in Browser
```typescript
// Add console logs
console.log('Debug info:', variable);

// Use browser DevTools (F12)
// Check Console tab for logs
```

### Test Performance Locally
```bash
# Run production build locally
npm run build
npm start

# Check performance at http://localhost:3000
```

---

## 🆘 Common Issues

### "Module not found" errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
```

### Images not displaying
- Check file is in `/public/` folder
- Verify exact filename matches code
- Check file permissions
- Try different image format (JPG vs PNG)

### Site not loading locally
- Kill existing process: `pkill -f "next dev"`
- Try different port: `npm run dev -- -p 3001`
- Check port 3000 is available

### Build fails
```bash
# Clean rebuild
rm -rf .next
npm run build

# Check for TypeScript errors
npx tsc --noEmit
```

---

## 🎉 You're Ready!

Your portfolio is now customized and ready to showcase your skills. Good luck with your applications! 🚀

Questions? Check the full documentation:
- [README.md](./README.md) - Project overview
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment guide
- [public/ASSETS_SETUP.md](./public/ASSETS_SETUP.md) - Asset setup instructions

---

**Happy coding!** ✨
