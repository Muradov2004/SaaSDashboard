import { motion } from 'framer-motion';
import {
  DollarSign,
  Users,
  TrendingUp,
  TrendingDown,
  Activity,
} from 'lucide-react';

const iconMap = {
  DollarSign,
  Users,
  TrendingUp,
  Activity,
};

const colorMap = {
  primary: {
    bg: 'bg-primary-500/10 dark:bg-primary-500/15',
    text: 'text-primary-500',
    shadow: 'shadow-primary-500/10',
  },
  accent: {
    bg: 'bg-accent-500/10 dark:bg-accent-500/15',
    text: 'text-accent-500',
    shadow: 'shadow-accent-500/10',
  },
  amber: {
    bg: 'bg-amber-500/10 dark:bg-amber-500/15',
    text: 'text-amber-500',
    shadow: 'shadow-amber-500/10',
  },
  rose: {
    bg: 'bg-rose-500/10 dark:bg-rose-500/15',
    text: 'text-rose-500',
    shadow: 'shadow-rose-500/10',
  },
};

export default function StatCard({ stat, index }) {
  const Icon = iconMap[stat.icon];
  const colors = colorMap[stat.color] || colorMap.primary;
  const isPositive = stat.changeType === 'positive';

  // For churn rate, negative change is actually good (churn went down)
  const isGood = stat.title === 'Churn Rate' ? !isPositive : isPositive;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
      className="glass-card rounded-2xl p-5 cursor-default group will-change-transform hover:-translate-y-0.5 transition-transform duration-200 ease-out"
    >
      <div className="flex items-start justify-between">
        <div className="space-y-3">
          <p className="text-sm font-medium text-surface-500 dark:text-surface-400">
            {stat.title}
          </p>
          <p className="text-2xl md:text-3xl font-bold text-surface-900 dark:text-white tracking-tight">
            {stat.value}
          </p>
          <div className="flex items-center gap-2">
            <span
              className={`
                inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full
                ${
                  isGood
                    ? 'bg-emerald-100 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
                    : 'bg-red-100 dark:bg-red-500/15 text-red-600 dark:text-red-400'
                }
              `}
            >
              {isGood ? (
                <TrendingUp className="w-3 h-3" />
              ) : (
                <TrendingDown className="w-3 h-3" />
              )}
              {stat.change}
            </span>
            <span className="text-xs text-surface-400">{stat.period}</span>
          </div>
        </div>
        <div
          className={`w-12 h-12 rounded-2xl ${colors.bg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
        >
          <Icon className={`w-6 h-6 ${colors.text}`} />
        </div>
      </div>
    </motion.div>
  );
}
