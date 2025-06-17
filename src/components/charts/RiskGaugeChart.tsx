
'use client';

import type { FC } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Customized } from 'recharts';
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";

interface RiskGaugeChartProps {
  value: number; // Value from 0 to 100
}

const segments = [
  { name: 'Low', value: 25, color: '#22c55e' }, // Green
  { name: 'Medium', value: 50, color: '#facc15' }, // Yellow
  { name: 'High', value: 25, color: '#ef4444' }, // Red
];

const chartConfig = {
  value: {
    label: 'Risk Value',
  },
  Low: {
    label: 'Low',
    color: segments[0].color,
  },
  Medium: {
    label: 'Medium',
    color: segments[1].color,
  },
  High: {
    label: 'High',
    color: segments[2].color,
  },
} satisfies ChartConfig;

const Needle: FC<{ cx?: number, cy?: number, radius?: number, angle?: number, needleColor?: string }> = ({ cx, cy, radius, angle, needleColor }) => {
  if (cx === undefined || cy === undefined || radius === undefined || angle === undefined || radius <= 0) {
    return null;
  }

  const length = radius * 0.8;
  const x1 = cx;
  const y1 = cy;
  const angleRad = (angle * Math.PI) / 180;
  const x2 = cx + length * Math.cos(angleRad);
  const y2 = cy + length * Math.sin(angleRad);

  return (
    <>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={needleColor || '#333'} strokeWidth="3" strokeLinecap="round" />
      <circle cx={x1} cy={y1} r="5" fill={needleColor || '#333'} stroke="white" strokeWidth="2" />
    </>
  );
};

const SegmentLabel: FC<any> = (props) => {
  const { cx, cy, midAngle, outerRadius, name } = props;
  const RADIAN = Math.PI / 180;
  const radius = outerRadius * 0.75; 
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  let dy = 0;
  if (name === 'Medium') dy = -5; 
  else if (name === 'Low') dy = 10;
  else if (name === 'High') dy = 10;

  return (
    <text
      x={x}
      y={y + dy}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
      fontWeight="bold"
      fontSize="10px"
      stroke="#555"
      strokeWidth="0.3px"
    >
      {name.toUpperCase()}
    </text>
  );
};


export const RiskGaugeChart: FC<RiskGaugeChartProps> = ({ value }) => {
  const normalizedValue = Math.min(Math.max(value, 0), 100);
  const needleAngle = 180 - (normalizedValue / 100) * 180;

  return (
    <div className="relative w-full max-w-[200px] mx-auto">
      <ChartContainer
        config={chartConfig}
        className="aspect-[2/1] h-auto w-full"
      >
        <ResponsiveContainer width="100%" height="100%">
          <PieChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
            <Pie
              data={segments}
              cx="50%"
              cy="100%" 
              startAngle={180}
              endAngle={0}
              innerRadius="50%"
              outerRadius="100%"
              paddingAngle={2}
              dataKey="value"
              labelLine={false}
              label={<SegmentLabel />}
            >
              {segments.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} stroke={entry.color} />
              ))}
            </Pie>
            <Customized component={
              (chartProps: { width?: number; height?: number; [key: string]: any }) => {
                const { width, height } = chartProps;

                if (typeof width !== 'number' || typeof height !== 'number' || width <= 0 || height <= 0) {
                  return null; 
                }

                const chartCx = width / 2;
                const chartCy = height; 
                const chartRadius = Math.min(width / 2, height); 

                return <Needle cx={chartCx} cy={chartCy} radius={chartRadius} angle={needleAngle} needleColor="hsl(var(--foreground))"/>;
              }
            } />
          </PieChart>
        </ResponsiveContainer>
      </ChartContainer>
      <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 text-center">
        <p className="text-xl font-bold text-foreground">{normalizedValue}%</p>
      </div>
    </div>
  );
};
