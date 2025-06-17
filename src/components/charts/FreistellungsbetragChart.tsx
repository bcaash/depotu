
'use client';

import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList } from 'recharts';
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";

interface FreistellungsbetragChartProps {
  totalAmount: number;
  usedAmount: number;
}

const chartConfig = {
  value: { color: 'hsl(var(--primary))' }, // Single color for all bars
  total: { label: 'Freistellungs Betrag' },
  used: { label: 'FreistellungsBetrag ausgenutzt' },
  available: { label: 'Verfügbarer Anteil' },
} satisfies ChartConfig;

export const FreistellungsbetragChart: React.FC<FreistellungsbetragChartProps> = ({ totalAmount, usedAmount }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const availableAmount = totalAmount - usedAmount;

  const chartData = [
    { name: chartConfig.total.label, value: totalAmount, key: 'total' },
    { name: chartConfig.used.label, value: usedAmount, key: 'used' },
    { name: chartConfig.available.label, value: availableAmount, key: 'available' },
  ].sort((a, b) => b.value - a.value); // Sort by value, descending

  if (!isMounted) {
    // Placeholder to prevent layout shift and accommodate chart height
    return <div style={{ width: '100%', height: '200px' }} aria-hidden="true" />;
  }

  return (
    <ChartContainer config={chartConfig} className="w-full h-[200px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          layout="vertical"
          margin={{ top: 5, right: 60, left: 10, bottom: 5 }} // Increased right margin for labels
        >
          <XAxis type="number" hide />
          <YAxis
            type="category"
            dataKey="name"
            stroke="hsl(var(--foreground))"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            width={170} // Adjust width for longer labels
            interval={0} // Ensure all labels are shown
          />
          <Tooltip
            cursor={{ fill: 'hsl(var(--muted))' }}
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const entry = payload[0];
                const entryName = entry.payload.name; // Full label from chartData
                const entryValue = entry.value;
                return (
                  <div className="rounded-lg border bg-background p-2 shadow-sm text-xs">
                    <p className="font-medium">{entryName}: {Number(entryValue).toLocaleString()} €</p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Bar dataKey="value" layout="vertical" fill="var(--color-value)" barSize={25} radius={[0, 6, 6, 0]}>
            <LabelList
              dataKey="value"
              position="right"
              offset={8}
              className="fill-foreground text-xs font-medium"
              formatter={(value: number) => `${value.toLocaleString()} €`}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};
