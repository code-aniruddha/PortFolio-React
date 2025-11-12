// Skills & Technologies Data
export const skillsData = {
  frontend: {
    icon: '🎨',
    title: 'Frontend Development',
    description: 'Modern web technologies and frameworks',
    skills: [
      {
        name: 'HTML5',
        icon: 'fab fa-html5',
        level: 95,
        description: 'Semantic markup',
        years: 5
      },
      {
        name: 'CSS3',
        icon: 'fab fa-css3-alt',
        level: 95,
        description: 'Modern styling & animations',
        years: 5
      },
      {
        name: 'JavaScript',
        icon: 'fab fa-js',
        level: 95,
        description: 'ES6+ & Advanced concepts',
        years: 5
      },
      {
        name: 'React',
        icon: 'fab fa-react',
        level: 92,
        description: 'Hooks, Context, Performance',
        years: 4
      },
      {
        name: 'Three.js',
        icon: 'fas fa-cube',
        level: 88,
        description: '3D Graphics & WebGL',
        years: 2
      },
      {
        name: 'TypeScript',
        icon: 'fas fa-code',
        level: 85,
        description: 'Type-safe JavaScript',
        years: 3
      },
      {
        name: 'Tailwind CSS',
        icon: 'fas fa-palette',
        level: 92,
        description: 'Utility-first CSS',
        years: 3
      },
      {
        name: 'GSAP',
        icon: 'fas fa-star',
        level: 88,
        description: 'Advanced animations',
        years: 2
      }
    ]
  },
  backend: {
    icon: '⚙️',
    title: 'Backend Development',
    description: 'Server-side technologies and databases',
    skills: [
      {
        name: 'Node.js',
        icon: 'fab fa-node',
        level: 90,
        description: 'Runtime environment',
        years: 4
      },
      {
        name: 'Express.js',
        icon: 'fas fa-server',
        level: 90,
        description: 'Web framework',
        years: 4
      },
      {
        name: 'Python',
        icon: 'fab fa-python',
        level: 85,
        description: 'Backend & Data Science',
        years: 3
      },
      {
        name: 'MongoDB',
        icon: 'fas fa-database',
        level: 88,
        description: 'NoSQL database',
        years: 4
      },
      {
        name: 'PostgreSQL',
        icon: 'fas fa-table',
        level: 85,
        description: 'Relational database',
        years: 3
      },
      {
        name: 'GraphQL',
        icon: 'fas fa-project-diagram',
        level: 82,
        description: 'Query language',
        years: 2
      },
      {
        name: 'REST APIs',
        icon: 'fas fa-network-wired',
        level: 92,
        description: 'API design & development',
        years: 4
      },
      {
        name: 'WebSocket',
        icon: 'fas fa-plug',
        level: 85,
        description: 'Real-time communication',
        years: 2
      }
    ]
  },
  tools: {
    icon: '🛠️',
    title: 'Tools & DevOps',
    description: 'Development tools and deployment',
    skills: [
      {
        name: 'Git',
        icon: 'fab fa-git-alt',
        level: 95,
        description: 'Version control',
        years: 5
      },
      {
        name: 'Docker',
        icon: 'fab fa-docker',
        level: 85,
        description: 'Containerization',
        years: 3
      },
      {
        name: 'GitHub Actions',
        icon: 'fab fa-github',
        level: 88,
        description: 'CI/CD automation',
        years: 2
      },
      {
        name: 'AWS',
        icon: 'fab fa-aws',
        level: 82,
        description: 'Cloud services',
        years: 3
      },
      {
        name: 'Webpack',
        icon: 'fas fa-cube',
        level: 85,
        description: 'Module bundler',
        years: 3
      },
      {
        name: 'Vite',
        icon: 'fas fa-bolt',
        level: 88,
        description: 'Build tool',
        years: 2
      },
      {
        name: 'Figma',
        icon: 'fab fa-figma',
        level: 80,
        description: 'Design tool',
        years: 2
      },
      {
        name: 'Jest',
        icon: 'fas fa-vial',
        level: 88,
        description: 'Testing framework',
        years: 3
      }
    ]
  }
};

// All skills flattened for grid display
export const allTechSkills = [
  {
    name: 'HTML5',
    icon: 'fab fa-html5',
    description: 'Semantic markup',
    category: 'frontend'
  },
  {
    name: 'CSS3',
    icon: 'fab fa-css3-alt',
    description: 'Modern styling',
    category: 'frontend'
  },
  {
    name: 'JavaScript',
    icon: 'fab fa-js',
    description: 'ES6+',
    category: 'frontend'
  },
  {
    name: 'React',
    icon: 'fab fa-react',
    description: 'UI Library',
    category: 'frontend'
  },
  {
    name: 'Vue.js',
    icon: 'fab fa-vuejs',
    description: 'Progressive Framework',
    category: 'frontend'
  },
  {
    name: 'Three.js',
    icon: 'fas fa-cube',
    description: '3D Graphics',
    category: 'frontend'
  },
  {
    name: 'Node.js',
    icon: 'fab fa-node',
    description: 'Runtime Environment',
    category: 'backend'
  },
  {
    name: 'Express.js',
    icon: 'fas fa-server',
    description: 'Web Framework',
    category: 'backend'
  },
  {
    name: 'Python',
    icon: 'fab fa-python',
    description: 'Backend & AI',
    category: 'backend'
  },
  {
    name: 'MongoDB',
    icon: 'fas fa-database',
    description: 'NoSQL Database',
    category: 'backend'
  },
  {
    name: 'PostgreSQL',
    icon: 'fas fa-table',
    description: 'Relational DB',
    category: 'backend'
  },
  {
    name: 'Git',
    icon: 'fab fa-git-alt',
    description: 'Version Control',
    category: 'tools'
  },
  {
    name: 'Docker',
    icon: 'fab fa-docker',
    description: 'Containerization',
    category: 'tools'
  },
  {
    name: 'AWS',
    icon: 'fab fa-aws',
    description: 'Cloud Services',
    category: 'tools'
  },
  {
    name: 'Figma',
    icon: 'fab fa-figma',
    description: 'Design Tool',
    category: 'tools'
  },
  {
    name: 'Webpack',
    icon: 'fas fa-cube',
    description: 'Module Bundler',
    category: 'tools'
  },
  {
    name: 'GraphQL',
    icon: 'fas fa-project-diagram',
    description: 'Query Language',
    category: 'backend'
  }
];

// Get skills by category
export const getSkillsByCategory = (category) => {
  return skillsData[category]?.skills || [];
};

// Get all skills flattened
export const getAllSkills = () => {
  return Object.values(skillsData).reduce((acc, cat) => [...acc, ...cat.skills], []);
};

// Get top skills (by proficiency)
export const getTopSkills = (limit = 6) => {
  return getAllSkills()
    .sort((a, b) => b.level - a.level)
    .slice(0, limit);
};

// Expertise timeline
export const experienceTimeline = [
  {
    year: '2020',
    title: 'Full Stack Developer',
    company: 'Tech Startup',
    description: 'Developed multiple web applications using React, Node.js, and MongoDB'
  },
  {
    year: '2021',
    title: 'Senior Frontend Developer',
    company: 'Digital Agency',
    description: 'Led frontend team, implemented design systems, and mentored junior developers'
  },
  {
    year: '2022',
    title: 'Tech Lead',
    company: 'SaaS Company',
    description: 'Architected scalable solutions, improved performance by 40%, and led 3D visualization projects'
  },
  {
    year: '2024',
    title: 'Creative Developer',
    company: 'Freelance',
    description: 'Building innovative web experiences with Three.js, GSAP, and modern web technologies'
  }
];
