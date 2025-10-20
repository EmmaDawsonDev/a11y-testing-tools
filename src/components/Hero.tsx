import { Button } from "./ui/button";
import { ArrowRight, Zap } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--gradient-subtle)] px-4 py-24 sm:py-32">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      <div className="container relative mx-auto text-center">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-background/50 px-4 py-2 text-sm backdrop-blur">
            <Zap className="h-4 w-4 text-accent" />
            <span className="font-medium">Testing Automated A11y Tools</span>
          </div>

          <h1 className="mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-5xl font-bold leading-tight text-transparent sm:text-6xl lg:text-7xl">
            Testing Automated A11y Tools
          </h1>

          <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
            Discover powerful accessibility testing tools to make your web
            applications inclusive for everyone. Built with modern technology
            and designed for developers who care.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" variant="default" className="group">
              Start Testing
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              View Documentation
            </Button>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            <div className="rounded-lg border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-elegant)]">
              <div className="mb-2 text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Testing Tools</div>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-elegant)]">
              <div className="mb-2 text-3xl font-bold text-primary">99.9%</div>
              <div className="text-sm text-muted-foreground">Accuracy Rate</div>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-elegant)]">
              <div className="mb-2 text-3xl font-bold text-primary">10k+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
