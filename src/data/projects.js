// Projects Data - All project information in one place
export const projectsData = [
  {
    id: 1,
    title: 'Quantum Analytics Dashboard',
    description: 'Real-time data visualization platform processing 1M+ data points. Features ML-powered predictions, WebGL visualizations, and interactive 3D charts built with React, Three.js, and Python.',
    longDescription: 'A full-stack e-commerce solution with payment integration, inventory management, and user authentication. Supports multiple payment gateways and real-time inventory tracking.',
    image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    tags: ['React', 'Three.js', 'Python', 'WebGL', 'TensorFlow'],
    featured: true,
    link: '#',
    technologies: {
      frontend: ['React', 'Three.js', 'GSAP'],
      backend: ['Python', 'Flask', 'TensorFlow'],
      tools: ['WebGL', 'Docker', 'AWS']
    },
    stats: {
      performance: '98%',
      users: '10K+',
      uptime: '99.9%'
    }
  },
  {
    id: 2,
    title: 'NexGen UI Library',
    description: 'High-performance component library with smooth animations, custom hooks, and accessibility features. 40+ components with Storybook integration and 99.9% Lighthouse score.',
    longDescription: 'A collaborative task management tool with real-time updates, team collaboration features, and progress tracking.',
    image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    tags: ['React', 'GSAP', 'Tailwind', 'TypeScript', 'Storybook'],
    featured: true,
    link: '#',
    technologies: {
      frontend: ['React', 'TypeScript', 'Storybook'],
      styling: ['Tailwind CSS', 'SCSS', 'CSS-in-JS'],
      tools: ['Jest', 'Chromatic', 'GitHub Actions']
    },
    stats: {
      components: '40+',
      lighthouse: '99.9%',
      coverage: '95%'
    }
  },
  {
    id: 3,
    title: 'Blockchain DeFi Protocol',
    description: 'Smart contract suite for decentralized finance with yield farming, staking, and governance. Tested on Ethereum mainnet with $2M+ TVL.',
    longDescription: 'A real-time weather application with location-based forecasts, weather alerts, and beautiful visualizations.',
    image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    tags: ['Solidity', 'Web3.js', 'React', 'Hardhat', 'Security'],
    featured: false,
    link: '#',
    technologies: {
      frontend: ['React', 'Web3.js', 'Ethers.js'],
      blockchain: ['Solidity', 'Hardhat', 'Truffle'],
      tools: ['MetaMask', 'Infura', 'OpenZeppelin']
    },
    stats: {
      tvl: '$2M+',
      contracts: '5',
      audited: true
    }
  },
  {
    id: 4,
    title: 'Immersive 3D Marketplace',
    description: 'E-commerce platform with AR product preview, real-time 3D model loading, and WebGL-based customizer. 50% increase in conversion rates.',
    image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    tags: ['Three.js', 'React', 'AR.js', 'Node.js', 'PostgreSQL'],
    featured: false,
    link: '#',
    technologies: {
      frontend: ['React', 'Three.js', 'AR.js'],
      backend: ['Node.js', 'Express', 'PostgreSQL'],
      tools: ['Stripe', 'AWS S3', 'Docker']
    },
    stats: {
      conversions: '+50%',
      products: '500+',
      revenue: '$1M+'
    }
  },
  {
    id: 5,
    title: 'Collaborative Code Editor',
    description: 'Real-time code collaboration platform with syntax highlighting, live cursors, and integrated terminal. Supports 50+ programming languages.',
    image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    tags: ['React', 'WebSocket', 'Node.js', 'Monaco Editor', 'Redis'],
    featured: false,
    link: '#',
    technologies: {
      frontend: ['React', 'Monaco Editor', 'Socket.IO'],
      backend: ['Node.js', 'WebSocket', 'Redis'],
      tools: ['Docker', 'Kubernetes', 'AWS EC2']
    },
    stats: {
      languages: '50+',
      users: '5K+',
      uptime: '99.9%'
    }
  },
  {
    id: 6,
    title: 'Neuron Animation Engine',
    description: 'Lightweight, GPU-accelerated animation framework. Capable of rendering 10K+ elements at 60fps with physics simulation and particle systems.',
    image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    tags: ['JavaScript', 'WebGL', 'Canvas', 'Performance', 'Physics'],
    featured: false,
    link: '#',
    technologies: {
      core: ['WebGL', 'Canvas API', 'JavaScript'],
      physics: ['Rapier.js', 'Cannon.js'],
      tools: ['Webpack', 'Rollup', 'TypeScript']
    },
    stats: {
      elements: '10K+',
      fps: '60',
      bundleSize: '42KB'
    }
  }
];

// Project categories for filtering
export const projectCategories = [
  'All',
  'Web Development',
  'Blockchain',
  'Data Visualization',
  '3D Graphics',
  'Tools'
];

// Get featured projects
export const getFeaturedProjects = () => {
  return projectsData.filter(project => project.featured).slice(0, 3);
};

// Get projects by category
export const getProjectsByCategory = (category) => {
  if (category === 'All') return projectsData;
  return projectsData.filter(project =>
    project.tags.some(tag => tag.toLowerCase().includes(category.toLowerCase()))
  );
};

// Get single project by ID
export const getProjectById = (id) => {
  return projectsData.find(project => project.id === id);
};
