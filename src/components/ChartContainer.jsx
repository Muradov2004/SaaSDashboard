import { motion } from 'framer-motion';

export default function ChartContainer({ title, subtitle, children, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`glass-card rounded-2xl p-5 md:p-6 ${className}`}
    >
      <div className="mb-5">
        <h3 className="text-base font-semibold text-surface-900 dark:text-white">
          {title}
        </h3>
        {subtitle && (
          <p className="text-sm text-surface-400 mt-0.5">{subtitle}</p>
        )}
      </div>
      {children}
    </motion.div>
  );
}
