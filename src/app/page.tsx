
'use client';

import { Settings, CalendarDays, Info, ArrowUp } from 'lucide-react';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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

      <Tabs defaultValue="overview" className="w-full">
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
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="basis-information" className="border-b-0">
               <Card>
                <AccordionTrigger className="w-full p-6 hover:no-underline">
                  <CardHeader className="p-0">
                    <CardTitle className="text-[hsl(var(--logo-blue))]">Basis Information</CardTitle>
                  </CardHeader>
                </AccordionTrigger>
                <AccordionContent>
                  <CardContent className="grid md:grid-cols-2 gap-x-8 gap-y-4 pt-0 text-sm">
                    <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2">
                      <span className="font-medium">Depotart:</span>
                      <span className="text-muted-foreground">[Daten hier]</span>

                      <span className="font-medium">Depotbezeichnung:</span>
                      <span className="text-muted-foreground">[Daten hier]</span>

                      <span className="font-medium">Depotinhaber:</span>
                      <span className="text-muted-foreground">[Daten hier]</span>

                      <span className="font-medium">UND/ODER Depot:</span>
                      <span className="text-muted-foreground">[Daten hier]</span>

                      <span className="font-medium">Verfügungsbeschränkung / Pfändung:</span>
                      <span className="text-muted-foreground">[Daten hier]</span>

                      <span className="font-medium">VL Vermerk:</span>
                      <span className="text-muted-foreground">[Daten hier]</span>

                      <span className="font-medium">Wiederanlage:</span>
                      <span className="text-muted-foreground">[Daten hier]</span>

                      <span className="font-medium">Bevollmächtigter:</span>
                      <span className="text-muted-foreground">[Daten hier]</span>
                    </div>
                    <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2">
                      <span className="font-medium">Depot Eröffnungsdatum:</span>
                      <span className="text-muted-foreground">[Daten hier]</span>

                      <span className="font-medium">Depotlöschung vorgemerkt:</span>
                      <span className="text-muted-foreground">[Daten hier]</span>

                      <span className="font-medium">Derivate-Handelserlaubnis:</span>
                      <span className="text-muted-foreground">[Daten hier]</span>

                      <span className="font-medium">Letzte Depotänderung:</span>
                      <span className="text-muted-foreground">[Daten hier]</span>

                      <span className="font-medium">Vollmacht (Ja/Nein):</span>
                      <span className="text-muted-foreground">[Daten hier]</span>

                      <span className="font-medium">Zahlpläne:</span>
                      <span className="text-muted-foreground">[Daten hier]</span>

                      <span className="font-medium">Risikoklasse:</span>
                      <span className="text-muted-foreground">[Daten hier]</span>

                      <span className="font-medium">Letzte Transaktion:</span>
                      <span className="text-muted-foreground">[Daten hier]</span>
                    </div>
                  </CardContent>
                </AccordionContent>
              </Card>
            </AccordionItem>
          </Accordion>
        </TabsContent>
      </Tabs>
    </div>
  );
}
