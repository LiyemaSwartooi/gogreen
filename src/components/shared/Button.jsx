import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const variants = {
  primary: 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-700 hover:to-teal-700',
  secondary: 'bg-white text-emerald-600 border-2 border-emerald-600 hover:bg-emerald-50',
  outline: 'bg-transparent text-emerald-600 border-2 border-emerald-600 hover:bg-emerald-50',
  ghost: 'bg-transparent text-emerald-600 hover:bg-emerald-50',
  glass: 'bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20',
  satellite: 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700',
};

const sizes = {
  xs: 'px-3 py-1.5 text-xs',
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
  xl: 'px-10 py-5 text-xl',
};

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  className = '',
  disabled = false,
  loading = false,
  icon,
  onClick,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl';
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {loading && (
        <div className="mr-2">
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      {icon && !loading && <span className="mr-2">{icon}</span>}
      {children}
    </>
  );

  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.02 },
    whileTap: disabled ? {} : { scale: 0.98 },
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.2 },
  };

  if (to) {
    return (
      <motion.div {...motionProps}>
        <Link
          to={to}
          className={`${classes} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          {...props}
        >
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      {...motionProps}
      onClick={disabled ? undefined : onClick}
      className={`${classes} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={disabled}
      {...props}
    >
      {content}
    </motion.button>
  );
};

export default Button;
