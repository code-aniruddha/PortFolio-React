import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contactItemsRef = useRef([]);

  const contactMethods = [
    {
      icon: '✉️',
      label: 'Email',
      value: 'alex.chen.dev@gmail.com',
      link: 'mailto:alex.chen.dev@gmail.com',
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/alexchen',
      link: 'https://linkedin.com/in/alexchen',
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'github.com/alexchen',
      link: 'https://github.com/alexchen',
    },
    {
      icon: '𝕏',
      label: 'Twitter',
      value: '@alexchen_dev',
      link: 'https://twitter.com/alexchen_dev',
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

    // Stagger animate contact items
    if (contactItemsRef.current.length > 0) {
      contactItemsRef.current.forEach((item, index) => {
        if (item) {
          gsap.fromTo(
            item,
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
              delay: 0.05 + index * 0.1,
              ease: 'power3.out',
            }
          );
        }
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="contact">
      <div className="container">
        <h2 ref={titleRef} className="contact-title">
          Let's <span className="gradient-text">Connect</span>
        </h2>

        <p className="contact-subtitle">
          Have an exciting project in mind or want to collaborate? I'd love to hear from you.
        </p>

        <div className="contact-methods">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              ref={(el) => (contactItemsRef.current[index] = el)}
              className="contact-card card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-icon">{method.icon}</div>
              <div className="contact-info">
                <h3>{method.label}</h3>
                <p>{method.value}</p>
              </div>
              <div className="contact-arrow">→</div>
            </a>
          ))}
        </div>

        {/* <div className="contact-footer">
          <p>
            Designed & built with <span className="gradient-text">React, Three.js & ❤️</span> by yours truly.
          </p>
          <div className="social-links">
            <a href="https://github.com/alexchen" className="social-link" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com/in/alexchen" className="social-link" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://twitter.com/alexchen_dev" className="social-link" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
            <a href="mailto:alex.chen.dev@gmail.com" className="social-link">
              Email
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
