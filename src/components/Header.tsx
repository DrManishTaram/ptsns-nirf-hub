import { Menu, X, ExternalLink, GraduationCap, FileText, Download, History, MessageSquare, Home } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About NIRF", href: "#about", icon: GraduationCap },
    { name: "Disciplines", href: "#disciplines", icon: FileText },
    { name: "Data Downloads", href: "#downloads", icon: Download },
    { name: "Archives", href: "#archives", icon: History },
    { name: "Feedback", href: "#feedback", icon: MessageSquare },
  ];

  // Handle scroll spy to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1));
      
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 150;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-white/95 backdrop-blur-xl border-r border-border">
      {/* Logo Area */}
      <div className="p-6 border-b border-border/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl btn-gradient flex items-center justify-center shadow-lg shrink-0">
            <span className="text-white font-display font-bold text-lg">PS</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-foreground font-display text-sm font-bold leading-tight">
              Pandit Shambhunath Shukla
            </h1>
            <p className="text-gradient-purple-pink text-xs font-medium">University</p>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto py-6 px-3">
        <nav className="flex flex-col gap-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.href.substring(1);
            
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 group relative",
                  isActive 
                    ? "text-primary bg-primary/5 shadow-sm" 
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-primary to-purple-500 rounded-r-full" />
                )}
                <Icon className={cn("w-4 h-4 transition-colors", isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground")} />
                {link.name}
              </a>
            );
          })}
        </nav>
      </div>

      {/* Footer Area */}
      <div className="p-4 border-t border-border/50 bg-background/50">
        <a
          href="https://www.nirfindia.org"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-4 py-3 w-full btn-gradient text-white font-semibold text-sm rounded-xl hover:shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <span>NIRF India</span>
          <ExternalLink className="w-4 h-4" />
        </a>
        <p className="text-xs text-muted-foreground text-center mt-4">
          © {new Date().getFullYear()} PTSNS University
        </p>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-lg border-b border-border z-50 px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg btn-gradient flex items-center justify-center shadow-md">
            <span className="text-white font-display font-bold text-sm">PS</span>
          </div>
          <span className="font-display font-semibold text-sm">PTSNS University</span>
        </div>
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* Desktop Sidebar (Fixed) */}
      <aside className="hidden lg:block fixed inset-y-0 left-0 w-72 z-40 bg-background shadow-xl">
        <SidebarContent />
      </aside>

      {/* Mobile Drawer (Overlay) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm animate-fade-in"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Drawer */}
          <div className="absolute top-0 right-0 h-full w-[280px] bg-background shadow-2xl animate-fade-in-left">
            <div className="flex items-center justify-between p-4 border-b border-border/50">
              <span className="font-semibold text-foreground">Menu</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="h-[calc(100%-65px)]">
              <SidebarContent />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
