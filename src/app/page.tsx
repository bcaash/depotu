
'use client';

import { Settings, CalendarDays, Info, SlidersHorizontal } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  const depotInfoCategories = [
    "Grunddaten",
    "Steuerliche Merkmale",
    "Zugriffsrechte & Rechtliches",
    "Kosten und Gebühren",
    "Beratung & Zusatzmerkmale",
    "Sonstiges",
    "Steuer"
  ];

  return (
    <div className="container mx-auto py-8 px-4 md:px-8">
      <div className="flex items-center justify-start space-x-2 mb-8">
        <h1 className="text-2xl font-semibold text-foreground">Vermögensübersicht</h1>
        <Settings className="h-6 w-6 text-primary cursor-pointer" />
      </div>

      <div className="mb-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 items-end">
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
        <TabsContent value="depot-info" className="py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {depotInfoCategories.map((category) => (
              <Card key={category} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Details für {category}.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
