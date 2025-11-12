# 🎨 Portfolio Customization Guide

A comprehensive guide to customizing your portfolio website.

## Quick Start Customization Checklist

- [ ] Update your name and title in Hero section
- [ ] Add your projects in Projects section
- [ ] Update your skills in About section
- [ ] Add your contact information
- [ ] Change profile details in all sections
- [ ] Update social media links
- [ ] Deploy to your hosting platform

---

## 1. Hero Section Customization

**File:** `src/components/Hero.jsx`

### Change Your Name and Title

```jsx
<h1 ref={titleRef} className="hero-title">
  Hey, I'm <span className="gradient-text">Your Name</span>
</h1>
<p ref={subtitleRef} className="hero-subtitle">
  Full Stack Developer | Creative Technologist | Innovation Enthusiast
</p>
```

### Update Call-to-Action Buttons

Change button text and add links:
```jsx
<button className="btn" onClick={() => window.location.href = '#projects'}>
  Explore My Work
</button>
<button className="btn btn-secondary" onClick={() => window.location.href = '#contact'}>
  Get In Touch
</button>
```

---

## 2. Projects Section Customization

**File:** `src/components/Projects.jsx`

### Add Your Projects

Modify the `projects` array:

```jsx
const projects = [
  {
    id: 1,
    title: 'Your Awesome Project',
    description: 'Detailed description of what your project does and technologies used.',
    tags: ['React', 'Three.js', 'Node.js'],
    featured: true,  // Set to true to highlight
  },
  {
    id: 2,
    title: 'Another Great Project',
    description: 'Another project description.',
    tags: ['Python', 'Machine Learning', 'Flask'],
    featured: false,
  },
  // Add more projects...
];
```

### Customize Project Card Links

Update the project link to point to your actual project:
```jsx
<a href="https://your-project-url.com" className="project-link">
  View Project →
</a>
```

---

## 3. About Section Customization

**File:** `src/components/About.jsx`

### Update Your Bio

Replace the bio paragraphs with your own:
```jsx
<p>
  I'm a passionate full-stack developer with expertise in...
</p>
```

### Customize Skills

Edit the `skills` array:
```jsx
const skills = [
  {
    category: 'Frontend',
    items: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'GSAP'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Docker'],
  },
  {
    category: 'Tools & Other',
    items: ['Git', 'Figma', 'AWS', 'CI/CD', 'Webpack'],
  },
];
```

---

## 4. Contact Section Customization

**File:** `src/components/Contact.jsx`

### Update Contact Methods

Modify the `contactMethods` array:

```jsx
const contactMethods = [
  {
    icon: '✉️',
    label: 'Email',
    value: 'your-email@example.com',
    link: 'mailto:your-email@example.com',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: '@your-linkedin-profile',
    link: 'https://linkedin.com/in/your-profile',
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: '@your-github-username',
    link: 'https://github.com/your-username',
  },
  {
    icon: '𝕏',
    label: 'Twitter',
    value: '@your-twitter-handle',
    link: 'https://twitter.com/your-handle',
  },
];
```

### Update Social Links Footer

```jsx
<div className="social-links">
  <a href="https://github.com/your-username" className="social-link">
    GitHub
  </a>
  <a href="https://linkedin.com/in/your-profile" className="social-link">
    LinkedIn
  </a>
  <a href="https://twitter.com/your-handle" className="social-link">
    Twitter
  </a>
  <a href="mailto:your-email@example.com" className="social-link">
    Email
  </a>
</div>
```

---

## 5. Color Scheme Customization

**File:** `src/index.css`

### Change Colors

Edit the CSS variables in `:root`:

```css
:root {
  /* Dark Mode Colors */
  --primary-bg: #0d0d0d;           /* Main background */
  --secondary-bg: #1a1a1a;         /* Card backgrounds */
  --primary-text: #ebebeb;         /* Main text */
  --secondary-text: #a0a0a0;       /* Secondary text */
  --electric-accent: #00c9ff;      /* Primary accent (cyan) */
  --secondary-accent: #8a2be2;     /* Secondary accent (purple) */
}
```

### Example: Change to Blue Theme

```css
:root {
  --primary-bg: #0a0a1a;
  --secondary-bg: #141429;
  --primary-text: #f0f0ff;
  --secondary-text: #a0a0c0;
  --electric-accent: #00a8ff;      /* Brighter blue */
  --secondary-accent: #0088ff;     /* Darker blue */
}
```

---

## 6. 3D Background Customization

**File:** `src/components/ThreeDBackground.jsx`

### Change 3D Shapes

```jsx
// Available geometries:
// - IcosahedronGeometry(size, detail)
// - TetrahedronGeometry(size)
// - OctahedronGeometry(size)
// - BoxGeometry(width, height, depth)
// - SphereGeometry(radius, widthSegments, heightSegments)

const geometries = [
  new THREE.BoxGeometry(2, 2, 2),           // Cubes
  new THREE.SphereGeometry(2, 32, 32),      // Spheres
  new THREE.OctahedronGeometry(2),          // Octahedrons
];
```

### Adjust Colors and Lighting

```jsx
// Change shape colors
const materials = [
  new THREE.MeshPhongMaterial({
    color: 0xff00ff,                // Magenta instead of cyan
    emissive: 0xff00ff,
    emissiveIntensity: 0.3,
  }),
];

// Add more lights
const pointLight3 = new THREE.PointLight(0x00ff00, 1, 100);
pointLight3.position.set(0, 0, 20);
scene.add(pointLight3);
```

### Disable 3D Background on Mobile

```jsx
useEffect(() => {
  const isMobile = window.innerWidth < 768;
  if (isMobile) return; // Don't render on mobile

  // ... rest of the code
}, []);
```

---

## 7. Animation Customization

### Adjust Scroll Speed

**File:** `src/hooks/useLenisScroll.js`

```jsx
const lenis = new Lenis({
  duration: 1.2,    // Increase for slower scrolling (try 2.0)
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  // Other easing options:
  // easing: (t) => t,                    // Linear
  // easing: (t) => t * t,                // Quadratic
  // easing: (t) => t < 0.5 ? 2*t*t : -1+4*t-2*t*t,  // Cubic
});
```

### Change Animation Timing

**File:** `src/components/Hero.jsx`

```jsx
gsap.from(titleRef.current, {
  opacity: 0,
  y: 50,
  duration: 1,        // Increase/decrease for slower/faster
  ease: 'power3.out', // Try: 'power1.out', 'back.out', 'elastic.out'
});
```

---

## 8. Typography Customization

### Change Fonts

**File:** `src/index.css`

```css
body {
  font-family: 'Your Font', -apple-system, BlinkMacSystemFont, sans-serif;
}

/* Import from Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=JetBrains+Mono:wght@400&display=swap');

body {
  font-family: 'Inter', sans-serif;
}

code {
  font-family: 'JetBrains Mono', monospace;
}
```

### Adjust Font Sizes

```css
h1 {
  font-size: clamp(2.5rem, 8vw, 5rem);  /* Adjust min/max sizes */
}

h2 {
  font-size: clamp(1.5rem, 5vw, 3.5rem);
}

p {
  font-size: 1.1rem;  /* Increase for larger text */
}
```

---

## 9. Button Customization

### Change Button Colors

**File:** `src/index.css`

```css
.btn {
  border-color: var(--electric-accent);
  color: var(--electric-accent);
}

.btn::before {
  background-color: var(--electric-accent);
}

.btn:hover {
  box-shadow: 0 0 20px rgba(0, 201, 255, 0.5);
}
```

### Add More Button Variants

```css
.btn-tertiary {
  border-color: var(--secondary-text);
  color: var(--secondary-text);
}

.btn-tertiary::before {
  background-color: var(--secondary-text);
}

.btn-tertiary:hover {
  box-shadow: 0 0 20px rgba(160, 160, 160, 0.5);
}
```

---

## 10. Responsive Design Tweaks

### Adjust Breakpoints

**File:** Individual component CSS files

```css
@media (max-width: 1024px) {
  /* Tablets */
  section {
    padding: var(--spacing-lg) var(--spacing-md);
  }
}

@media (max-width: 768px) {
  /* Small devices */
  h1 {
    font-size: 1.75rem;
  }
}

@media (max-width: 480px) {
  /* Very small devices */
  section {
    padding: var(--spacing-md) var(--spacing-sm);
  }
}
```

---

## 11. SEO Optimization

### Update Meta Tags

**File:** `index.html`

```html
<meta name="description" content="I'm a Full Stack Developer specializing in React, Three.js, and modern web technologies." />
<meta name="keywords" content="developer, react, web development, portfolio" />
<meta name="author" content="Your Name" />
<meta property="og:title" content="Your Name | Full Stack Developer" />
<meta property="og:description" content="Check out my latest projects and skills." />
<meta property="og:image" content="https://your-site.com/preview-image.png" />
```

### Add Favicon

Place your favicon in the `public` folder and update index.html:
```html
<link rel="icon" type="image/svg+xml" href="/your-favicon.svg" />
```

---

## 12. Performance Optimization Tips

1. **Lazy Load Images**: Use React's `lazy` and `Suspense`
2. **Optimize 3D**: Reduce geometry complexity for slower devices
3. **Code Splitting**: Split components for faster initial load
4. **Minimize Bundle**: Remove unused dependencies

```bash
npm run build  # Check bundle size
npm install -D rollup-plugin-visualizer  # Visualize bundle
```

---

## 13. Adding New Sections

### Create a New Section Component

```jsx
// src/components/Experience.jsx
import { useEffect, useRef } from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section className="experience">
      <div className="container">
        <h2>Experience</h2>
        {/* Your content here */}
      </div>
    </section>
  );
};

export default Experience;
```

### Add to App.jsx

```jsx
import Experience from './components/Experience';

function App() {
  // ...
  return (
    <div className="scroll-container">
      <ThreeDBackground />
      <Hero />
      <Projects />
      <Experience />  {/* Add here */}
      <About />
      <Contact />
    </div>
  );
}
```

---

## Resources

- **Colors**: Use [Coolors.co](https://coolors.co) for color schemes
- **Fonts**: [Google Fonts](https://fonts.google.com)
- **Icons**: [Emoji Picker](https://emojipicker.com) or [Phosphor Icons](https://phosphoricons.com)
- **Images**: [Unsplash](https://unsplash.com), [Pexels](https://pexels.com)
- **Animations**: [GSAP Docs](https://gsap.com/docs), [Three.js Docs](https://threejs.org/docs)

---

## Troubleshooting

### 3D Background Not Showing
- Check browser console for WebGL errors
- Ensure Three.js is properly installed
- Try a different browser (Chrome, Firefox, Safari)

### Animations Not Working
- Verify GSAP and Lenis are installed
- Check browser console for JavaScript errors
- Clear browser cache and rebuild

### Layout Issues on Mobile
- Check media queries are working
- Test with Chrome DevTools device emulation
- Ensure viewport meta tag is in index.html

---

**Happy customizing! 🎨**
