# ⚡ Quick Customization Snippets

Copy and paste these snippets to quickly customize your portfolio.

## Change Your Name

**File:** `src/components/Hero.jsx`

```jsx
<h1 ref={titleRef} className="hero-title">
  Hey, I'm <span className="gradient-text">JOHN DEVELOPER</span>
</h1>
```

---

## Change Your Title/Subtitle

**File:** `src/components/Hero.jsx`

```jsx
<p ref={subtitleRef} className="hero-subtitle">
  Frontend Developer | UI/UX Enthusiast | Open Source Contributor
</p>
```

---

## Quick Color Theme Changes

**File:** `src/index.css` - Replace the `:root` section

### Neon Purple & Pink Theme
```css
:root {
  --primary-bg: #0a0a14;
  --secondary-bg: #1a1a2e;
  --primary-text: #f5f5ff;
  --secondary-text: #b0b0d0;
  --electric-accent: #ff006e;
  --secondary-accent: #a100f2;
}
```

### Deep Ocean Theme
```css
:root {
  --primary-bg: #0a1428;
  --secondary-bg: #162a4a;
  --primary-text: #e8f1ff;
  --secondary-text: #7a9cc6;
  --electric-accent: #00d9ff;
  --secondary-accent: #0099ff;
}
```

### Sunset Orange & Pink
```css
:root {
  --primary-bg: #1a0f0a;
  --secondary-bg: #2d1810;
  --primary-text: #fff5f0;
  --secondary-text: #d4a89a;
  --electric-accent: #ff6b35;
  --secondary-accent: #f7931e;
}
```

### Minty Fresh
```css
:root {
  --primary-bg: #0d1b1a;
  --secondary-bg: #1a2d2a;
  --primary-text: #e8f5f4;
  --secondary-text: #a0c5c1;
  --electric-accent: #06d6a0;
  --secondary-accent: #118b6b;
}
```

---

## Add a New Project

**File:** `src/components/Projects.jsx`

Find the `projects` array and add:

```jsx
{
  id: 7,
  title: 'E-Commerce Platform',
  description: 'Full-stack e-commerce solution with payment integration and real-time inventory management.',
  tags: ['React', 'Node.js', 'Stripe', 'MongoDB'],
  featured: true,
},
```

---

## Update All Contact Links

**File:** `src/components/Contact.jsx`

Replace the entire `contactMethods` array:

```jsx
const contactMethods = [
  {
    icon: '✉️',
    label: 'Email',
    value: 'john@example.com',
    link: 'mailto:john@example.com',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: '@johndev',
    link: 'https://linkedin.com/in/johndev',
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: '@johndev',
    link: 'https://github.com/johndev',
  },
  {
    icon: '𝕏',
    label: 'Twitter',
    value: '@johndev',
    link: 'https://twitter.com/johndev',
  },
];
```

---

## Update Skills List

**File:** `src/components/About.jsx`

Replace the entire `skills` array:

```jsx
const skills = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'PostgreSQL', 'Firebase', 'REST APIs'],
  },
  {
    category: 'Tools & Other',
    items: ['Git', 'Docker', 'AWS', 'Vercel', 'GitHub Actions'],
  },
];
```

---

## Speed Up/Slow Down Scrolling

**File:** `src/hooks/useLenisScroll.js`

```jsx
// Faster scrolling (duration in seconds)
const lenis = new Lenis({
  duration: 0.8,  // Change from 1.2 to 0.8
  // ...
});

// Slower scrolling
const lenis = new Lenis({
  duration: 1.8,  // Change from 1.2 to 1.8
  // ...
});
```

---

## Change 3D Background Colors

**File:** `src/components/ThreeDBackground.jsx`

Replace the `materials` array:

```jsx
const materials = [
  new THREE.MeshPhongMaterial({
    color: 0xff00ff,           // Magenta
    emissive: 0xff00ff,
    emissiveIntensity: 0.3,
  }),
  new THREE.MeshPhongMaterial({
    color: 0x00ff00,           // Lime green
    emissive: 0x00ff00,
    emissiveIntensity: 0.2,
  }),
];
```

---

## Update Page Title & Meta Description

**File:** `index.html`

```html
<title>John Developer | Full Stack Engineer</title>
<meta name="description" content="Full stack engineer specializing in React, Node.js, and cloud technologies. Portfolio and projects." />
<meta name="author" content="John Developer" />
```

---

## Add Custom Font

**File:** `src/index.css`

Add at the top:

```css
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Plus+Jakarta+Sans:wght@400;600;700&display=swap');

body {
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
}

code, pre {
  font-family: 'Space Mono', monospace;
}
```

---

## Make Buttons Bigger

**File:** `src/index.css`

```css
.btn {
  padding: 1rem 2.5rem;    /* Increased from 1rem 2rem */
  font-size: 1.1rem;       /* Increased from 1rem */
  border-radius: 0.75rem;  /* Slightly more rounded */
}
```

---

## Change Section Padding

**File:** `src/index.css`

```css
section {
  padding: 6rem 3rem;  /* Increased from 4rem 3rem */
  min-height: 100vh;
}
```

---

## Hide 3D Background on Mobile

**File:** `src/components/ThreeDBackground.jsx`

Add this at the start of `useEffect`:

```jsx
useEffect(() => {
  const isMobile = window.innerWidth < 768;
  if (isMobile) {
    containerRef.current.style.display = 'none';
    return;
  }

  // ... rest of the code
}, []);
```

---

## Add Glow Effect to Text

**File:** `src/index.css`

```css
.glow-text {
  text-shadow: 0 0 20px rgba(0, 201, 255, 0.5),
               0 0 40px rgba(0, 201, 255, 0.3);
}
```

Use it:
```jsx
<h2 className="glow-text">Your Text Here</h2>
```

---

## Make Transitions Faster

**File:** `src/index.css`

```css
:root {
  --transition-smooth: 0.15s cubic-bezier(0.4, 0, 0.2, 1);      /* Faster */
  --transition-smooth-slow: 0.3s cubic-bezier(0.4, 0, 0.2, 1);  /* Faster */
}
```

---

## Change Gradient Text Direction

**File:** `src/index.css`

```css
.gradient-text {
  background: linear-gradient(45deg, var(--electric-accent), var(--secondary-accent));
  /* Other angles: 90deg (left-right), 180deg (bottom-top), 270deg (right-left) */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

---

## Add More Projects Easily

**File:** `src/components/Projects.jsx`

Quick template:

```jsx
{
  id: 8,
  title: 'Your Project Name',
  description: 'Brief description of what the project does and why it matters.',
  tags: ['Tech1', 'Tech2', 'Tech3'],
  featured: false,  // Set to true to highlight
},
```

---

## Disable Mouse Tracking on 3D Background

**File:** `src/components/ThreeDBackground.jsx`

Comment out or remove:

```jsx
// const onMouseMove = (event) => {
//   const x = (event.clientX / window.innerWidth) * 2 - 1;
//   const y = -(event.clientY / window.innerHeight) * 2 + 1;
//   // ...
// };

// window.addEventListener('mousemove', onMouseMove);
```

---

## Increase 3D Shape Speed

**File:** `src/components/ThreeDBackground.jsx`

Change the velocity multiplier:

```jsx
mesh.velocity = {
  x: (Math.random() - 0.5) * 0.01,   // Increased from 0.005
  y: (Math.random() - 0.5) * 0.01,   // Increased from 0.005
  z: (Math.random() - 0.5) * 0.01,   // Increased from 0.005
  rx: (Math.random() - 0.5) * 0.01,  // Increased from 0.003
  ry: (Math.random() - 0.5) * 0.01,  // Increased from 0.003
};
```

---

## Add a Newsletter Signup

**File:** `src/components/Contact.jsx`

Add before the `contactMethods`:

```jsx
const handleNewsletterSignup = (e) => {
  e.preventDefault();
  // Add your newsletter API here
  alert('Thanks for subscribing!');
};

// Then in JSX:
<form onSubmit={handleNewsletterSignup} className="newsletter-form">
  <input
    type="email"
    placeholder="your@email.com"
    required
  />
  <button type="submit" className="btn">Subscribe</button>
</form>
```

---

## Change Card Border Color

**File:** `src/index.css`

```css
.card {
  border: 1px solid rgba(138, 43, 226, 0.3);  /* Purple instead of cyan */
}

.card:hover {
  border-color: var(--secondary-accent);
}
```

---

## Pro Tips

✨ **Combine Snippets**: Mix and match these snippets to create your unique portfolio!

🎨 **Test Changes**: Use Chrome DevTools to preview changes before saving

⚡ **Performance**: Reload page with Ctrl+Shift+R to clear cache

🚀 **Deploy**: Use `npm run build` to create optimized production build

---

**Need help? Check PORTFOLIO_README.md and CUSTOMIZATION_GUIDE.md for detailed information!**
