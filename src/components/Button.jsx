import { motion } from 'framer-motion';

const Button = ({ children, onClick, variant = 'primary', ...props }) => {
  const baseClasses = 'px-6 py-3 rounded-lg font-medium transition-all duration-300 text-center';
  
  const variants = {
    primary: 'bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:shadow-lg hover:shadow-purple-500/30',
    secondary: 'border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white',
  };
  
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variants[variant]}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;