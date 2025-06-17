

'use client';

import { useState, useEffect } from 'react';
import { Settings, CalendarDays, Info, Lock } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { RiskGaugeChart } from '@/components/charts/RiskGaugeChart';
import { FreistellungsbetragChart } from '@/components/charts/FreistellungsbetragChart';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CustomToggleSwitch } from '@/components/ui/custom-toggle-switch';
import { cn } from '@/lib/utils';

// Custom SVG Icon for Active Status (Green Check)
const ActiveStatusIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={cn("h-5 w-5", className)}
  >
    <circle cx="12" cy="12" r="11" fill="#22c55e" /> {/* Green circle */}
    <path
      d="M9.5 12.5l2 2 4-4" // Checkmark path
      stroke="#FFFFFF" // White stroke
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

// Custom SVG Icon for Inactive Status (Yellow X)
const InactiveStatusIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={cn("h-5 w-5", className)}
  >
    <circle cx="12" cy="12" r="11" fill="#facc15" /> {/* Yellow circle */}
    <path
      d="M10 10l4 4m0-4l-4 4" // X path
      stroke="#FFFFFF" // White stroke
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export default function HomePage() {
  const [vollmacht, setVollmacht] = useState(true);
  const [undOderDepot, setUndOderDepot] = useState("UND");
  const [wiederanlageActive, setWiederanlageActive] = useState(false); 
  const [derivateActive, setDerivateActive] = useState(true); 
  const [zahlplaeneActive, setZahlplaeneActive] = useState(false); 
  const [kickbackActive, setKickbackActive] = useState(true); 

  const [sperrvermerkActive, setSperrvermerkActive] = useState(false);
  const [erbenvermerkActive, setErbenvermerkActive] = useState(false);
  const [nachlassdepotActive, setNachlassdepotActive] = useState(false);
  const [onlineZugriffActive, setOnlineZugriffActive] = useState(true);
  const [papierloserVersandActive, setPapierloserVersandActive] = useState(true);

  const [verfuegungsbeschraenkungActive, setVerfuegungsbeschraenkungActive] = useState(false);
  const [depotloeschungVorgemerktActive, setDepotloeschungVorgemerktActive] = useState(false);
  const [freistellungsAuftragActive, setFreistellungsAuftragActive] = useState(true);


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
        <TabsContent value="depot-info" className="mt-0 pt-0 pb-6 space-y-6">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-[hsl(var(--logo-blue))]">Basis Information</CardTitle>
            </CardHeader>
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

                  <span className="font-medium">UND/ODER Depot:</span>
                <div>
                  <RadioGroup
                    value={undOderDepot}
                    onValueChange={setUndOderDepot}
                    className="flex items-center space-x-2"
                    aria-label="UND/ODER Depot Auswahl"
                  >
                    <div className="flex items-center space-x-1">
                      <RadioGroupItem value="UND" id="undOderDepot-und" />
                      <Label htmlFor="undOderDepot-und" className="font-normal text-muted-foreground">UND</Label>
                    </div>
                    <div className="flex items-center space-x-1">
                      <RadioGroupItem value="ODER" id="undOderDepot-oder" />
                      <Label htmlFor="undOderDepot-oder" className="font-normal text-muted-foreground">ODER</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <span className="font-medium">VL Vermerk:</span>
                <div className="relative group flex items-center h-5">
                  <Lock className="h-5 w-5 text-muted-foreground flex-shrink-0 transition-all duration-300 ease-in-out group-hover:text-destructive group-hover:shadow-[0_0_10px_hsl(var(--destructive)/0.7)]" />
                  <span 
                    className="absolute left-5 ml-1 top-1/2 -translate-y-1/2 whitespace-nowrap opacity-0 transform -translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out text-sm text-muted-foreground pointer-events-none"
                  >
                    Gesperrt
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-3 items-start">
                <span className="font-medium">Wiederanlage:</span>
                {wiederanlageActive ? <ActiveStatusIcon /> : <InactiveStatusIcon />}
                
                <span className="font-medium">Vollmacht:</span>
                  <div className="flex items-center space-x-2">
                  <CustomToggleSwitch
                    id="vollmacht-switch"
                    checked={vollmacht}
                    onCheckedChange={setVollmacht}
                    ariaLabel="Vollmacht Ja/Nein"
                    activeBackgroundColor="bg-[hsl(var(--logo-blue))]"
                    activeIconColor="text-white"
                    inactiveBackgroundColor="bg-input"
                    inactiveIconColor="text-muted-foreground"
                  />
                  <Label htmlFor="vollmacht-switch" className="text-muted-foreground">
                    {vollmacht ? "Ja" : "Nein"}
                  </Label>
                </div>

                <span className="font-medium">Bevollmächtigter:</span>
                <span className="text-muted-foreground">Anna Mustermann</span>

                <span className="font-medium">Verfügungsbeschränkung / Pfändung:</span>
                <div className="flex items-center space-x-2">
                  <CustomToggleSwitch
                      id="verfuegungsbeschraenkung-switch"
                      checked={verfuegungsbeschraenkungActive}
                      onCheckedChange={setVerfuegungsbeschraenkungActive}
                      ariaLabel="Verfügungsbeschränkung / Pfändung Ja/Nein"
                      activeBackgroundColor="bg-[hsl(var(--logo-blue))]"
                      activeIconColor="text-white"
                      inactiveBackgroundColor="bg-input"
                      inactiveIconColor="text-muted-foreground"
                    />
                    <Label htmlFor="verfuegungsbeschraenkung-switch" className="text-muted-foreground">
                      {verfuegungsbeschraenkungActive ? "Ja" : "Nein"}
                    </Label>
                  </div>
                
                <span className="font-medium">Derivate-Handelserlaubnis:</span>
                {derivateActive ? <ActiveStatusIcon /> : <InactiveStatusIcon />}

                <span className="font-medium">Zahlpläne:</span>
                 {zahlplaeneActive ? <ActiveStatusIcon /> : <InactiveStatusIcon />}

                <span className="font-medium">Risikoklasse:</span>
                <div className="-ml-4">
                  <RiskGaugeChart value={25} />
                </div>
                
                <span className="font-medium">Depotlöschung vorgemerkt:</span>
                <div className="flex items-center space-x-2">
                  <CustomToggleSwitch
                      id="depotloeschung-switch"
                      checked={depotloeschungVorgemerktActive}
                      onCheckedChange={setDepotloeschungVorgemerktActive}
                      ariaLabel="Depotlöschung vorgemerkt Ja/Nein"
                      activeBackgroundColor="bg-[hsl(var(--logo-blue))]"
                      activeIconColor="text-white"
                      inactiveBackgroundColor="bg-input"
                      inactiveIconColor="text-muted-foreground"
                    />
                  <Label htmlFor="depotloeschung-switch" className="text-muted-foreground">
                    {depotloeschungVorgemerktActive ? "Ja" : "Nein"}
                  </Label>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Accordion type="single" collapsible defaultValue="kosten-gebuehren" className="w-full space-y-6">
            <AccordionItem value="kosten-gebuehren" className="border-none">
              <Card className="shadow-md">
                <AccordionTrigger className="w-full p-6 text-left hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  <CardTitle className="text-[hsl(var(--logo-blue))] text-2xl font-semibold leading-none tracking-tight">
                    Kosten &amp; Gebühren
                  </CardTitle>
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0">
                  <div className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-3 items-start text-sm">
                    <span className="font-medium">Depotkosten:</span>
                    <span className="text-muted-foreground">45 € p.a.</span>
                    
                    <span className="font-medium">Servicegebühren:</span>
                    <span className="text-muted-foreground">1.5% p.a.</span>

                    <span className="font-medium">Servicegebühren gültig von/bis:</span>
                    <span className="text-muted-foreground">01.01.2025 / 31.12.2026</span>

                    <span className="font-medium">DepotRabatt in Prozent:</span>
                    <span className="text-muted-foreground">50%</span>

                    <span className="font-medium">Tauschrabatt in Prozent:</span>
                    <span className="text-muted-foreground">100%</span>

                    <span className="font-medium">Bestandsprovisionserstattung (KickBack):</span>
                    {kickbackActive ? <ActiveStatusIcon /> : <InactiveStatusIcon />}

                    <span className="font-medium">Transaktionskosten:</span>
                    <span className="text-muted-foreground">5 € pro Transaktion</span>

                    <span className="font-medium">Sonstige Kosten:</span>
                    <span className="text-muted-foreground">10 € p.a.</span>
                  </div>
                </AccordionContent>
              </Card>
            </AccordionItem>

            <AccordionItem value="steuern-co" className="border-none">
              <Card className="shadow-md">
                <AccordionTrigger className="w-full p-6 text-left hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  <CardTitle className="text-[hsl(var(--logo-blue))] text-2xl font-semibold leading-none tracking-tight">
                    Steuern &amp; Co.
                  </CardTitle>
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0">
                  <div className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-3 items-start text-sm">
                    <span className="font-medium">FreistellungsAuftrag:</span>
                    <div className="flex items-center space-x-2">
                      <CustomToggleSwitch
                          id="freistellungsauftrag-switch"
                          checked={freistellungsAuftragActive}
                          onCheckedChange={setFreistellungsAuftragActive}
                          ariaLabel="FreistellungsAuftrag Ja/Nein"
                          activeBackgroundColor="bg-[hsl(var(--logo-blue))]"
                          activeIconColor="text-white"
                          inactiveBackgroundColor="bg-input"
                          inactiveIconColor="text-muted-foreground"
                        />
                        <Label htmlFor="freistellungsauftrag-switch" className="text-muted-foreground">
                          {freistellungsAuftragActive ? "Ja" : "Nein"}
                        </Label>
                    </div>

                    <span className="font-medium">FreistellungsAuftrag von/bis:</span>
                    <span className="text-muted-foreground">01.01.2025/unbegrenzt</span>
                    
                    <div className="col-span-2 pt-2">
                      <p className="text-sm font-medium mb-1">Status Freistellungsbetrag</p>
                      <FreistellungsbetragChart totalAmount={1000} usedAmount={400} />
                    </div>

                    <span className="font-medium">Quellensteuertopf:</span>
                    <span className="text-muted-foreground">50 €</span>

                    <span className="font-medium">Verlustverrechnungstopf:</span>
                    <span className="text-muted-foreground">100 €</span>
                  </div>
                </AccordionContent>
              </Card>
            </AccordionItem>

            <AccordionItem value="sonstiges" className="border-none">
              <Card className="shadow-md">
                <AccordionTrigger className="w-full p-6 text-left hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  <CardTitle className="text-[hsl(var(--logo-blue))] text-2xl font-semibold leading-none tracking-tight">
                    Sonstiges
                  </CardTitle>
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0">
                  <div className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-3 items-start text-sm">
                    <span className="font-medium">Wirtschaftlich Berechtigter:</span>
                    <span className="text-muted-foreground">Max Beispiel</span>

                    <span className="font-medium">Sperrvermerk:</span>
                      <div className="flex items-center space-x-2">
                        <CustomToggleSwitch
                          id="sperrvermerk-switch"
                          checked={sperrvermerkActive}
                          onCheckedChange={setSperrvermerkActive}
                          ariaLabel="Sperrvermerk Ja/Nein"
                          activeBackgroundColor="bg-[hsl(var(--logo-blue))]"
                          activeIconColor="text-white"
                          inactiveBackgroundColor="bg-input"
                          inactiveIconColor="text-muted-foreground"
                        />
                        <Label htmlFor="sperrvermerk-switch" className="text-muted-foreground">
                          {sperrvermerkActive ? "Ja" : "Nein"}
                        </Label>
                      </div>

                    <span className="font-medium">Erbenvermerk:</span>
                      <div className="flex items-center space-x-2">
                        <CustomToggleSwitch
                          id="erbenvermerk-switch"
                          checked={erbenvermerkActive}
                          onCheckedChange={setErbenvermerkActive}
                          ariaLabel="Erbenvermerk Ja/Nein"
                          activeBackgroundColor="bg-[hsl(var(--logo-blue))]"
                          activeIconColor="text-white"
                          inactiveBackgroundColor="bg-input"
                          inactiveIconColor="text-muted-foreground"
                        />
                        <Label htmlFor="erbenvermerk-switch" className="text-muted-foreground">
                          {erbenvermerkActive ? "Ja" : "Nein"}
                        </Label>
                      </div>
                    
                    <span className="font-medium">Nachlassdepot:</span>
                    <div className="flex items-center space-x-2">
                      <CustomToggleSwitch
                          id="nachlassdepot-switch"
                          checked={nachlassdepotActive}
                          onCheckedChange={setNachlassdepotActive}
                          ariaLabel="Nachlassdepot Ja/Nein"
                          activeBackgroundColor="bg-[hsl(var(--logo-blue))]"
                          activeIconColor="text-white"
                          inactiveBackgroundColor="bg-input"
                          inactiveIconColor="text-muted-foreground"
                        />
                        <Label htmlFor="nachlassdepot-switch" className="text-muted-foreground">
                          {nachlassdepotActive ? "Ja" : "Nein"}
                        </Label>
                      </div>

                    <span className="font-medium">Kommunikationsart:</span>
                    <span className="text-muted-foreground">Elektronisch</span>

                    <span className="font-medium">Online-Zugriff aktiviert:</span>
                      <div className="flex items-center space-x-2">
                        <CustomToggleSwitch
                          id="online-zugriff-switch"
                          checked={onlineZugriffActive}
                          onCheckedChange={setOnlineZugriffActive}
                          ariaLabel="Online-Zugriff Ja/Nein"
                          activeBackgroundColor="bg-[hsl(var(--logo-blue))]"
                          activeIconColor="text-white"
                          inactiveBackgroundColor="bg-input"
                          inactiveIconColor="text-muted-foreground"
                        />
                        <Label htmlFor="online-zugriff-switch" className="text-muted-foreground">
                          {onlineZugriffActive ? "Ja" : "Nein"}
                        </Label>
                      </div>
                    
                    <span className="font-medium">Zulässige Orderwege:</span>
                    <span className="text-muted-foreground">Online, Telefon</span>

                    <span className="font-medium">Papierloser Dokumentenversand:</span>
                    <div className="flex items-center space-x-2">
                      <CustomToggleSwitch
                          id="papierloser-versand-switch"
                          checked={papierloserVersandActive}
                          onCheckedChange={setPapierloserVersandActive}
                          ariaLabel="Papierloser Dokumentenversand Ja/Nein"
                          activeBackgroundColor="bg-[hsl(var(--logo-blue))]"
                          activeIconColor="text-white"
                          inactiveBackgroundColor="bg-input"
                          inactiveIconColor="text-muted-foreground"
                        />
                        <Label htmlFor="papierloser-versand-switch" className="text-muted-foreground">
                          {papierloserVersandActive ? "Ja" : "Nein"}
                        </Label>
                      </div>
                  </div>
                </AccordionContent>
              </Card>
            </AccordionItem>
          </Accordion>
        </TabsContent>
      </Tabs>
    </div>
  );
}



