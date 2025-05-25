import { motion } from 'framer-motion';
import { useState } from 'react';
import './About.scss'; // Import the SCSS file

const About = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    { name: 'HTML/CSS', level: 95, colorClass: 'html-css', icon: '🎨' },
    { name: 'JavaScript', level: 90, colorClass: 'javascript', icon: '⚡' },
    { name: 'React.js', level: 88, colorClass: 'react', icon: '⚛️' },
    { name: 'Node.js', level: 85, colorClass: 'nodejs', icon: '🔧' },
    { name: 'PHP', level: 80, colorClass: 'php', icon: '🐘' },
    { name: 'MySQL', level: 85, colorClass: 'mysql', icon: '🗄️' },
    { name: 'Flutter', level: 75, colorClass: 'flutter', icon: '🦋' },
    { name: 'Firebase', level: 78, colorClass: 'firebase', icon: '🔥' },
    { name: 'UI/UX Design', level: 82, colorClass: 'uiux', icon: '🎭' },
    { name: 'Python', level: 65, colorClass: 'python', icon: '🐍' },
  ];

  const personalInfo = [
    { label: 'Name', value: 'Hashir Nadeem', icon: '👨‍💻' },
    { label: 'Email', value: 'hashirnadeem009@gmail.com', icon: '📧' },
    { label: 'Location', value: 'Pakistan', icon: '🌍' },
    { label: 'Freelance', value: 'Available', icon: '✅' },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
        duration: 0.6,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, rotateY: -20, scale: 0.9 },
    visible: {
      opacity: 1,
      rotateY: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 15,
        duration: 0.8,
      },
    },
    hover: {
      scale: 1.02,
      rotateY: 2,
      rotateX: 2,
      boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const iconVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.2, 
      rotate: 10,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
      }
    },
  };

  const progressVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: (level) => ({
      width: `${level}%`,
      opacity: 1,
      transition: {
        width: { duration: 1.5, ease: "easeOut" },
        opacity: { duration: 0.5 }
      }
    })
  };

  // Circular progress component
  const CircularProgress = ({ percentage, skill, colorClass }) => {
    const radius = 36;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="circular-progress">
        <svg width="80" height="80" className="progress-ring">
          <circle
            className="progress-background"
            cx="40"
            cy="40"
            r={radius}
          />
          <motion.circle
            className={`progress-bar ${colorClass}`}
            cx="40"
            cy="40"
            r={radius}
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </svg>
        <div className="progress-text">{percentage}%</div>
      </div>
    );
  };

  return (
    <section id="about" className="about-section">
      {/* Enhanced Background decoration */}
      <div className="floating-bg bg-1"></div>
      <div className="floating-bg bg-2"></div>
      <div className="floating-bg bg-3"></div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="section-title"
        >
          <h2>About Me</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="about-content"
        >
          {/* Left side - Personal Info */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="glass-card personal-info"
          >
            <motion.div variants={itemVariants} className="section-header">
              <motion.span 
                className="emoji"
                whileHover={{ scale: 1.3, rotate: 20 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                👋
              </motion.span>
              <h3>Who I Am</h3>
            </motion.div>

            <motion.div variants={itemVariants} className="description">
              <p>
                I'm a passionate <span className="highlight">Full-Stack Developer</span> with 3+ years of hands-on experience 
                crafting modern web applications and mobile solutions. I specialize in both frontend and backend technologies, 
                creating seamless digital experiences from concept to deployment.
              </p>
              <p>
                My expertise spans across <span className="highlight">React.js, Node.js, PHP, MySQL, Flutter, and Firebase</span>, 
                with a strong foundation in UI/UX design principles. I'm also expanding my skills in Python and constantly 
                exploring emerging technologies.
              </p>
              <p>
                When I'm not coding, you'll find me learning new frameworks, contributing to open-source projects, 
                or helping businesses transform their ideas into powerful digital solutions.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="info-grid">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    rotate: 1,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  className="info-item"
                >
                  <div className="info-header">
                    <motion.span 
                      className="icon"
                      variants={iconVariants}
                      initial="rest"
                      whileHover="hover"
                    >
                      {info.icon}
                    </motion.span>
                    <span className="label">{info.label}:</span>
                  </div>
                  <div className="value">{info.value}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Skills */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="glass-card skills-section"
          >
            <motion.div variants={itemVariants} className="section-header">
              <motion.span 
                className="emoji"
                whileHover={{ scale: 1.3, rotate: 360 }}
                transition={{ type: "spring", stiffness: 200, duration: 0.6 }}
              >
                🚀
              </motion.span>
              <h3>My Skills</h3>
            </motion.div>

            <motion.div variants={itemVariants} className="skills-list">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={skillVariants}
                  custom={index}
                  onMouseEnter={() => setHoveredSkill(index)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className="skill-item"
                  whileHover={{ x: 15, scale: 1.02 }}
                >
                  <div className="skill-header">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <motion.span
                        style={{ fontSize: '1.25rem' }}
                        whileHover={{ 
                          scale: 1.3, 
                          rotate: 20,
                          filter: 'drop-shadow(0 4px 8px rgba(59, 130, 246, 0.4))'
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {skill.icon}
                      </motion.span>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <motion.span
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: index * 0.1 + 0.5, type: "spring", stiffness: 200 }}
                      className="skill-percentage"
                      whileHover={{ 
                        scale: 1.15,
                        rotate: 5,
                        transition: { type: "spring", stiffness: 400 }
                      }}
                    >
                      {skill.level}%
                    </motion.span>
                  </div>
                  
                  <div className="progress-bar">
                    <motion.div
                      variants={progressVariants}
                      initial="hidden"
                      whileInView="visible"
                      custom={skill.level}
                      transition={{
                        duration: 1.5,
                        delay: index * 0.1,
                        ease: "easeOut"
                      }}
                      viewport={{ once: true }}
                      className={`progress-fill ${skill.colorClass}`}
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: `0 0 20px rgba(59, 130, 246, 0.5)`
                      }}
                    />
                  </div>
                  
                  {hoveredSkill === index && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 15 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: 15 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="skill-tooltip"
                    >
                      🎯 {skill.level}% Proficiency
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="skills-footer">
              <p>
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  🎯
                </motion.span>
                {' '}Always learning and growing • Ready for new challenges!{' '}
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                >
                  💪
                </motion.span>
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced Bottom floating elements */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.5,
            type: "spring",
            stiffness: 100
          }}
          viewport={{ once: true }}
          className="freelance-cta"
        >
          <motion.div 
            className="cta-badge"
            whileHover={{ 
              scale: 1.08, 
              y: -6,
              boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.span 
              className="emoji pulse"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, -5, 5, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              💼
            </motion.span>
            <span>Available for Freelance Projects</span>
            <motion.span 
              className="emoji bounce"
              animate={{ 
                y: [0, -8, 0],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              🚀
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;