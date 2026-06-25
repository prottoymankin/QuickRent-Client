'use client';

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

export default function MonthlyEarningsChart({
  monthlyEarnings,
}) {
  return (
    <div className='border rounded-xl p-5 bg-content1'>
      <h2 className='text-xl font-semibold mb-5'>
        Monthly Earnings
      </h2>

      <ResponsiveContainer
        width='100%'
        height={350}
      >
        <LineChart data={monthlyEarnings}>
          <CartesianGrid
            stroke='currentColor'
            strokeOpacity={0.15}
            strokeDasharray='3 3'
          />

          <XAxis
            dataKey='month'
            tick={{ fill: 'currentColor' }}
          />

          <YAxis
            tick={{ fill: 'currentColor' }}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: '#18181b',
              border: '1px solid #27272a',
              borderRadius: '8px',
            }}
          />

          <Line
            type='monotone'
            dataKey='earnings'
            stroke='#22c55e'
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}