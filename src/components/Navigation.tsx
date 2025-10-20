import { Search, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";

export const Navigation = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary-glow">
              <span className="text-lg font-bold text-primary-foreground">
                A11y
              </span>
            </div>
            <span className="hidden text-xl font-bold sm:inline">
              A11y Tools
            </span>
          </div>

          <div className="hidden flex-1 max-w-md md:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>

          <div className="hidden items-center gap-6 lg:flex">
            <a
              href="#products"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Products
            </a>
            <a
              href="#features"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Features
            </a>
            <a
              href="#about"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              About
            </a>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="hidden md:inline-flex">
              Sign In
            </Button>
            <Button variant="accent" size="sm">
              Get Started
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="mt-4 md:hidden">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
