# 🚀 Modern Portfolio Website

A stunning, techy portfolio website built with React, Three.js, Lenis, and GSAP featuring a beautiful dark mode design with smooth animations and interactive 3D backgrounds.

## ✨ Features

### 🎨 Design System
- **Dark Mode Theme** with carefully chosen colors for maximum readability and style:
  - Primary Background: `#0D0D0D` (Near Black Charcoal)
  - Secondary Background: `#1A1A1A` (Darker Gray)
  - Primary Text: `#EBEBEB` (Off-White)
  - Secondary Text: `#A0A0A0` (Medium-Light Gray)
  - Electric Accent: `#00C9FF` (Electric Cyan)
  - Secondary Accent: `#8A2BE2` (Blue Violet)

### 🌐 Interactive 3D Background
- Animated 3D geometric shapes using Three.js
- Responsive to mouse movements
- Multiple lighting effects with neon colors
- Bouncing physics for dynamic motion

### ✨ Smooth Scrolling
- Integrated Lenis for buttery smooth scroll experience
- Customizable easing and duration
- Mobile-friendly touch scrolling

### 🎬 Advanced Animations
- GSAP-powered scroll triggers
- Staggered animations on section entry
- Smooth hover effects and transitions
- Micro-interactions on all interactive elements

### 📱 Responsive Design
- Mobile-first approach
- Adaptive layouts for all screen sizes
- Touch-friendly interactions

## 📋 Sections

### Hero Section
- Eye-catching headline with gradient text
- Call-to-action buttons
- Animated scroll indicator
- Smooth entrance animations

### Projects Section
- Grid layout with featured project highlights
- Project cards with:
  - Title and description
  - Technology tags
  - Links to project details
  - Hover effects with glow animation
- 6 sample projects (easily customizable)

### About Section
- Personal introduction
- Skills organized by category:
  - Frontend technologies
  - Backend technologies
  - Tools & other
- Skill items with interactive hover effects

### Contact Section
- Contact method cards (Email, LinkedIn, GitHub, Twitter)
- Social links
- Call-to-action for collaboration

## 🛠️ Technologies Used

- **React 19** - UI library
- **Three.js** - 3D graphics
- **Lenis** - Smooth scrolling
- **GSAP** - Animation engine
- **Vite** - Build tool
- **CSS3** - Modern styling with CSS variables and gradients

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Navigate to project directory
cd Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will open at `http://localhost:5174/`

### Build for Production

```bash
npm run build
```

## 🎨 Customization Guide

### 1. Update Your Information

Edit `src/components/Hero.jsx`:
```jsx
<h1>Hey, I'm <span className="gradient-text">Your Name</span></h1>
<p>Your Title | Your Description</p>
```

### 2. Update Projects

Edit the `projects` array in `src/components/Projects.jsx`:
```jsx
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Your project description',
    tags: ['React', 'Three.js'],
    featured: true,
  },
  // ... more projects
];
```

### 3. Update Skills

Edit the `skills` array in `src/components/About.jsx`:
```jsx
const skills = [
  {
    category: 'Frontend',
    items: ['React', 'Three.js', 'Your Skills']
  },
  // ... more categories
];
```

### 4. Update Contact Information

Edit the `contactMethods` array in `src/components/Contact.jsx`:
```jsx
const contactMethods = [
  {
    icon: '✉️',
    label: 'Email',
    value: 'your-email@example.com',
    link: 'mailto:your-email@example.com',
  },
  // ... more contact methods
];
```

### 5. Change Color Scheme

Edit `:root` variables in `src/index.css`:
```css
:root {
  --primary-bg: #0d0d0d;
  --electric-accent: #00c9ff;
  /* ... more colors */
}
```

### 6. Customize 3D Background

Edit `src/components/ThreeDBackground.jsx`:
- Change geometry types (IcosahedronGeometry, TetrahedronGeometry, etc.)
- Adjust colors and lighting
- Modify particle velocity and behavior
- Change mouse interaction sensitivity

### 7. Adjust Animation Timing

Edit Lenis settings in `src/hooks/useLenisScroll.js`:
```jsx
const lenis = new Lenis({
  duration: 1.2,  // Scroll duration
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  // ... more settings
});
```

## 📁 Project Structure

```
Portfolio/
├── src/
│   ├── components/
│   │   ├── ThreeDBackground.jsx    # 3D background component
│   │   ├── Hero.jsx                # Hero section
│   │   ├── Projects.jsx            # Projects grid
│   │   ├── About.jsx               # About section
│   │   ├── Contact.jsx             # Contact section
│   │   └── *.css                   # Component styles
│   ├── hooks/
│   │   └── useLenisScroll.js       # Lenis scroll hook
│   ├── App.jsx                     # Main app component
│   ├── App.css                     # App styles
│   ├── index.css                   # Global styles
│   └── main.jsx                    # Entry point
├── public/                         # Static assets
├── index.html                      # HTML template
├── package.json                    # Dependencies
├── vite.config.js                  # Vite config
└── README.md                       # This file
```

## 🎯 Best Practices

1. **Performance**: The 3D background uses WebGL which is GPU-accelerated. For better mobile performance, consider disabling it on mobile devices.

2. **Accessibility**: All buttons and links are properly labeled. Text has sufficient contrast ratios.

3. **SEO**: Update meta tags in `index.html` with your information and keywords.

4. **Images**: Replace placeholder images in the public folder with your own.

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Then deploy using Vercel CLI or connect your GitHub repo
```

### Netlify
```bash
npm run build
# Deploy the 'dist' folder
```

### GitHub Pages
Update `vite.config.js` with your repository name and deploy the `dist` folder.

## 🎬 Advanced Features

### Parallax Scrolling
You can add parallax effects by using ScrollTrigger:
```jsx
gsap.to(element, {
  scrollTrigger: {
    trigger: element,
    start: "top center",
    end: "bottom center",
    scrub: 1,
  },
  y: 100,
});
```

### Mouse Tracking
The 3D background already tracks mouse movement. You can add more mouse-reactive elements in components.

### Custom Easing
Experiment with different GSAP easing functions:
```jsx
ease: "power1.inOut" // or "back.out", "elastic.out", etc.
```

## 📚 Resources

- [Three.js Documentation](https://threejs.org/docs/)
- [GSAP Documentation](https://gsap.com/docs)
- [Lenis Documentation](https://lenis.studiofreight.com/)
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)

## 🤝 Contributing

Feel free to fork, modify, and use this portfolio template for your own projects!

## 📄 License

This project is open source and available for personal and commercial use.

---

**Made with ❤️ and cutting-edge web technologies**
