import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'react-feather';
import './Navbar.scss'; // Make sure to create this file

const navLinks = [
  { id: 'home', name: 'Home' },
  { id: 'about', name: 'About' },
  { id: 'projects', name: 'Projects' },
  { id: 'contact', name: 'Contact' }
];

const Navbar = () => {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);

      // Active section highlight on scroll
      navLinks.forEach(link => {
        const section = document.getElementById(link.id);
        if (section) {
          const { top, bottom } = section.getBoundingClientRect();
          if (top <= 100 && bottom >= 100) {
            setActive(link.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setActive(id);
    setMobileMenuOpen(false);
    const section = document.getElementById(id);
    if (section) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const sectionRect = section.getBoundingClientRect().top;
      const sectionPosition = sectionRect - bodyRect;
      const offsetPosition = sectionPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <button 
          onClick={() => scrollToSection('home')}
          className="navbar-brand"
        >
          HashirNadeem
        </button>

        {/* Desktop Navigation */}
        <ul className="navbar-nav desktop-nav">
          {navLinks.map((link) => (
            <li key={link.id} className="navbar-item">
              <button
                onClick={() => scrollToSection(link.id)}
                className={`navbar-link ${active === link.id ? 'navbar-link-active' : ''}`}
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <div className="mobile-nav">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mobile-menu"
            >
              <ul className="mobile-nav-list">
                {navLinks.map((link) => (
                  <li key={link.id} className="mobile-nav-item">
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className={`mobile-nav-link ${active === link.id ? 'mobile-nav-link-active' : ''}`}
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;