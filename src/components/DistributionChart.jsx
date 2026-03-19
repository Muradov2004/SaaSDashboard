import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { revenueByCategoryData } from '../data/data';
import ChartContainer from './ChartContainer';

function CustomTooltip({ active, payload }) {
  if (!active || !payload || !payload.length) return null;
  const data = payload[0];
  return (
    <div className="glass-card rounded-xl px-4 py-3 shadow-xl border-surface-200/50! dark:border-surface-700/50!">
      <div className="flex items-center gap-2">
        <span
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: data.payload.color }}
        />
        <span className="text-sm font-semibold text-surface-900 dark:text-white">
          {data.name}
        </span>
      </div>
      <p className="text-xs text-surface-500 mt-1">{data.value}% of total revenue</p>
    </div>
  );
}

export default function DistributionChart() {
  const total = revenueByCategoryData.reduce((sum, d) => sum + d.value, 0);

  return (
    <ChartContainer
      title="Revenue Distribution"
      subtitle="Breakdown by category"
    >
      <div className="flex flex-col items-center">
        <div className="h-56 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={revenueByCategoryData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={3}
                dataKey="value"
                strokeWidth={0}
              >
                {revenueByCategoryData.map((entry, index) => (
                  <Cell key={index} fill={entry.color} className="drop-shadow-sm" />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="w-full mt-3 space-y-2">
          {revenueByCategoryData.map((category, index) => (
            <div
              key={index}
              className="flex items-center justify-between text-sm group hover:bg-surface-50 dark:hover:bg-surface-800/30 rounded-lg px-2 py-1.5 transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <span
                  className="w-3 h-3 rounded-full shrink-0"
                  style={{ backgroundColor: category.color }}
                />
                <span className="text-surface-600 dark:text-surface-300 text-xs md:text-sm">
                  {category.name}
                </span>
              </div>
              <span className="font-semibold text-surface-800 dark:text-surface-200 text-xs md:text-sm">
                {category.value}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </ChartContainer>
  );
}
