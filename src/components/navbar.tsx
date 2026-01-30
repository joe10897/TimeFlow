"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "產品特色", href: "#features" },
  { name: "方案價格", href: "#pricing" },
  { name: "關於我們", href: "#about" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border py-3"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-primary-foreground rounded-sm rotate-45" />
          </div>
          <span className="text-xl font-bold tracking-tighter">TimeFlow</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Button variant="default" className="bg-primary text-primary-foreground font-semibold">
            立即開始
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-l-border">
              <div className="flex flex-col gap-6 mt-12">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <Button className="w-full bg-primary text-primary-foreground">
                  立即開始
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
