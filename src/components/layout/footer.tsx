"use client";

import { useEffect, useState } from 'react';

export function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-8 px-4 md:px-8 border-t border-border/50 text-center">
      <div className="container mx-auto">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} CleanSlate. All rights reserved. Built with simplicity.
        </p>
      </div>
    </footer>
  );
}

// Make this a client component because new Date() can cause hydration mismatches.
// By moving it to useEffect, we ensure it only runs on the client after hydration.
// However, for just the year, it's generally safe, but this is best practice.
// For this simple case, we can simplify and make it a server component if preferred,
// but to adhere to strict hydration safety:
export function ClientFooter() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  
  return (
    <footer className="py-8 px-4 md:px-8 border-t border-border/50 text-center">
      <div className="container mx-auto">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} CleanSlate. All rights reserved. Built with simplicity.
        </p>
      </div>
    </footer>
  );
}
