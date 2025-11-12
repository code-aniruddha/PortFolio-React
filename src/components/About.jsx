import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  const codingPlatforms = [
    {
      icon: '🏆',
      label: 'LeetCode',
      link: 'https://leetcode.com/alexchen',
    },
    {
      icon: '💻',
      label: 'HackerRank',
      link: 'https://www.hackerrank.com/alexchen',
    },
    {
      icon: '⚔️',
      label: 'CodeChef',
      link: 'https://www.codechef.com/users/alexchen',
    },
    {
      icon: '🎯',
      label: 'Codeforces',
      link: 'https://codeforces.com/profile/alexchen',
    },
  ];

  useEffect(() => {
    // Animate title
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
        }
      );
    }

    // Animate content
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: -30 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
          opacity: 1,
          x: 0,
          duration: 0.6,
          delay: 0.1,
          ease: 'power3.out',
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="about">
      <div className="container">
        <h2 ref={titleRef} className="about-title">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="about-content">
          <div ref={contentRef} className="about-text">
            <p>
              I'm a passionate full-stack developer and creative technologist with 5+ years of experience building high-performance web applications. Specializing in React, Three.js, and Node.js, I craft digital experiences that seamlessly blend aesthetics with functionality.
            </p>
            <p>
              My expertise spans from architecting scalable backend systems to developing immersive 3D visualizations and smooth, pixel-perfect frontend interfaces. I'm obsessed with performance optimization, clean code architecture, and pushing the boundaries of what's possible on the web.
            </p>
            <p>
              I've worked on projects ranging from real-time collaboration platforms and blockchain applications to AI-powered analytics dashboards and interactive 3D experiences. My passion for innovation drives me to constantly explore emerging technologies and best practices.
            </p>
            <p>
              Beyond code, I'm an open-source contributor, tech speaker, and mentor. When offline, you'll find me experimenting with generative art, exploring new frameworks, or sharing knowledge with the developer community.
            </p>
          </div>

          <div className="about-photo-section">
            <div className="photo-placeholder">
              <div className="photo-gradient"></div>
              <div className="photo-icon">👨‍💻</div>
            </div>
          </div>
        </div>

        <div className="coding-platforms-section">
          <h3 className="platforms-title">
            Competitive <span className="gradient-text">Programming</span>
          </h3>
          <p className="platforms-subtitle">
            Check out my problem-solving journey and competitive programming profiles
          </p>

          <div className="coding-platforms">
            {codingPlatforms.map((platform, index) => (
              <a
                key={index}
                href={platform.link}
                className="platform-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="platform-icon">{platform.icon}</span>
                <span className="platform-label">{platform.label}</span>
                <span className="platform-arrow">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
