import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Award, TrendingUp, Shield, Sparkles } from "lucide-react";

export const FeaturedCarousel = () => {
  const features = [
    {
      title: "Industry Leading Accuracy",
      description:
        "Our tools are trusted by Fortune 500 companies for their reliability and precision in accessibility testing.",
      icon: <Award className="h-8 w-8 text-accent" />,
      stat: "99.9% Accurate",
    },
    {
      title: "Continuous Innovation",
      description:
        "Stay ahead with monthly updates featuring the latest WCAG guidelines and testing methodologies.",
      icon: <TrendingUp className="h-8 w-8 text-accent" />,
      stat: "Monthly Updates",
    },
    {
      title: "Enterprise Security",
      description:
        "Bank-level encryption and compliance with SOC 2 Type II standards to keep your data safe.",
      icon: <Shield className="h-8 w-8 text-accent" />,
      stat: "SOC 2 Certified",
    },
    {
      title: "AI-Powered Insights",
      description:
        "Leverage machine learning to get intelligent recommendations and automated fix suggestions.",
      icon: <Sparkles className="h-8 w-8 text-accent" />,
      stat: "Smart Analysis",
    },
  ];

  return (
    <section className="bg-muted/30 px-4 py-16">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Why Choose Our Tools
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Built by accessibility experts, for developers who care about
            inclusive design
          </p>
        </div>

        <Carousel className="mx-auto max-w-5xl">
          <CarouselContent>
            {features.map((feature, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="h-full border-2 transition-all hover:border-primary hover:shadow-[var(--shadow-elegant)]">
                    <CardContent className="flex flex-col items-start gap-4 p-6">
                      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-accent/10">
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-2 text-xl font-semibold">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                      <div className="w-full border-t pt-4">
                        <span className="text-sm font-bold text-primary">
                          {feature.stat}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};
