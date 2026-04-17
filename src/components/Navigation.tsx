import React, { useState, useEffect } from "react";
import { usePortfolio } from "@/contexts/PortfolioContext";
import { Button } from "@/components/ui/button";
import { Menu, X, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Book a Call", href: "#booking" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const { data, isEditMode } = usePortfolio();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <div className="relative">
              {/* Glow border container */}
              <div className="relative px-4 py-2 rounded-full border border-cyan-500/50 bg-background/80 backdrop-blur-sm shadow-[0_0_15px_rgba(0,217,255,0.3),inset_0_0_15px_rgba(0,217,255,0.1)]">
                <span className="text-lg lg:text-xl font-bold text-cyan-400">
                  Dawn Solomon
                </span>
              </div>
              {/* Orbiting rocket on the border */}
              <Rocket className="absolute w-3 h-3 text-cyan-400 animate-orbit-pill" />
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${data.about.email}`} target="_blank" rel="noopener noreferrer">Hire Me</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="px-4 pt-2">
                <Button
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  asChild
                >
                  <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${data.about.email}`} target="_blank" rel="noopener noreferrer">Hire Me</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Edit mode indicator */}
      {isEditMode && (
        <div className="absolute top-full left-0 right-0 bg-primary text-primary-foreground text-center py-1 text-xs font-medium">
          Edit Mode Active — Click on any text to edit
        </div>
      )}
    </nav>
  );
}
