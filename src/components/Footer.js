import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/hashirnadeem252',
      icon: <FaGithub />,
      color: '#333'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/hashir-nadeem-065309246',
      icon: <FaLinkedin />,
      color: '#0077b5'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/hashir.__nadeem',
      icon: <FaInstagram />,
      color: '#e4405f'
    },
    {
      name: 'Email',
      url: 'mailto:hashirnadeem009@gmail.com',
      icon: <FaEnvelope />,
      color: '#ea4335'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="footer-shapes">
          <div className="footer-shape footer-shape-1"></div>
          <div className="footer-shape footer-shape-2"></div>
          <div className="footer-shape footer-shape-3"></div>
        </div>
      </div>
      
      <div className="container mx-auto">
        <motion.div 
          className="footer-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="footer-brand" variants={itemVariants}>
            <h3 className="brand-name">Hashir Nadeem</h3>
            <p className="brand-tagline">Building digital experiences that matter</p>
            <div className="brand-description">
              <p>Full Stack Developer passionate about creating innovative solutions</p>
              <p>Let's build something amazing together!</p>
            </div>
          </motion.div>
          
          <motion.div className="footer-social" variants={itemVariants}>
            <h4 className="social-title">Connect With Me</h4>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{ '--hover-color': link.color }}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ 
                    opacity: 1, 
                    scale: 1,
                    transition: { delay: index * 0.1, duration: 0.3 }
                  }}
                  viewport={{ once: true }}
                  aria-label={link.name}
                >
                  <div className="social-icon">
                    {link.icon}
                  </div>
                  <span className="social-tooltip">{link.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="footer-divider"></div>
          <div className="footer-copyright">
            <p>
              &copy; {currentYear} Hashir Nadeem. All rights reserved.
            </p>
           
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;