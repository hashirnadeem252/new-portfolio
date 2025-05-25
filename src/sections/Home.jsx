import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Button from '../components/Button';
import './Home.scss';

const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="home-section">
      <div className="container">
        <div className="content-wrapper">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-content"
          >
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="greeting"
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="heading"
            >
              <span className="name-gradient" data-text="YourName">
                Hashir Nadeem 
              </span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="type-animation-container"
            >
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'UI/UX Designer',
                  2000,
                  'App Developer',
                  2000,
                  'Creative Problem Solver',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="type-animation"
                repeat={Infinity}
              />
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="description"
            >
              I craft exceptional digital experiences with cutting-edge technologies, 
              focusing on performance, accessibility, and stunning visual design that 
              brings ideas to life.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="button-group"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="btn-primary"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-secondary"
              >
                Let's Connect
              </button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="hero-image"
          >
            <div className="image-container">
              <img
                src="assets/images/HashirNadeem.jpg"
                alt="Hashir Nadeem - Full Stack Developer"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/350x350/667eea/ffffff?text=Your+Photo';
                }}
              />
            </div>
            
            {/* Floating decorative elements */}
            <motion.div 
              className="floating-element element-1"
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
            <motion.div 
              className="floating-element element-2"
              animate={{ 
                y: [0, -15, 0],
                x: [0, 10, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
            <motion.div 
              className="floating-element element-3"
              animate={{ 
                y: [0, -10, 0],
                x: [0, -5, 0]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="scroll-indicator"
          onClick={() => scrollToSection('about')}
        >
          <span className="scroll-text">Scroll</span>
          <div className="scroll-arrow"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;