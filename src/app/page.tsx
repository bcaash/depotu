
'use client';

import { Settings, CalendarDays, Info, ArrowUp, SlidersHorizontal } from 'lucide-react';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PieChart, Pie, Cell } from 'recharts';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

const vermoegensaufbauChartData = [
  { asset: "Asset A", value: 40000, fill: "hsl(var(--chart-1))" },
  { asset: "Asset B", value: 30000, fill: "hsl(var(--chart-2))" },
  { asset: "Asset C", value: 30000, fill: "hsl(var(--chart-3))" },
  { asset: "Asset D", value: 20000, fill: "hsl(var(--chart-4))" },
  { asset: "Asset E", value: 63446, fill: "hsl(var(--chart-5))" },
];

const vermoegensaufbauChartConfig = {
  value: { label: "Value" },
  "Asset A": { label: "Asset A", color: "hsl(var(--chart-1))" },
  "Asset B": { label: "Asset B", color: "hsl(var(--chart-2))" },
  "Asset C": { label: "Asset C", color: "hsl(var(--chart-3))" },
  "Asset D": { label: "Asset D", color: "hsl(var(--chart-4))" },
  "Asset E": { label: "Asset E", color: "hsl(var(--chart-5))" },
} satisfies ChartConfig;


export default function HomePage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-8">
      <div className="flex items-center justify-start space-x-2 mb-8">
        <h1 className="text-2xl font-semibold text-foreground">Vermögensübersicht</h1>
        <Settings className="h-6 w-6 text-primary cursor-pointer" />
      </div>

      <div className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-end">
        <div className="space-y-2">
          <Label htmlFor="depotauswahl">Depotauswahl</Label>
          <Select defaultValue="gesamtbestand">
            <SelectTrigger id="depotauswahl" className="w-full">
              <SelectValue placeholder="Wählen Sie ein Depot" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="gesamtbestand">Gesamtbestand</SelectItem>
              <SelectItem value="depot1">Depot 1</SelectItem>
              <SelectItem value="depot2">Depot 2</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="zeitraum">Zeitraum</Label>
          <div className="relative">
            <Input id="zeitraum" defaultValue="Seit Investmentbeginn" className="pr-10" />
            <CalendarDays className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="depotansicht">Depotansicht</Label>
          <Select defaultValue="basis">
            <SelectTrigger id="depotansicht" className="w-full">
              <SelectValue>
                <div className="flex items-center">
                  <span>Basis</span>
                  <Info className="h-4 w-4 ml-2 text-primary" />
                </div>
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="basis">
                <div className="flex items-center">
                  <span>Basis</span>
                  <Info className="h-4 w-4 ml-2 text-primary" />
                </div>
              </SelectItem>
              <SelectItem value="erweitert">Erweitert</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="depot-info" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          <TabsTrigger value="overview">Übersicht</TabsTrigger>
          <TabsTrigger value="performance">Wertentwicklung</TabsTrigger>
          <TabsTrigger value="instruments">Instrumente</TabsTrigger>
          <TabsTrigger value="transactions">Transaktionen</TabsTrigger>
          <TabsTrigger value="payment-plans">Zahlpläne</TabsTrigger>
          <TabsTrigger value="structure">Struktur</TabsTrigger>
          <TabsTrigger value="depot-info">Depot Info</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <p className="p-4 text-center text-muted-foreground">Inhalt für Übersicht.</p>
        </TabsContent>
        <TabsContent value="performance">
          <p className="p-4 text-center text-muted-foreground">Inhalt für Wertentwicklung.</p>
        </TabsContent>
        <TabsContent value="instruments">
          <p className="p-4 text-center text-muted-foreground">Inhalt für Instrumente.</p>
        </TabsContent>
        <TabsContent value="transactions">
          <p className="p-4 text-center text-muted-foreground">Inhalt für Transaktionen.</p>
        </TabsContent>
        <TabsContent value="payment-plans">
          <p className="p-4 text-center text-muted-foreground">Inhalt für Zahlpläne.</p>
        </TabsContent>
        <TabsContent value="structure">
          <p className="p-4 text-center text-muted-foreground">Inhalt für Struktur.</p>
        </TabsContent>
        <TabsContent value="depot-info" className="py-6 space-y-6">
          <Card className="w-full shadow-lg rounded-lg overflow-hidden">
            <CardHeader className="p-4 border-b">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl font-semibold text-foreground">Vermögensaufbau</CardTitle>
                  <CardDescription>3 Asset Klassen · 36 Holdings · Öffentlich - EUR</CardDescription>
                </div>
                {/* Placeholder for top-right buttons: Teilen, Alle Assetklassen, Seit Kauf */}
                {/* <div className="flex space-x-2"> <Button variant="ghost" size="sm">Teilen</Button> ... </div> */}
              </div>
            </CardHeader>
            <CardContent className="p-4 md:p-6">
              <div className="grid md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-4 lg:col-span-3 flex flex-col items-center justify-center">
                  <div className="w-full h-56 md:h-64 relative">
                    <ChartContainer config={vermoegensaufbauChartConfig} className="w-full h-full min-h-[200px] md:min-h-[250px]">
                      <PieChart>
                        <ChartTooltip
                          cursor={false}
                          content={<ChartTooltipContent hideLabel nameKey="asset" />}
                        />
                        <Pie
                          data={vermoegensaufbauChartData}
                          dataKey="value"
                          nameKey="asset"
                          innerRadius="60%"
                          outerRadius="80%"
                          strokeWidth={2}
                          paddingAngle={1}
                        >
                          {vermoegensaufbauChartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} className="focus:outline-none ring-0" />
                          ))}
                        </Pie>
                      </PieChart>
                    </ChartContainer>
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                      <span className="text-3xl font-bold text-foreground">183.446€</span>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-8 lg:col-span-9 space-y-4 md:space-y-6">
                  <div>
                    <p className="text-sm text-muted-foreground">Portfolio-Wert</p>
                    <div className="flex items-baseline space-x-2">
                      <h2 className="text-4xl font-bold text-foreground tracking-tight">183.446,13€</h2>
                      <span className="text-base text-green-600 font-semibold flex items-center">
                        <ArrowUp className="h-4 w-4 mr-1" />
                        15,34%
                      </span>
                    </div>
                    <div className="mt-2 space-y-0.5">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Wert am 17.12.2017</span>
                        <span className="text-foreground font-medium">0,00€</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Investiert</span>
                        <span className="text-foreground font-medium">133.042,67€</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                    <div>
                      <p className="text-sm text-muted-foreground">Kursgewinn</p>
                      <p className="text-xl font-semibold text-foreground">24.403,46€</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">IZF</p>
                      <p className="text-xl font-semibold text-green-600">20,38%</p>
                    </div>
                    <div className="sm:col-span-1">
                      <p className="text-sm text-muted-foreground">Dividenden Realisiert</p>
                      <p className="text-xl font-semibold text-foreground">6.142,07€</p>
                      <p className="text-xs text-muted-foreground">46.327,03€ real. Gesamt</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="shadow-lg rounded-lg">
              <CardContent className="p-4">
                <Tabs defaultValue="dividenden" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-4">
                    <TabsTrigger value="wert-entwicklung">Wert-Entwicklung</TabsTrigger>
                    <TabsTrigger value="dividenden">Dividenden</TabsTrigger>
                  </TabsList>
                  <TabsContent value="wert-entwicklung">
                    <div className="h-64 bg-muted rounded-md flex items-center justify-center p-4">
                       <Image src="https://placehold.co/400x200.png" alt="Wert-Entwicklung Chart Placeholder" data-ai-hint="finance line chart" width={400} height={200} className="w-full h-auto object-contain rounded-md"/>
                    </div>
                  </TabsContent>
                  <TabsContent value="dividenden">
                    <div className="h-64 bg-muted rounded-md flex items-center justify-center p-4">
                      <Image src="https://placehold.co/400x200.png" alt="Dividenden Chart Placeholder" data-ai-hint="finance bar chart" width={400} height={200} className="w-full h-auto object-contain rounded-md"/>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2 text-center">Umfassendere Auswertungen sind auf dem <Button variant="link" className="p-0 h-auto text-primary text-xs">Dividenden Dashboard</Button> zu finden.</p>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <Card className="shadow-lg rounded-lg">
              <CardHeader className="p-4">
                <CardTitle className="text-lg text-primary">% Performance</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="h-64 bg-muted rounded-md flex items-center justify-center p-4">
                  <Image src="https://placehold.co/400x200.png" alt="Performance Chart Placeholder" data-ai-hint="finance area graph" width={400} height={200} className="w-full h-auto object-contain rounded-md"/>
                </div>
                <Button variant="link" className="p-0 h-auto text-primary text-xs mt-2">VERGLEICHEN</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
