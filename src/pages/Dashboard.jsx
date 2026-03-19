import { motion } from 'framer-motion';
import StatCard from '../components/StatCard';
import RevenueChart from '../components/RevenueChart';
import DistributionChart from '../components/DistributionChart';
import TransactionsTable from '../components/TransactionsTable';
import { statsData } from '../data/data';

export default function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsData.map((stat, index) => (
          <StatCard key={stat.id} stat={stat} index={index} />
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        <div>
          <DistributionChart />
        </div>
      </div>

      {/* Transactions */}
      <TransactionsTable />
    </motion.div>
  );
}
