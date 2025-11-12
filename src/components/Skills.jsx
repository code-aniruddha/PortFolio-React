import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { skillsData, allTechSkills } from '../data/skills';
import './Skills.css';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const techCardsRef = useRef([]);
  const categoryCardsRef = useRef([]);

  useEffect(() => {
    // Animate section title
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

    // Animate tech cards with stagger
    if (techCardsRef.current.length > 0) {
      techCardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { opacity: 0, y: 20 },
            {
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                once: true,
              },
              opacity: 1,
              y: 0,
              duration: 0.5,
              delay: 0.05 + (index % 4) * 0.05,
              ease: 'power3.out',
            }
          );
        }
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="skills">
      <div className="container">
        <h2 ref={titleRef} className="skills-title">
          Skills & <span className="gradient-text">Technologies</span>
        </h2>
        <p className="skills-subtitle">
          Technologies I work with to bring ideas to life
        </p>

        {/* Tech Cards Grid */}
        <div className="tech-cards-grid">
          {allTechSkills.map((tech, index) => (
            <div
              key={tech.name}
              ref={(el) => (techCardsRef.current[index] = el)}
              className="tech-card"
              data-category={tech.category}
            >
              <div className="tech-icon">
                <i className={tech.icon}></i>
              </div>
              <h3 className="tech-name">{tech.name}</h3>
              <p className="tech-description">{tech.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="skills-stats">
          <div className="stat-box">
            <h4>Total Skills</h4>
            <p className="stat-number">{allTechSkills.length}</p>
          </div>
          <div className="stat-box">
            <h4>Expertise Areas</h4>
            <p className="stat-number">3</p>
          </div>
          <div className="stat-box">
            <h4>Years Experience</h4>
            <p className="stat-number">5+</p>
          </div>
          <div className="stat-box">
            <h4>Projects Completed</h4>
            <p className="stat-number">50+</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
