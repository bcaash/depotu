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
