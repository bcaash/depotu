
import Link from 'next/link';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User } from 'lucide-react';

export function Header() {
  return (
    <header className="py-6 px-4 md:px-8 border-b border-border/50 sticky top-0 bg-background/80 backdrop-blur-md z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <svg
            height="32"
            viewBox="0 0 286 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="DIVA Logo"
            className="h-8 w-auto"
          >
            <style>
              {`
                .diva-font {
                  font-family: Inter, Arial, sans-serif;
                  font-weight: bold;
                  font-size: 70px;
                  fill: hsl(var(--logo-blue));
                }
                .diva-dot {
                  fill: hsl(var(--logo-red));
                }
              `}
            </style>
            <text x="10" y="62" className="diva-font">D</text>
            <text x="70" y="62" className="diva-font">I</text>
            <text x="95" y="62" className="diva-font">V</text>
            <text x="155" y="62" className="diva-font">A</text>
            <circle cx="183" cy="40" r="9" className="diva-dot"/>
          </svg>
        </Link>

        {/* Elements moved to page.tsx */}

        <Avatar>
          <AvatarFallback>
            <User className="h-5 w-5" />
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
