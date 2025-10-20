import { Github, Twitter, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t bg-muted/30 px-4 py-12">
      <div className="container mx-auto">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary-glow">
                <span className="text-sm font-bold text-primary-foreground">
                  A11y
                </span>
              </div>
              <span className="text-lg font-bold">A11y Tools</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Making the web accessible, one test at a time.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="#"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  API Reference
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  GDPR
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} A11y Tools. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
