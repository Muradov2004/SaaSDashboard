import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Package } from 'lucide-react';
import { useFilter } from '../context/FilterContext';
import { transactionsData } from '../data/data';

const statusStyles = {
  Success: 'bg-emerald-100 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400',
  Pending: 'bg-amber-100 dark:bg-amber-500/15 text-amber-700 dark:text-amber-400',
  Failed: 'bg-red-100 dark:bg-red-500/15 text-red-700 dark:text-red-400',
};

const avatarColors = [
  'from-primary-400 to-primary-600',
  'from-accent-400 to-accent-600',
  'from-amber-400 to-orange-500',
  'from-rose-400 to-pink-600',
  'from-violet-400 to-purple-600',
  'from-cyan-400 to-blue-500',
];

export default function TransactionsTable() {
  const { searchQuery, statusFilter, setStatusFilter } = useFilter();
  const [localSearch, setLocalSearch] = useState('');

  const combinedSearch = searchQuery || localSearch;

  const filteredTransactions = useMemo(() => {
    return transactionsData.filter((t) => {
      const matchesSearch =
        !combinedSearch ||
        t.customer.toLowerCase().includes(combinedSearch.toLowerCase()) ||
        t.email.toLowerCase().includes(combinedSearch.toLowerCase()) ||
        t.id.toLowerCase().includes(combinedSearch.toLowerCase()) ||
        t.amount.toLowerCase().includes(combinedSearch.toLowerCase());
      const matchesStatus =
        statusFilter === 'All' || t.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [combinedSearch, statusFilter]);

  const statuses = ['All', 'Success', 'Pending', 'Failed'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="glass-card rounded-2xl overflow-hidden"
    >
      {/* Header */}
      <div className="px-5 md:px-6 py-4 border-b border-surface-200/60 dark:border-surface-700/40">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-base font-semibold text-surface-900 dark:text-white">
              Recent Transactions
            </h3>
            <p className="text-sm text-surface-400 mt-0.5">
              {filteredTransactions.length} transaction{filteredTransactions.length !== 1 ? 's' : ''} found
            </p>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            {/* Local Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-surface-400" />
              <input
                type="text"
                placeholder="Filter..."
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                className="pl-8 pr-3 py-1.5 rounded-lg text-xs bg-surface-100/80 dark:bg-surface-800/60 border border-transparent focus:border-primary-400/50 text-surface-900 dark:text-surface-100 placeholder-surface-400 outline-none transition-all w-36"
              />
            </div>
            {/* Status filter pills */}
            <div className="flex items-center gap-1 bg-surface-100/80 dark:bg-surface-800/60 rounded-lg p-0.5">
              {statuses.map((s) => (
                <button
                  key={s}
                  onClick={() => setStatusFilter(s)}
                  className={`
                    px-2.5 py-1 rounded-md text-xs font-medium transition-all duration-200
                    ${
                      statusFilter === s
                        ? 'bg-white dark:bg-surface-700 text-surface-900 dark:text-white shadow-sm'
                        : 'text-surface-500 hover:text-surface-700 dark:hover:text-surface-300'
                    }
                  `}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-surface-200/60 dark:border-surface-700/40">
              <th className="text-left px-5 md:px-6 py-3 text-xs font-semibold text-surface-400 uppercase tracking-wider">
                Customer
              </th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-surface-400 uppercase tracking-wider hidden md:table-cell">
                Transaction ID
              </th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-surface-400 uppercase tracking-wider hidden sm:table-cell">
                Date
              </th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-surface-400 uppercase tracking-wider">
                Amount
              </th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-surface-400 uppercase tracking-wider">
                Plan
              </th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-surface-400 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence mode="popLayout">
              {filteredTransactions.length > 0 ? (
                filteredTransactions.map((tx, index) => (
                  <motion.tr
                    key={tx.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.03 }}
                    className="border-b border-surface-100 dark:border-surface-800/50 last:border-0 hover:bg-surface-50/50 dark:hover:bg-surface-800/20 transition-colors"
                  >
                    <td className="px-5 md:px-6 py-3.5">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-9 h-9 rounded-xl bg-linear-to-br ${
                            avatarColors[index % avatarColors.length]
                          } flex items-center justify-center text-white text-xs font-bold shrink-0`}
                        >
                          {tx.avatar}
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-surface-900 dark:text-white truncate">
                            {tx.customer}
                          </p>
                          <p className="text-xs text-surface-400 truncate">{tx.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3.5 hidden md:table-cell">
                      <span className="text-xs font-mono text-surface-500 dark:text-surface-400 bg-surface-100 dark:bg-surface-800/60 px-2 py-1 rounded-md">
                        {tx.id}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-sm text-surface-500 dark:text-surface-400 hidden sm:table-cell">
                      {new Date(tx.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </td>
                    <td className="px-4 py-3.5 text-sm font-semibold text-surface-900 dark:text-white">
                      {tx.amount}
                    </td>
                    <td className="px-4 py-3.5">
                      <span className="text-xs font-medium text-surface-600 dark:text-surface-300">
                        {tx.plan}
                      </span>
                    </td>
                    <td className="px-4 py-3.5">
                      <span
                        className={`inline-flex px-2.5 py-1 rounded-full text-xs font-semibold ${statusStyles[tx.status]}`}
                      >
                        {tx.status}
                      </span>
                    </td>
                  </motion.tr>
                ))
              ) : (
                <motion.tr
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  key="empty"
                >
                  <td colSpan={6} className="px-6 py-16 text-center">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-16 h-16 rounded-2xl bg-surface-100 dark:bg-surface-800/60 flex items-center justify-center">
                        <Package className="w-8 h-8 text-surface-300 dark:text-surface-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-surface-600 dark:text-surface-300">
                          No transactions found
                        </p>
                        <p className="text-xs text-surface-400 mt-1">
                          Try adjusting your search or filter criteria
                        </p>
                      </div>
                    </div>
                  </td>
                </motion.tr>
              )}
            </AnimatePresence>
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
