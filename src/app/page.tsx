
import { Settings } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-8">
      <div className="flex items-center justify-center space-x-2 mb-8">
        <h1 className="text-2xl font-semibold text-foreground">Vermögensübersicht</h1>
        <Settings className="h-6 w-6 text-primary cursor-pointer" />
      </div>
      {/* Page content will go here */}
    </div>
  );
}
