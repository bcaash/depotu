
import { Settings } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function HomePage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-8">
      <div className="flex items-center justify-start space-x-2 mb-8">
        <h1 className="text-2xl font-semibold text-foreground">Vermögensübersicht</h1>
        <Settings className="h-6 w-6 text-primary cursor-pointer" />
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-7">
          <TabsTrigger value="overview">Übersicht</TabsTrigger>
          <TabsTrigger value="performance">Wertentwicklung</TabsTrigger>
          <TabsTrigger value="instruments">Instrumente</TabsTrigger>
          <TabsTrigger value="transactions">Transaktionen</TabsTrigger>
          <TabsTrigger value="payment-plans">Zahlpläne</TabsTrigger>
          <TabsTrigger value="structure">Struktur</TabsTrigger>
          <TabsTrigger value="depot-info">Depot Info</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          {/* Content for Übersicht tab will go here */}
          <p className="p-4 text-center text-muted-foreground">Inhalt für Übersicht.</p>
        </TabsContent>
        <TabsContent value="performance">
          {/* Content for Wertentwicklung tab will go here */}
          <p className="p-4 text-center text-muted-foreground">Inhalt für Wertentwicklung.</p>
        </TabsContent>
        <TabsContent value="instruments">
          {/* Content for Instrumente tab will go here */}
          <p className="p-4 text-center text-muted-foreground">Inhalt für Instrumente.</p>
        </TabsContent>
        <TabsContent value="transactions">
          {/* Content for Transaktionen tab will go here */}
          <p className="p-4 text-center text-muted-foreground">Inhalt für Transaktionen.</p>
        </TabsContent>
        <TabsContent value="payment-plans">
          {/* Content for Zahlpläne tab will go here */}
          <p className="p-4 text-center text-muted-foreground">Inhalt für Zahlpläne.</p>
        </TabsContent>
        <TabsContent value="structure">
          {/* Content for Struktur tab will go here */}
          <p className="p-4 text-center text-muted-foreground">Inhalt für Struktur.</p>
        </TabsContent>
        <TabsContent value="depot-info">
          {/* Content for Depot Info tab will go here */}
          <p className="p-4 text-center text-muted-foreground">Inhalt für Depot Info.</p>
        </TabsContent>
      </Tabs>
    </div>
  );
}
