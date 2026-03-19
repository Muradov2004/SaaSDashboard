import { motion } from 'framer-motion';
import { User, Bell, Shield, Key } from 'lucide-react';
import { useState } from 'react';

const tabs = [
  { id: 'profile', label: 'My Profile', icon: User },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'security', label: 'Security', icon: Shield },
  { id: 'api', label: 'API Keys', icon: Key },
];

export default function Settings() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.3 }}
      className="space-y-6 max-w-5xl mx-auto"
    >
      <div className="glass-card p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-surface-900 dark:text-white">Account Settings</h2>
        <p className="text-sm text-surface-500 mt-1">Manage your account preferences and configurations</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Settings Sidebar */}
        <div className="w-full md:w-64 space-y-2 p-2 glass-card rounded-2xl h-fit shrink-0">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium ${
                  isActive 
                  ? 'bg-primary-500/10 text-primary-600 dark:text-primary-400' 
                  : 'text-surface-600 dark:text-surface-400 hover:bg-surface-50 dark:hover:bg-surface-800'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-primary-500' : 'text-surface-400'}`} />
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Settings Content */}
        <div className="flex-1 glass-card p-6 rounded-2xl min-h-[400px]">
          {activeTab === 'profile' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              <h3 className="text-lg font-semibold text-surface-900 dark:text-white border-b border-surface-200 dark:border-surface-700 pb-4">Personal Information</h3>
              
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-linear-to-br from-primary-400 to-accent-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-primary-500/20">
                  JD
                </div>
                <div>
                  <button className="px-4 py-2 bg-surface-100 hover:bg-surface-200 dark:bg-surface-800 dark:hover:bg-surface-700 text-surface-900 dark:text-white rounded-xl shadow-sm transition-colors text-sm font-semibold">
                    Change Avatar
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-surface-700 dark:text-surface-300">First Name</label>
                  <input type="text" defaultValue="John" className="w-full px-4 py-2.5 rounded-xl text-sm bg-surface-50 dark:bg-surface-800/50 border border-surface-200 dark:border-surface-700 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 text-surface-900 dark:text-white outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-surface-700 dark:text-surface-300">Last Name</label>
                  <input type="text" defaultValue="Doe" className="w-full px-4 py-2.5 rounded-xl text-sm bg-surface-50 dark:bg-surface-800/50 border border-surface-200 dark:border-surface-700 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 text-surface-900 dark:text-white outline-none transition-all" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-sm font-medium text-surface-700 dark:text-surface-300">Email Address</label>
                  <input type="email" defaultValue="john.doe@nexus.io" className="w-full px-4 py-2.5 rounded-xl text-sm bg-surface-50 dark:bg-surface-800/50 border border-surface-200 dark:border-surface-700 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 text-surface-900 dark:text-white outline-none transition-all" />
                </div>
              </div>

              <div className="flex justify-end pt-4 border-t border-surface-200 dark:border-surface-700">
                <button className="px-6 py-2.5 bg-primary-500 hover:bg-primary-600 text-white rounded-xl shadow-lg shadow-primary-500/25 transition-colors text-sm font-semibold">
                  Save Changes
                </button>
              </div>
            </motion.div>
          )}

          {activeTab !== 'profile' && (
            <div className="h-full flex flex-col items-center justify-center text-surface-500 py-20">
              <Shield className="w-16 h-16 text-surface-300 dark:text-surface-700 mb-4" />
              <h3 className="text-lg font-semibold text-surface-900 dark:text-white mb-2">Coming Soon</h3>
              <p className="text-sm text-center max-w-sm">The {activeTab} section is currently under development. Check back later.</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
