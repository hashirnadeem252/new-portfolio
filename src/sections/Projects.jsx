import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Github, Eye, Code, Star, Globe } from 'lucide-react';
import { projects } from '../constants';
import './Projects.scss';

const Projects = () => {
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // Filter projects based on tags (categories)
  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    return project.tags.some(tag => 
      tag.toLowerCase().includes(filter.toLowerCase())
    );
  });

  // Get unique categories from tags
  const categories = ['all', 'Full Stack', 'Property Portal', 'Admin Panel', 'PHP', 'JavaScript'];

  // Animation variants
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  if (loading) {
    return (
      <section id="projects" className="projects-section">
        <div className="container">
          <div className="projects-loading">
            <div className="loading-spinner"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="projects-title">
            My <span className="highlight">Projects</span>
          </h2>
          <p className="projects-description">
            Here are some of my selected works. Each project was built with a focus on 
            performance, accessibility, and exceptional user experience. From modern web 
            applications to innovative solutions, these projects showcase my technical skills 
            and creative problem-solving abilities.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category === 'all' ? 'All Projects' : category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <motion.div
            className="projects-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`project-card-wrapper ${project.featured ? 'featured' : ''}`}
                variants={cardVariants}
                whileHover={{ 
                  y: -12,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            className="projects-empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="empty-icon">
              <Code size={80} />
            </div>
            <h3 className="empty-title">No Projects Found</h3>
            <p className="empty-description">
              No projects match the selected filter. Try selecting a different category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

// Enhanced Project Card Component
const ProjectCard = ({ project, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`project-card ${project.featured ? 'featured' : ''}`}>
      {/* Project Image */}
      <div className="project-image-container">
        {!imageError && project.image ? (
          <img
            src={`/images/${project.image}`}
            alt={project.title}
            className="project-image"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            style={{ opacity: imageLoaded ? 1 : 0 }}
          />
        ) : (
          <div className="project-image-placeholder">
            <Globe size={48} />
            <span className="placeholder-text">Live Project</span>
          </div>
        )}
        
        {/* Featured Badge */}
        {project.featured && (
          <div className="project-status featured">
            <Star size={14} />
            Featured
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="project-content">
        <h3 className="project-title">
          <a 
            href={project.liveUrl || project.githubUrl || '#'} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            {project.title}
          </a>
        </h3>
        
        <p className="project-description">
          {project.description}
        </p>

        {/* Technology Stack */}
        <div className="project-tech-stack">
          {project.tags?.map((tag, tagIndex) => (
            <motion.span
              key={tagIndex}
              className="tech-tag"
              whileHover={{ 
                scale: 1.05,
                y: -2,
                transition: { duration: 0.2 }
              }}
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Project Links */}
        <div className="project-links">
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link project-link-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Globe size={16} />
              Live Site
            </motion.a>
          )}
          
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link project-link-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={16} />
              Source Code
            </motion.a>
          )}
          
          {!project.liveUrl && !project.githubUrl && (
            <div className="project-link project-link-disabled">
              <Eye size={16} />
              Coming Soon
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;