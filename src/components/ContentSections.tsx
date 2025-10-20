import { Card, CardContent } from "./ui/card";
import { Lightbulb, Users, Rocket } from "lucide-react";

export const ContentSections = () => {
  return (
    <section id="features" className="bg-muted/30 px-4 py-16">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Built for Modern Development
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Our tools integrate seamlessly into your existing workflow, making
            accessibility testing effortless
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <Card className="border-2 transition-all hover:border-primary hover:shadow-[var(--shadow-elegant)]">
            <CardContent className="p-8">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5">
                <Lightbulb className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">
                Intelligent Testing
              </h3>
              <p className="text-muted-foreground">
                Our AI-powered engine learns from millions of web pages to
                provide context-aware accessibility recommendations. Get smarter
                suggestions that understand your specific use cases and design
                patterns.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 transition-all hover:border-primary hover:shadow-[var(--shadow-elegant)]">
            <CardContent className="p-8">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent/5">
                <Users className="h-7 w-7 text-accent" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">
                Collaborative Workflow
              </h3>
              <p className="text-muted-foreground">
                Share reports with your team, assign issues to developers, and
                track progress in real-time. Built-in integrations with Jira,
                GitHub, and Slack keep everyone aligned on accessibility goals.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 transition-all hover:border-primary hover:shadow-[var(--shadow-elegant)]">
            <CardContent className="p-8">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary-glow/20 to-primary-glow/5">
                <Rocket
                  className="h-7 w-7"
                  style={{ color: "hsl(var(--primary-glow))" }}
                />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Test entire websites in seconds with our distributed testing
                infrastructure. Get instant feedback during development with our
                browser extensions and CI/CD integrations.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 rounded-2xl border-2 bg-card p-8 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <h3 className="mb-4 text-2xl font-bold">
                Making the Web Accessible for Everyone
              </h3>
              <p className="mb-4 text-muted-foreground">
                Accessibility isn't just about compliance—it's about creating
                experiences that work for all users, regardless of their
                abilities. Our mission is to make accessibility testing so
                simple and intuitive that it becomes a natural part of every
                development workflow.
              </p>
              <p className="text-muted-foreground">
                We believe that accessible design is better design. By catching
                issues early and providing clear, actionable guidance, we help
                teams build products that are not only compliant but truly
                inclusive.
              </p>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg border bg-background p-6">
                <h4 className="mb-2 font-semibold">Comprehensive Coverage</h4>
                <p className="text-sm text-muted-foreground">
                  Test against WCAG 2.1 Level AA and AAA standards, Section 508,
                  and ADA compliance requirements.
                </p>
              </div>
              <div className="rounded-lg border bg-background p-6">
                <h4 className="mb-2 font-semibold">Actionable Reports</h4>
                <p className="text-sm text-muted-foreground">
                  Every issue comes with clear explanations, code examples, and
                  step-by-step fixing instructions.
                </p>
              </div>
              <div className="rounded-lg border bg-background p-6">
                <h4 className="mb-2 font-semibold">Continuous Monitoring</h4>
                <p className="text-sm text-muted-foreground">
                  Set up automated scans to catch accessibility regressions
                  before they reach production.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
