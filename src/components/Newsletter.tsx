import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";
import { Mail, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { toast } from "../hooks/use-toast";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for joining our newsletter.",
      });
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="px-4 py-16">
      <div className="container mx-auto">
        <Card className="overflow-hidden border-2 bg-gradient-to-br from-primary/5 to-accent/5">
          <CardContent className="p-8 sm:p-12">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-glow">
                <Mail className="h-8 w-8 text-primary-foreground" />
              </div>

              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
                Stay Updated
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Get the latest accessibility insights, tool updates, and best
                practices delivered to your inbox. Join 10,000+ developers
                building inclusive web experiences.
              </p>

              {isSubmitted ? (
                <div className="flex items-center justify-center gap-2 rounded-lg bg-primary/10 p-4 text-primary">
                  <CheckCircle2 className="h-5 w-5" />
                  <span className="font-medium">
                    Thank you for subscribing!
                  </span>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-3 sm:flex-row"
                >
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1"
                  />
                  <Button
                    type="submit"
                    variant="accent"
                    size="lg"
                    className="sm:w-auto"
                  >
                    Subscribe
                  </Button>
                </form>
              )}

              <p className="mt-4 text-xs text-muted-foreground">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
