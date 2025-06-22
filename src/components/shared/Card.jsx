import { motion } from 'framer-motion';

const variants = {
  default: 'bg-white',
  glass: 'bg-white/80 backdrop-blur-md',
  gradient: 'bg-gradient-to-br from-white to-gray-50',
  satellite: 'bg-gradient-to-br from-purple-50 to-indigo-50',
};

const Card = ({
  children,
  className = '',
  variant = 'default',
  hover = true,
  animate = true,
  icon,
  title,
  subtitle,
  ...props
}) => {
  const baseClasses = 'rounded-2xl shadow-lg border border-gray-100/50';
  const hoverClasses = hover ? 'hover:shadow-xl hover:-translate-y-1 transition-all duration-300' : '';
  const variantClass = variants[variant];
  const classes = `${baseClasses} ${variantClass} ${hoverClasses} ${className}`;

  const content = (
    <>
      {(icon || title || subtitle) && (
        <div className="p-6 border-b border-gray-100/50">
          {icon && (
            <div className="w-12 h-12 mb-4 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
              {icon}
            </div>
          )}
          {title && <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>}
          {subtitle && <p className="text-gray-600">{subtitle}</p>}
        </div>
      )}
      <div className="p-6">{children}</div>
    </>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={classes}
        {...props}
      >
        {content}
      </motion.div>
    );
  }

  return (
    <div className={classes} {...props}>
      {content}
    </div>
  );
};

export default Card;
