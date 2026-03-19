import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { useTheme } from '../context/ThemeContext';
import { monthlyRevenueData } from '../data/data';
import ChartContainer from './ChartContainer';

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload || !payload.length) return null;

  return (
    <div className="glass-card rounded-xl px-4 py-3 shadow-xl border-surface-200/50! dark:border-surface-700/50!">
      <p className="text-sm font-semibold text-surface-900 dark:text-white mb-2">{label}</p>
      {payload.map((entry, i) => (
        <div key={i} className="flex items-center gap-2 text-xs">
          <span
            className="w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-surface-500 dark:text-surface-400 capitalize">
            {entry.dataKey}:
          </span>
          <span className="font-semibold text-surface-800 dark:text-surface-200">
            ${entry.value?.toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function RevenueChart() {
  const { darkMode } = useTheme();

  const gridColor = darkMode ? 'rgba(148, 163, 184, 0.08)' : 'rgba(148, 163, 184, 0.2)';
  const textColor = darkMode ? '#94a3b8' : '#64748b';

  return (
    <ChartContainer
      title="Revenue Overview"
      subtitle="Monthly revenue, expenses & profit"
    >
      <div className="h-72 md:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={monthlyRevenueData} margin={{ top: 5, right: 5, left: -15, bottom: 0 }}>
            <defs>
              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366f1" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#6366f1" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="profitGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#14b8a6" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#14b8a6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: textColor }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: textColor }}
              tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              iconType="circle"
              iconSize={8}
              wrapperStyle={{ fontSize: '12px', paddingTop: '12px' }}
              formatter={(value) => (
                <span className="text-surface-500 dark:text-surface-400 capitalize">{value}</span>
              )}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#6366f1"
              strokeWidth={2.5}
              fill="url(#revenueGradient)"
              dot={false}
              activeDot={{ r: 6, strokeWidth: 2, stroke: '#fff' }}
            />
            <Area
              type="monotone"
              dataKey="profit"
              stroke="#14b8a6"
              strokeWidth={2.5}
              fill="url(#profitGradient)"
              dot={false}
              activeDot={{ r: 6, strokeWidth: 2, stroke: '#fff' }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </ChartContainer>
  );
}
