import { motion } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import {
  LayoutDashboard,
  BarChart3,
  Users,
  DollarSign,
  Settings,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  X,
} from 'lucide-react';
import { navItems } from '../data/data';

const iconMap = {
  LayoutDashboard,
  BarChart3,
  Users,
  DollarSign,
  Settings,
};

// Define MotionLink outside the component to prevent re-remounts on every render
const MotionLink = motion.create(Link);

export default function Sidebar({ collapsed, setCollapsed, mobileOpen, setMobileOpen }) {
  const location = useLocation();
  // Track whether the sidebar has already mounted to prevent re-animating nav items on every route change
  const hasMounted = useRef(false);
  useEffect(() => {
    const timer = setTimeout(() => { hasMounted.current = true; }, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <motion.aside
        initial={false}
        animate={{ width: collapsed ? 80 : 260 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`
          fixed top-0 left-0 h-screen z-50
          bg-white/80 dark:bg-surface-900/90
          backdrop-blur-xl
          border-r border-surface-200/60 dark:border-surface-700/40
          flex flex-col
          transition-colors duration-300
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0
        `}
      >
        {/* Logo */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-surface-200/60 dark:border-surface-700/40">
          <motion.div
            className="flex items-center gap-3 overflow-hidden"
            animate={{ opacity: 1 }}
          >
            <div className="w-9 h-9 rounded-xl bg-linear-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-lg shadow-primary-500/25 shrink-0">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            {!collapsed && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="text-lg font-bold bg-linear-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent whitespace-nowrap"
              >
                Dashboard
              </motion.span>
            )}
          </motion.div>

          {/* Close button for mobile */}
          <button
            onClick={() => setMobileOpen(false)}
            className="lg:hidden p-1.5 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-800 text-surface-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto overflow-x-hidden">
          {navItems.map((item, index) => {
            const Icon = iconMap[item.icon];
            const isActive = location.pathname === item.path;

            return (
              <MotionLink
                to={item.path}
                key={item.label}
                onClick={() => setMobileOpen(false)}
                initial={hasMounted.current ? false : { opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: hasMounted.current ? 0 : index * 0.05 }}
                className={`
                  w-full flex items-center gap-3 px-3 py-2.5 rounded-xl
                  transition-all duration-200 group relative
                  ${isActive
                    ? 'bg-primary-500/10 dark:bg-primary-500/15 text-primary-600 dark:text-primary-400'
                    : 'text-surface-500 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-800/60 hover:text-surface-900 dark:hover:text-surface-100'
                  }
                `}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary-500 rounded-r-full"
                  />
                )}
                <Icon className={`w-5 h-5 shrink-0 ${isActive ? 'text-primary-500' : ''}`} />
                {!collapsed && (
                  <span className="text-sm font-medium whitespace-nowrap">
                    {item.label}
                  </span>
                )}
                {collapsed && (
                  <div className="absolute left-full ml-3 px-2.5 py-1.5 rounded-lg bg-surface-900 dark:bg-surface-700 text-white text-xs font-medium opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap shadow-lg z-50">
                    {item.label}
                  </div>
                )}
              </MotionLink>
            );
          })}
        </nav>

        {/* Collapse toggle */}
        <div className="hidden lg:block p-3 border-t border-surface-200/60 dark:border-surface-700/40">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-800/60 hover:text-surface-600 dark:hover:text-surface-300 transition-all"
          >
            {collapsed ? (
              <ChevronRight className="w-5 h-5" />
            ) : (
              <>
                <ChevronLeft className="w-5 h-5" />
                <span className="text-xs font-medium">Collapse</span>
              </>
            )}
          </button>
        </div>
      </motion.aside>
    </>
  );
}
