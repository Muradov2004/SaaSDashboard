import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import ChartContainer from '../components/ChartContainer';
import { monthlyRevenueData } from '../data/data';
import { Download, Wallet } from 'lucide-react';

export default function Revenue() {
  const totalRev = monthlyRevenueData.reduce((acc, curr) => acc + curr.revenue, 0);
  const totalExp = monthlyRevenueData.reduce((acc, curr) => acc + curr.expenses, 0);
  const profit = totalRev - totalExp;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 glass-card p-6 rounded-2xl">
        <div>
          <h2 className="text-xl font-bold text-surface-900 dark:text-white">Revenue Operations</h2>
          <p className="text-sm text-surface-500 mt-1">Track financial performance over time</p>
        </div>
        <button className="px-4 py-2 bg-surface-100 hover:bg-surface-200 dark:bg-surface-800 dark:hover:bg-surface-700 text-surface-900 dark:text-white rounded-xl shadow-sm transition-colors text-sm font-semibold flex items-center gap-2">
          <Download className="w-4 h-4" />
          Export Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6 rounded-2xl border-l-4 border-l-primary-500 flex flex-col justify-center">
          <h3 className="text-sm font-medium text-surface-500 dark:text-surface-400">YTD Revenue</h3>
          <p className="text-3xl font-bold text-surface-900 dark:text-white mt-2">${(totalRev / 1000).toFixed(1)}k</p>
        </div>
        <div className="glass-card p-6 rounded-2xl border-l-4 border-l-rose-500 flex flex-col justify-center">
          <h3 className="text-sm font-medium text-surface-500 dark:text-surface-400">YTD Expenses</h3>
          <p className="text-3xl font-bold text-surface-900 dark:text-white mt-2">${(totalExp / 1000).toFixed(1)}k</p>
        </div>
        <div className="glass-card p-6 rounded-2xl border-l-4 border-l-emerald-500 flex flex-col justify-center bg-emerald-50/50 dark:bg-emerald-900/10">
          <h3 className="text-sm font-medium text-emerald-600 dark:text-emerald-400">Net Profit</h3>
          <p className="text-3xl font-bold text-emerald-700 dark:text-emerald-300 mt-2">${(profit / 1000).toFixed(1)}k</p>
        </div>
      </div>

      <ChartContainer title="Annual Cashflow" subtitle="Gross vs Net margin">
        <div className="h-96 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={monthlyRevenueData} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
              <defs>
                <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} tickFormatter={(v) => `$${v / 1000}k`} />
              <Tooltip 
                cursor={{ fill: 'transparent' }} 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
              />
              <Area type="monotone" dataKey="revenue" stroke="#6366f1" fillOpacity={1} fill="url(#colorRevenue)" />
              <Area type="monotone" dataKey="profit" stroke="#10b981" fillOpacity={1} fill="url(#colorProfit)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </ChartContainer>
    </motion.div>
  );
}
