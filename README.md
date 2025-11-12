# 🚀 Modern Portfolio Website

A stunning, modern portfolio website built with React, featuring smooth animations, 3D effects, and a sleek UI design. Perfect for developers, designers, and tech enthusiasts looking to showcase their work.

![Portfolio Preview](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-3.13.0-88CE02?style=for-the-badge&logo=greensock&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-0.181.1-000000?style=for-the-badge&logo=three.js&logoColor=white)

## ✨ Features

### 🎨 Design
- **Modern & Techy UI** - Clean, minimalist design with purple-blue gradient theme
- **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- **Custom Favicon** - Code-themed SVG favicon with gradient effects
- **Smooth Scrolling** - Lenis smooth scroll integration
- **Dark Theme** - Eye-friendly dark mode design

### 🎭 Animations
- **GSAP Powered** - Professional animations using GSAP and ScrollTrigger
- **Scroll Animations** - Elements animate as you scroll through sections
- **Hover Effects** - Interactive hover states on all interactive elements
- **Floating Particles** - Dynamic particle effects in hero section
- **Smooth Transitions** - Buttery smooth transitions throughout

### 📱 Sections
- **Hero Section** - Eye-catching landing with animated role text, stats, and particles
- **About Me** - Personal introduction with competitive programming profiles
- **Projects** - Showcase your best work with project cards
- **Skills** - Display your tech stack and expertise
- **Contact** - Multiple ways to connect (Email, LinkedIn, GitHub, Twitter)

### 🔗 Integrations
- **Competitive Programming Profiles** - Links to LeetCode, HackerRank, CodeChef, Codeforces
- **Social Media** - Quick links to GitHub, LinkedIn, Twitter
- **Smooth Navigation** - Fixed navbar with scroll-to-section functionality

## 🛠️ Tech Stack

### Core
- **React 19.2.0** - Latest React with hooks
- **Vite 7.2.2** - Lightning-fast build tool
- **GSAP 3.13.0** - Professional animations
- **Three.js 0.181.1** - 3D graphics library
- **Lenis 1.3.15** - Smooth scrolling

### Styling
- **CSS3** - Custom properties, gradients, animations
- **Modern CSS** - Flexbox, Grid, backdrop-filter
- **Responsive Design** - Mobile-first approach

## 📦 Installation

1. **Clone the repository**
```bash
git clone https://github.com/code-aniruddha/PortFolio-React.git
cd PortFolio-React
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Build for production**
```bash
npm run build
```

5. **Preview production build**
```bash
npm run preview
```

## 🎯 Customization Guide

### 1. Personal Information

Update your details in the following files:

**Hero Section** (`src/components/Hero.jsx`)
```javascript
const stats = [
  { value: '5+', label: 'Years Exp' },
  { value: '50+', label: 'Projects' },
  { value: '30+', label: 'Clients' }
];

const roles = ['Full Stack Dev', 'UI/UX Engineer', '3D Specialist', 'Tech Innovator'];
```

**About Section** (`src/components/About.jsx`)
```javascript
const codingPlatforms = [
  { icon: '🏆', label: 'LeetCode', link: 'https://leetcode.com/yourusername' },
  // Update your profile links
];
```

**Contact Section** (`src/components/Contact.jsx`)
```javascript
const contactMethods = [
  { icon: '✉️', label: 'Email', value: 'your.email@example.com', link: 'mailto:your.email@example.com' },
  // Update your contact info
];
```

### 2. Projects

Add your projects in `src/data/projects.js`:
```javascript
export const projects = [
  {
    title: 'Your Project',
    description: 'Brief description',
    image: '/project-image.jpg',
    tags: ['React', 'Node.js'],
    github: 'https://github.com/yourusername/project',
    demo: 'https://your-project.com'
  },
  // Add more projects
];
```

### 3. Skills

Update your skills in `src/data/skills.js`:
```javascript
export const skills = {
  frontend: ['React', 'JavaScript', 'CSS3'],
  backend: ['Node.js', 'Express', 'MongoDB'],
  // Add your skills
};
```

### 4. Color Theme

Modify colors in `src/index.css`:
```css
:root {
  --electric-accent: #00c9ff;
  --secondary-accent: #8a2be2;
  /* Customize colors */
}
```

## 📂 Project Structure

```
Portfolio/
├── public/
│   ├── favicon.svg          # Custom favicon
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Hero.jsx         # Landing section
│   │   ├── About.jsx        # About section
│   │   ├── Projects.jsx     # Projects showcase
│   │   ├── Skills.jsx       # Skills display
│   │   ├── Contact.jsx      # Contact form
│   │   ├── Navbar.jsx       # Navigation bar
│   │   └── *.css            # Component styles
│   ├── data/
│   │   ├── projects.js      # Projects data
│   │   └── skills.js        # Skills data
│   ├── hooks/
│   │   └── useLenisScroll.js # Smooth scroll hook
│   ├── App.jsx              # Main app component
│   ├── index.css            # Global styles
│   └── main.jsx             # Entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Drag and drop `dist` folder to [Netlify](https://netlify.com)

### GitHub Pages
```bash
npm run build
# Deploy dist folder to gh-pages branch
```

## 🎨 Color Palette

- **Primary Gradient**: `#5865f2` → `#00c9ff`
- **Background**: Dark gradient with subtle glow effects
- **Text Primary**: `#ffffff`
- **Text Secondary**: `rgba(255, 255, 255, 0.7)`
- **Accent**: `#00c9ff` (Electric Blue)
- **Secondary Accent**: `#8a2be2` (Blue Violet)

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Aniruddha**
- GitHub: [@code-aniruddha](https://github.com/code-aniruddha)
- Portfolio: [Your Portfolio URL]

## 🙏 Acknowledgments

- [GSAP](https://greensock.com/gsap/) - Animation library
- [Three.js](https://threejs.org/) - 3D graphics
- [Lenis](https://github.com/studio-freight/lenis) - Smooth scroll
- [Font Awesome](https://fontawesome.com/) - Icons
- [Google Fonts](https://fonts.google.com/) - Typography

## 📸 Screenshots

### Desktop View
![Desktop View](https://via.placeholder.com/800x400?text=Add+Your+Desktop+Screenshot)

### Mobile View
![Mobile View](https://via.placeholder.com/400x800?text=Add+Your+Mobile+Screenshot)

---

⭐ **Star this repo if you find it helpful!** ⭐

Made with ❤️ and React
