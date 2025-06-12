import Link from 'next/link';
import { SparklesIcon } from 'lucide-react'; // Using Sparkles as a generic "clean/new" icon

export function Header() {
  return (
    <header className="py-6 px-4 md:px-8 border-b border-border/50 sticky top-0 bg-background/80 backdrop-blur-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-xl font-headline font-semibold text-foreground hover:text-primary transition-colors">
          <SparklesIcon className="h-6 w-6 text-primary" />
          <span>CleanSlate</span>
        </Link>
        {/* Navigation links can be added here if needed
        <nav className="space-x-4">
          <Link href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</Link>
          <Link href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</Link>
          <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
        </nav>
        */}
      </div>
    </header>
  );
}
