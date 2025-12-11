# Public Assets Setup Guide

This directory should contain all your media files and documents. Replace the placeholders with your actual files.

## Required Files

### 1. **portrait.jpg** (or .png)
- Profile picture (circular recommended)
- Dimensions: 400x400px minimum, square aspect ratio
- Format: JPG or PNG
- Location: `/public/portrait.jpg`
- Used in: Hero section, sidebar on large screens

### 2. **logo.svg**
- Personal logo or initials
- Recommended: Simple, scalable SVG
- Dimensions: 24x24px to 64x64px
- Location: `/public/logo.svg`
- Used in: Navigation bar

### 3. **resume.pdf**
- Your full resume/CV
- Format: PDF
- Location: `/public/resume.pdf`
- Used in: Resume download CTAs throughout the site

### 4. **Project Images** (project1.jpg, project2.jpg, project3.jpg)
- Project showcase thumbnails
- Dimensions: 600x400px recommended (3:2 aspect ratio)
- Format: JPG or PNG
- Location: `/public/project[1-3].jpg`
- Used in: Projects grid section

**Example Projects**:
1. **project1.jpg** - Women Safety App
2. **project2.jpg** - Physics-Informed Neural Networks
3. **project3.jpg** - Face Recognition Assistant

### 5. **research-slide-deck.pdf**
- Research presentation slides
- Format: PDF
- Location: `/public/research-slide-deck.pdf`
- Used in: Research section CTA

## File Size Recommendations

- Images: 100-300 KB (compressed)
- PDFs: 500 KB - 5 MB
- Total `/public` folder: < 10 MB

## Image Optimization Tips

### Using free tools:
- **TinyPNG**: https://tinypng.com/ - Compress PNG/JPG
- **Squoosh**: https://squoosh.app/ - Google's image optimizer
- **ImageMagick**: Command-line tool for batch processing

### Using Bash (Linux/Mac):
```bash
# Resize image
convert input.jpg -resize 400x400 output.jpg

# Compress image
convert input.jpg -quality 85 output.jpg

# Both operations
convert input.jpg -resize 400x400 -quality 85 output.jpg
```

### Using FFmpeg for videos (optional):
```bash
# Convert video to MP4
ffmpeg -i input.mov -c:v libx264 output.mp4

# Create GIF from video
ffmpeg -i input.mp4 -vf scale=600:-1 -r 10 output.gif
```

## Directory Structure
```
public/
├── portrait.jpg                  # Profile picture
├── logo.svg                      # Personal logo
├── resume.pdf                    # Your resume
├── project1.jpg                  # Women Safety App
├── project2.jpg                  # Physics-Informed Neural Networks
├── project3.jpg                  # Face Recognition Assistant
├── research-slide-deck.pdf       # Research presentation
├── favicon.ico                   # Browser tab icon (optional)
├── apple-touch-icon.png          # iOS home screen icon (optional)
└── opengraph.jpg                 # Social media preview (optional)
```

## Update Links in Code

### 1. **Social Media Links**
Edit files:
- `/src/components/navigation.tsx`
- `/src/components/footer.tsx`
- `/src/components/sections/contact.tsx`

Update URLs:
```typescript
href="https://github.com/yourusername"
href="https://linkedin.com/in/yourprofile"
href="https://twitter.com/yourhandle"
href="mailto:your.email@example.com"
```

### 2. **Project Links**
Edit `/src/components/sections/projects.tsx`:
```typescript
const projects: Project[] = [
  {
    liveUrl: "https://your-project-demo.com",
    githubUrl: "https://github.com/yourusername/project",
    // ...
  }
];
```

### 3. **Research/Paper Links**
Edit `/src/components/sections/research.tsx`:
```typescript
<a href="https://your-paper-link.com">Read Paper</a>
```

## Placeholder Naming Conventions

### When files are missing:
The portfolio displays placeholder text in brackets:
- `[portrait.jpg]` - Profile image area
- `[project1.jpg]` - Project image area
- `[resume.pdf]` - Resume link

All images have error handling to gracefully display placeholders.

## Creating Professional Images

### Portrait Tips:
- ✅ Good lighting, neutral background
- ✅ Square crop (400x400px)
- ✅ Professional headshot style
- ✅ Friendly, approachable expression
- ✅ High resolution (minimize compression)

### Project Screenshot Tips:
- ✅ Clean UI without sensitive data
- ✅ 3:2 aspect ratio (600x400px)
- ✅ Consistent lighting and colors
- ✅ Add app/website name if needed
- ✅ Show key features prominently

### Logo/Brand Tips:
- ✅ Simple, scalable design
- ✅ Works in light and dark modes
- ✅ Initials or monogram work well
- ✅ SVG format recommended
- ✅ 24-64px working size

## Quick Start

1. **Gather your files**:
   - Portrait photo
   - Project screenshots
   - Resume/CV
   - Research presentation

2. **Optimize images**:
   ```bash
   # Using ImageMagick
   convert portrait.jpg -resize 400x400 -quality 85 public/portrait.jpg
   convert project1.png -resize 600x400 -quality 85 public/project1.jpg
   ```

3. **Copy files to public/**:
   ```bash
   cp your-files/* public/
   ```

4. **Update links in code** (see section above)

5. **Test locally**:
   ```bash
   npm run dev
   ```

## Troubleshooting

### Image not displaying?
- Check file path matches exactly: `/public/filename.ext`
- Ensure file exists and is readable
- Check browser console for errors
- Verify image format (JPG, PNG, SVG)

### Large file size?
- Compress images before uploading
- Use appropriate image format (JPG for photos, PNG for graphics)
- Consider WebP format for modern browsers

### Resume PDF not downloadable?
- Ensure `resume.pdf` exists in `/public/`
- Test download link in browser
- Check file permissions

---

**Note**: All placeholder files shown in portfolio UI will automatically disappear once actual files are added to `/public/`
