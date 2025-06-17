
'use client';

import { useState, useEffect } from 'react';
import { Settings, CalendarDays, Info } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Switch } from "@/components/ui/switch";
import { RiskGaugeChart } from '@/components/charts/RiskGaugeChart';


export default function HomePage() {
  const [vollmacht, setVollmacht] = useState(true);

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
          <Accordion type="single" collapsible className="w-full space-y-6" defaultValue="basis-information">
            <AccordionItem value="basis-information" className="border-b-0">
               <Card>
                <AccordionTrigger className="w-full p-6 hover:no-underline">
                  <CardHeader className="p-0">
                    <CardTitle className="text-[hsl(var(--logo-blue))]">Basis Information</CardTitle>
                  </CardHeader>
                </AccordionTrigger>
                <AccordionContent>
                  <CardContent className="grid md:grid-cols-2 gap-x-8 gap-y-3 pt-0 text-sm items-start">
                    <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-3 items-start">
                      <span className="font-medium">Depotart:</span>
                      <span className="text-muted-foreground">Standarddepot</span>

                      <span className="font-medium">Depotbezeichnung:</span>
                      <span className="text-muted-foreground">Musterdepot</span>
                      
                      <span className="font-medium">Privat/Firmendepot:</span>
                      <span className="text-muted-foreground">Privat</span>

                      <span className="font-medium">Depotinhaber:</span>
                      <span className="text-muted-foreground">Max Beispiel</span>

                      <span className="font-medium">Depot Eröffnungsdatum:</span>
                      <span className="text-muted-foreground">01.01.2015</span>

                      <span className="font-medium">Letzte Depotänderung:</span>
                      <span className="text-muted-foreground">01.05.2025</span>
                                            
                      <span className="font-medium">Letzte Transaktion:</span>
                      <span className="text-muted-foreground">Kauf - 02.06.2025</span>
                    </div>
                    <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-3 items-start">
                      <span className="font-medium">UND/ODER Depot:</span>
                      <span className="text-muted-foreground">UND</span>

                      <span className="font-medium">VL Vermerk:</span>
                      <span className="text-muted-foreground">Gesperrt</span>

                      <span className="font-medium">Wiederanlage:</span>
                      <span className="text-muted-foreground">Aktiv</span>
                      
                      <span className="font-medium">Vollmacht (Ja/Nein):</span>
                       <div className="flex items-center space-x-2">
                        <Switch
                          id="vollmacht-switch"
                          checked={vollmacht}
                          onCheckedChange={setVollmacht}
                          aria-label="Vollmacht Ja/Nein"
                          className="data-[state=checked]:bg-[hsl(var(--logo-blue))]"
                        />
                        <Label htmlFor="vollmacht-switch" className="text-muted-foreground">
                          {vollmacht ? "Ja" : "Nein"}
                        </Label>
                      </div>

                      <span className="font-medium">Bevollmächtigter:</span>
                      <span className="text-muted-foreground">Anna Mustermann</span>

                      <span className="font-medium">Verfügungsbeschränkung / Pfändung:</span>
                      <span className="text-muted-foreground">Nein</span>
                      
                      <span className="font-medium">Derivate-Handelserlaubnis:</span>
                      <span className="text-muted-foreground">Aktiv</span>

                      <span className="font-medium">Zahlpläne:</span>
                      <span className="text-muted-foreground">Aktiv</span>

                      <span className="font-medium">Risikoklasse:</span>
                      <div className="-ml-4">
                        <RiskGaugeChart value={25} />
                      </div>
                      
                      <span className="font-medium">Depotlöschung vorgemerkt:</span>
                      <span className="text-muted-foreground">Nein</span>
                    </div>
                  </CardContent>
                </AccordionContent>
              </Card>
            </AccordionItem>

            <AccordionItem value="kosten-co" className="border-b-0">
              <Card>
                <AccordionTrigger className="w-full p-6 hover:no-underline">
                  <CardHeader className="p-0">
                    <CardTitle className="text-[hsl(var(--logo-blue))]">Kosten & Co.</CardTitle>
                  </CardHeader>
                </AccordionTrigger>
                <AccordionContent>
                  <CardContent className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-2 pt-0 text-sm">
                    <span className="font-medium">Bestandsprovisionserstattung (KickBack):</span>
                    <span className="text-muted-foreground">Aktiv</span>

                    <span className="font-medium">Depotkosten:</span>
                    <span className="text-muted-foreground">45 € p.a.</span>

                    <span className="font-medium">DepotRabatt in Prozent:</span>
                    <span className="text-muted-foreground">2%</span>

                    <span className="font-medium">Servicegebühren:</span>
                    <span className="text-muted-foreground">20 € p.a.</span>

                    <span className="font-medium">Servicegebühren gültig von:</span>
                    <span className="text-muted-foreground">01.01.2025</span>

                    <span className="font-medium">Servicegebühren gültig bis:</span>
                    <span className="text-muted-foreground">31.12.2025</span>

                    <span className="font-medium">Tauschrabatt in Prozent:</span>
                    <span className="text-muted-foreground">1,5%</span>

                    <span className="font-medium">Transaktionskosten:</span>
                    <span className="text-muted-foreground">5 € pro Transaktion</span>

                    <span className="font-medium">Sonstige Kosten:</span>
                    <span className="text-muted-foreground">10 € p.a.</span>
                  </CardContent>
                </AccordionContent>
              </Card>
            </AccordionItem>

            <AccordionItem value="steuern-co" className="border-b-0">
              <Card>
                <AccordionTrigger className="w-full p-6 hover:no-underline">
                  <CardHeader className="p-0">
                    <CardTitle className="text-[hsl(var(--logo-blue))]">Steuern & Co.</CardTitle>
                  </CardHeader>
                </AccordionTrigger>
                <AccordionContent>
                  <CardContent className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-2 pt-0 text-sm">
                    <span className="font-medium">FreistellungsAuftrag:</span>
                    <span className="text-muted-foreground">Ja</span>

                    <span className="font-medium">FreistellungsAuftrag von:</span>
                    <span className="text-muted-foreground">01.01.2025</span>

                    <span className="font-medium">FreistellungsAuftrag bis:</span>
                    <span className="text-muted-foreground">31.12.2025</span>

                    <span className="font-medium">FreistellungsBetrag:</span>
                    <span className="text-muted-foreground">801 €</span>

                    <span className="font-medium">FreistellungsBetrag ausgenutzt:</span>
                    <span className="text-muted-foreground">400 €</span>

                    <span className="font-medium">Quellensteuertopf:</span>
                    <span className="text-muted-foreground">50 €</span>

                    <span className="font-medium">Verlustverrechnungstopf:</span>
                    <span className="text-muted-foreground">100 €</span>
                  </CardContent>
                </AccordionContent>
              </Card>
            </AccordionItem>

            <AccordionItem value="sonstiges" className="border-b-0">
              <Card>
                <AccordionTrigger className="w-full p-6 hover:no-underline">
                  <CardHeader className="p-0">
                    <CardTitle className="text-[hsl(var(--logo-blue))]">Sonstiges</CardTitle>
                  </CardHeader>
                </AccordionTrigger>
                <AccordionContent>
                  <CardContent className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-2 pt-0 text-sm">
                    <span className="font-medium">Sperrvermerk:</span>
                    <span className="text-muted-foreground">Nein</span>

                    <span className="font-medium">Erbenvermerk:</span>
                    <span className="text-muted-foreground">Nein</span>

                    <span className="font-medium">Kommunikationsart:</span>
                    <span className="text-muted-foreground">Elektronisch</span>

                    <span className="font-medium">Nachlassdepot:</span>
                    <span className="text-muted-foreground">Nein</span>

                    <span className="font-medium">Online-Zugriff aktiviert:</span>
                    <span className="text-muted-foreground">Ja</span>
                    
                    <span className="font-medium">Wirtschaftlich Berechtigter:</span>
                    <span className="text-muted-foreground">Max Beispiel</span>

                    <span className="font-medium">Zulässige Orderwege:</span>
                    <span className="text-muted-foreground">Online, Telefon</span>

                    <span className="font-medium">Papierloser Dokumentenversand:</span>
                    <span className="text-muted-foreground">Ja</span>
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

