import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import './ScrollToTop.scss';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleVisibility = () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    setScrollProgress(scrollPercent);
    
    if (scrollTop > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className={`scroll-to-top ${isVisible ? 'visible' : ''}`}>
      <button onClick={scrollToTop} aria-label="Scroll to top">
        <div className="progress-ring">
          <svg className="progress-circle" viewBox="0 0 100 100">
            <circle
              className="progress-circle-bg"
              cx="50"
              cy="50"
              r="45"
            />
            <circle
              className="progress-circle-fill"
              cx="50"
              cy="50"
              r="45"
              style={{
                strokeDashoffset: `${283 - (scrollProgress * 283) / 100}`
              }}
            />
          </svg>
        </div>
        <div className="button-content">
          <ArrowUp size={24} className="arrow-icon" />
        </div>
        <div className="ripple-effect"></div>
      </button>
    </div>
  );
};

export default ScrollToTop;