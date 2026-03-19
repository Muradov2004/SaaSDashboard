import { motion } from 'framer-motion';

function SkeletonBlock({ className = '' }) {
  return <div className={`skeleton rounded-xl ${className}`} />;
}

export default function SkeletonLoader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="p-4 md:p-6 space-y-6"
    >
      {/* Stats skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="glass-card rounded-2xl p-5 space-y-4">
            <div className="flex items-start justify-between">
              <div className="space-y-3 flex-1">
                <SkeletonBlock className="h-4 w-28" />
                <SkeletonBlock className="h-8 w-36" />
                <SkeletonBlock className="h-5 w-32" />
              </div>
              <SkeletonBlock className="h-12 w-12 rounded-2xl shrink-0" />
            </div>
          </div>
        ))}
      </div>

      {/* Charts skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 glass-card rounded-2xl p-5 md:p-6">
          <div className="space-y-3 mb-5">
            <SkeletonBlock className="h-5 w-40" />
            <SkeletonBlock className="h-3 w-56" />
          </div>
          <SkeletonBlock className="h-72 md:h-80 w-full rounded-xl" />
        </div>
        <div className="glass-card rounded-2xl p-5 md:p-6">
          <div className="space-y-3 mb-5">
            <SkeletonBlock className="h-5 w-40" />
            <SkeletonBlock className="h-3 w-48" />
          </div>
          <SkeletonBlock className="h-56 w-56 rounded-full mx-auto" />
          <div className="space-y-3 mt-6">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <SkeletonBlock className="h-3 w-3 rounded-full" />
                  <SkeletonBlock className="h-3 w-28" />
                </div>
                <SkeletonBlock className="h-3 w-8" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Table skeleton */}
      <div className="glass-card rounded-2xl overflow-hidden">
        <div className="px-5 md:px-6 py-4 border-b border-surface-200/60 dark:border-surface-700/40">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <SkeletonBlock className="h-5 w-40" />
              <SkeletonBlock className="h-3 w-32" />
            </div>
            <div className="flex items-center gap-2">
              <SkeletonBlock className="h-8 w-28 rounded-lg" />
              <SkeletonBlock className="h-8 w-48 rounded-lg" />
            </div>
          </div>
        </div>
        <div className="px-5 md:px-6">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-4 py-4 border-b border-surface-100 dark:border-surface-800/50 last:border-0"
            >
              <SkeletonBlock className="h-9 w-9 rounded-xl shrink-0" />
              <div className="flex-1 space-y-2">
                <SkeletonBlock className="h-4 w-36" />
                <SkeletonBlock className="h-3 w-48" />
              </div>
              <SkeletonBlock className="h-4 w-20 hidden sm:block" />
              <SkeletonBlock className="h-4 w-16" />
              <SkeletonBlock className="h-6 w-16 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
