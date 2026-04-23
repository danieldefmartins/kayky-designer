import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/story", label: "Story" },
  { path: "/gallery", label: "Gallery" },
  { path: "/contact", label: "Commission" },
];

export default function Header() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/">
          <span className="text-display text-xl sm:text-2xl tracking-wide cursor-pointer">
            <span className="text-accent">K</span>ayky
            <span className="hidden sm:inline text-white/40 text-sm font-body ml-2 tracking-widest uppercase">Dykyman</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <span
                className={`text-sm font-body tracking-widest uppercase cursor-pointer transition-colors ${
                  location === item.path ? "text-accent" : "text-white/50 hover:text-white"
                }`}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white/70 p-1">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-primary/98 backdrop-blur-lg border-t border-white/5">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <span
                  onClick={() => setOpen(false)}
                  className={`block py-3 text-lg font-body tracking-wider cursor-pointer border-b border-white/5 ${
                    location === item.path ? "text-accent" : "text-white/60"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
