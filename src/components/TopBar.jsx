import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Bell,
  Sun,
  Moon,
  Menu,
  X,
  User,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useFilter } from '../context/FilterContext';
import { notifications } from '../data/data';

export default function TopBar({ onMenuClick }) {
  const { darkMode, toggleDarkMode } = useTheme();
  const { searchQuery, setSearchQuery } = useFilter();
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const notifRef = useRef(null);

  const unreadCount = notifications.filter((n) => !n.read).length;

  // Close notifications on outside click
  useEffect(() => {
    function handleClick(e) {
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setShowNotifications(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <header className="sticky top-0 z-30 h-16 flex items-center justify-between px-4 md:px-6 bg-white/70 dark:bg-surface-900/70 backdrop-blur-xl border-b border-surface-200/60 dark:border-surface-700/40 transition-colors duration-300">
      {/* Left: Hamburger + Search */}
      <div className="flex items-center gap-3 flex-1">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-xl text-surface-500 hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div
          className={`
            relative flex items-center transition-all duration-300 rounded-xl
            ${searchFocused ? 'w-72 md:w-96' : 'w-56 md:w-72'}
          `}
        >
          <Search className="absolute left-3 w-4 h-4 text-surface-400" />
          <input
            type="text"
            placeholder="Search transactions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            className="w-full pl-10 pr-4 py-2 rounded-xl text-sm bg-surface-100/80 dark:bg-surface-800/60 border border-transparent focus:border-primary-400/50 dark:focus:border-primary-500/40 focus:bg-white dark:focus:bg-surface-800 text-surface-900 dark:text-surface-100 placeholder-surface-400 outline-none transition-all duration-300"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 p-0.5 rounded-full hover:bg-surface-200 dark:hover:bg-surface-700 transition-colors"
            >
              <X className="w-3.5 h-3.5 text-surface-400" />
            </button>
          )}
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2">
        {/* Dark mode toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={toggleDarkMode}
          className="p-2.5 rounded-xl text-surface-500 hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {darkMode ? (
              <motion.div
                key="sun"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Sun className="w-5 h-5 text-amber-400" />
              </motion.div>
            ) : (
              <motion.div
                key="moon"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Moon className="w-5 h-5 text-primary-500" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Notification bell */}
        <div className="relative" ref={notifRef}>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2.5 rounded-xl text-surface-500 hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors relative"
          >
            <Bell className="w-5 h-5" />
            {unreadCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-4.5 h-4.5 bg-red-500 rounded-full text-[10px] text-white font-bold flex items-center justify-center ring-2 ring-white dark:ring-surface-900">
                {unreadCount}
              </span>
            )}
          </motion.button>

          {/* Notification dropdown */}
          <AnimatePresence>
            {showNotifications && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 w-80 rounded-2xl bg-white dark:bg-surface-900 border border-surface-200/60 dark:border-surface-700/60 shadow-2xl overflow-hidden z-50"
              >
                <div className="px-4 py-3 border-b border-surface-200/60 dark:border-surface-700/40">
                  <h3 className="text-sm font-semibold text-surface-900 dark:text-surface-100">
                    Notifications
                  </h3>
                  <p className="text-xs text-surface-400 mt-0.5">
                    You have {unreadCount} unread messages
                  </p>
                </div>
                <div className="max-h-72 overflow-y-auto">
                  {notifications.map((notif) => (
                    <div
                      key={notif.id}
                      className={`px-4 py-3 hover:bg-surface-50 dark:hover:bg-surface-800/40 transition-colors border-b border-surface-100 dark:border-surface-800 last:border-0 ${
                        !notif.read ? 'bg-primary-50/30 dark:bg-primary-900/10' : ''
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        {!notif.read && (
                          <span className="w-2 h-2 rounded-full bg-primary-500 mt-1.5 shrink-0" />
                        )}
                        <div className={!notif.read ? '' : 'pl-5'}>
                          <p className="text-sm font-medium text-surface-800 dark:text-surface-200">
                            {notif.title}
                          </p>
                          <p className="text-xs text-surface-500 mt-0.5">
                            {notif.message}
                          </p>
                          <p className="text-xs text-surface-400 mt-1">{notif.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-4 py-2.5 border-t border-surface-200/60 dark:border-surface-700/40">
                  <button className="text-xs text-primary-500 hover:text-primary-600 font-medium w-full text-center">
                    View all notifications
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Avatar */}
        <div className="ml-2 flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-linear-to-br from-primary-400 to-accent-500 flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-primary-500/20 cursor-pointer hover:shadow-primary-500/40 transition-shadow">
            <User className="w-5 h-5" />
          </div>
        </div>
      </div>
    </header>
  );
}
