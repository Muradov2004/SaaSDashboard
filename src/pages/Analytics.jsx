import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';
import ChartContainer from '../components/ChartContainer';

const trafficData = [
  { day: 'Mon', visitors: 4200, sessions: 5100 },
  { day: 'Tue', visitors: 3800, sessions: 4800 },
  { day: 'Wed', visitors: 4900, sessions: 6200 },
  { day: 'Thu', visitors: 5100, sessions: 6800 },
  { day: 'Fri', visitors: 5800, sessions: 7100 },
  { day: 'Sat', visitors: 6200, sessions: 8400 },
  { day: 'Sun', visitors: 5900, sessions: 7900 },
];

const conversionData = [
  { name: 'Landing Page', conversion: 45 },
  { name: 'Pricing', conversion: 22 },
  { name: 'Features', conversion: 18 },
  { name: 'Blog', conversion: 8 },
  { name: 'Contact', conversion: 7 },
];

export default function Analytics() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div className="glass-card p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-surface-900 dark:text-white">Web Analytics</h2>
        <p className="text-sm text-surface-500 mt-1">Detailed breakdown of traffic and conversions</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartContainer title="Weekly Traffic" subtitle="Unique visitors vs Sessions">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trafficData}>
                <defs>
                  <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} />
                <Area type="monotone" dataKey="visitors" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorVisitors)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </ChartContainer>

        <ChartContainer title="Conversion by Page" subtitle="Percentage of total conversions">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={conversionData} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} horizontal={false} />
                <XAxis type="number" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                <YAxis type="category" dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                <Tooltip cursor={{ fill: 'rgba(99, 102, 241, 0.1)' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} />
                <Bar dataKey="conversion" fill="#6366f1" radius={[0, 4, 4, 0]} barSize={24} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartContainer>
      </div>
    </motion.div>
  );
}
