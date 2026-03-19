import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import SkeletonLoader from './components/SkeletonLoader';

import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Customers from './pages/Customers';
import Revenue from './pages/Revenue';
import Settings from './pages/Settings';

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  useEffect(() => {
    const handler = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return isDesktop;
}

export default function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const isDesktop = useIsDesktop();
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Close mobile menu on desktop resize
  useEffect(() => {
    if (isDesktop) setMobileMenuOpen(false);
  }, [isDesktop]);

  const sidebarWidth = sidebarCollapsed ? 80 : 260;

  return (
    <div className="min-h-screen bg-linear-to-br from-surface-50 via-surface-100 to-primary-50/30 dark:from-surface-950 dark:via-surface-900 dark:to-surface-950 transition-colors duration-500">
      {/* Sidebar */}
      <Sidebar
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
        mobileOpen={mobileMenuOpen}
        setMobileOpen={setMobileMenuOpen}
      />

      {/* Main content area */}
      <div
        className="min-h-screen transition-all duration-300"
        style={{ marginLeft: isDesktop ? sidebarWidth : 0 }}
      >
        <TopBar onMenuClick={() => setMobileMenuOpen(true)} />

        <AnimatePresence mode="wait">
          {loading ? (
            <SkeletonLoader key="skeleton" />
          ) : (
            <main key={location.pathname} className="p-4 md:p-6">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/revenue" element={<Revenue />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </main>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
