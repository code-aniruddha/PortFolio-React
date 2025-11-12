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
      icon: 'fa-solid fa-envelope',
      label: 'Email',
      value: 'aniruddha.chaudhari.connect@gmail.com',
      link: 'mailto:aniruddha.chaudhari.connect@gmail.com',
    },
    {
      icon: 'fa-brands fa-linkedin',
      label: 'LinkedIn',
      value: '@aniruddha-chaudhari-ac',
      link: 'https://linkedin.com/in/aniruddha-chaudhari-ac',
    },
    {
      icon: 'fa-brands fa-github',
      label: 'GitHub',
      value: '@code-aniruddha',
      link: 'https://github.com/code-aniruddha',
    },
    {
      icon: 'fa-brands fa-instagram',
      label: 'Instagram',
      value: '@_aniruddha_chaudhari',
      link: 'https://instagram.com/_aniruddha_chaudhari',
    },
    {
      icon: 'fa-brands fa-twitter',
      label: 'Twitter',
      value: '@_aniruddha_c11',
      link: 'https://x.com/_aniruddha_c11',
    }
  ];

  useEffect(() => {
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
              <div className="contact-icon">
                <i className={method.icon}></i>
              </div>
              <div className="contact-info">
                <h3>{method.label}</h3>
                <p>{method.value}</p>
              </div>
              <div className="contact-arrow">→</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
