
'use client';

import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList } from 'recharts';
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";

interface FreistellungsbetragChartProps {
  totalAmount: number;
  usedAmount: number;
}

export const FreistellungsbetragChart: React.FC<FreistellungsbetragChartProps> = ({ totalAmount, usedAmount }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const availableAmount = totalAmount - usedAmount;
  const chartData = [
    {
      name: 'Freistellung', 
      genutzt: usedAmount,
      verfügbar: availableAmount,
    },
  ];

  const chartConfig = {
    genutzt: {
      label: 'Genutzt',
      color: 'hsl(var(--chart-1))',
    },
    verfügbar: {
      label: 'Verfügbar',
      color: 'hsl(var(--chart-3))', 
    },
  } satisfies ChartConfig;

  if (!isMounted) {
    return <div style={{ width: '100%', height: '60px' }} aria-hidden="true" />;
  }

  return (
    <ChartContainer config={chartConfig} className="w-full h-[60px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={chartData}
          margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
          barSize={30}
        >
          <XAxis type="number" domain={[0, totalAmount]} hide />
          <YAxis type="category" dataKey="name" hide />
          <Tooltip
            cursor={{ fill: 'hsl(var(--muted))' }}
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const utilized = payload.find(p => p.dataKey === 'genutzt')?.value || 0;
                const available = payload.find(p => p.dataKey === 'verfügbar')?.value || 0;
                return (
                  <div className="rounded-lg border bg-background p-2 shadow-sm text-xs">
                    <p className="font-medium mb-1">Freistellungsbetrag</p>
                    <p>Genutzt: {Number(utilized).toLocaleString()} €</p>
                    <p>Verfügbar: {Number(available).toLocaleString()} €</p>
                    <p className="mt-1 pt-1 border-t">Gesamt: {totalAmount.toLocaleString()} €</p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Bar dataKey="genutzt" stackId="a" fill="var(--color-genutzt)" radius={[4, 0, 0, 4]}>
            <LabelList
              dataKey="genutzt"
              position="center"
              className="fill-primary-foreground text-xs font-medium"
              formatter={(value: number) => value > 0 ? `${value.toLocaleString()} €` : ''}
            />
          </Bar>
          <Bar dataKey="verfügbar" stackId="a" fill="var(--color-verfügbar)" radius={[0, 4, 4, 0]}>
             <LabelList
              dataKey="verfügbar"
              position="center"
              className="fill-primary-foreground text-xs font-medium"
              formatter={(value: number) => value > 0 ? `${value.toLocaleString()} €` : ''}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};
