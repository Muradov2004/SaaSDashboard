import { motion } from 'framer-motion';
import { Mail, Phone, MoreHorizontal, UserCheck } from 'lucide-react';

const customers = [
  { id: 1, name: 'Ava Mitchell', company: 'Nexus Innovations', email: 'ava@nexus.io', role: 'Admin', status: 'Active', spent: '$12,400' },
  { id: 2, name: 'Liam Carter', company: 'Bright Spark', email: 'liam@brightspark.com', role: 'Member', status: 'Active', spent: '$4,500' },
  { id: 3, name: 'Sophia Patel', company: 'Global Solutions', email: 'sophia@global.co', role: 'Owner', status: 'Inactive', spent: '$1,200' },
  { id: 4, name: 'Jackson Lee', company: 'Skyline Tech', email: 'jack@skyline.dev', role: 'Member', status: 'Active', spent: '$8,900' },
  { id: 5, name: 'Mia Robinson', company: 'Starlight Media', email: 'mia@starlight.net', role: 'Admin', status: 'Active', spent: '$15,600' },
  { id: 6, name: 'Oliver Wright', company: 'Apex Consulting', email: 'oliver@apex.com', role: 'Owner', status: 'Active', spent: '$22,100' },
];

export default function Customers() {
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
          <h2 className="text-xl font-bold text-surface-900 dark:text-white">Customer Directory</h2>
          <p className="text-sm text-surface-500 mt-1">Manage and view your top clients</p>
        </div>
        <button className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-xl shadow-lg shadow-primary-500/25 transition-colors text-sm font-semibold flex items-center gap-2">
          <UserCheck className="w-4 h-4" />
          Add Customer
        </button>
      </div>

      <div className="glass-card rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-surface-50/50 dark:bg-surface-800/20 border-b border-surface-200/60 dark:border-surface-700/40">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-surface-500 uppercase">Customer</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-surface-500 uppercase">Company</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-surface-500 uppercase">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-surface-500 uppercase">Total Spent</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-surface-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-200/50 dark:divide-surface-700/30">
              {customers.map((c) => (
                <tr key={c.id} className="hover:bg-surface-50/50 dark:hover:bg-surface-800/20 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-linear-to-br from-surface-200 to-surface-300 dark:from-surface-700 dark:to-surface-800 flex items-center justify-center text-surface-600 dark:text-surface-300 font-semibold text-sm">
                        {c.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium text-surface-900 dark:text-white">{c.name}</div>
                        <div className="text-xs text-surface-500 flex items-center gap-1 mt-0.5"><Mail className="w-3 h-3" /> {c.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-surface-700 dark:text-surface-300">{c.company}</div>
                    <div className="text-xs text-surface-400 mt-0.5">{c.role}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-semibold ${
                      c.status === 'Active' ? 'bg-emerald-100 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400' : 'bg-surface-200 dark:bg-surface-700/50 text-surface-600 dark:text-surface-400'
                    }`}>
                      {c.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-surface-900 dark:text-white">
                    {c.spent}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 rounded-lg text-surface-400 hover:text-surface-600 hover:bg-surface-100 dark:hover:bg-surface-800 dark:hover:text-surface-200 transition-colors">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}
