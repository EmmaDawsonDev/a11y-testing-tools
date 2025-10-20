import { ProductCard } from "./ProductCard";
import {
  Accessibility,
  Eye,
  Keyboard,
  Code,
  Palette,
  TestTube,
} from "lucide-react";

export const ProductGrid = () => {
  const products = [
    {
      title: "ARIA Validator",
      description:
        "Automatically validate ARIA attributes and ensure proper semantic markup for screen readers.",
      price: "$29/mo",
      rating: 4.8,
      badge: "Popular",
      icon: <Accessibility className="h-6 w-6" />,
    },
    {
      title: "Color Contrast Checker",
      description:
        "Test color combinations against WCAG standards to ensure readability for all users.",
      price: "$19/mo",
      rating: 4.9,
      icon: <Palette className="h-6 w-6" />,
    },
    {
      title: "Screen Reader Simulator",
      description:
        "Experience your site as screen reader users do with our advanced simulation tool.",
      price: "$39/mo",
      rating: 4.7,
      badge: "New",
      icon: <Eye className="h-6 w-6" />,
    },
    {
      title: "Keyboard Navigator",
      description:
        "Test and visualize keyboard navigation flows to ensure full keyboard accessibility.",
      price: "$24/mo",
      rating: 4.6,
      icon: <Keyboard className="h-6 w-6" />,
    },
    {
      title: "HTML Semantic Analyzer",
      description:
        "Analyze your HTML structure and get suggestions for better semantic markup.",
      price: "$34/mo",
      rating: 4.8,
      icon: <Code className="h-6 w-6" />,
    },
    {
      title: "A11y Test Suite",
      description:
        "Comprehensive testing suite with automated reports and actionable recommendations.",
      price: "$49/mo",
      rating: 4.9,
      badge: "Premium",
      icon: <TestTube className="h-6 w-6" />,
    },
  ];

  return (
    <section id="products" className="px-4 py-16">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Our A11y Testing Tools
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Choose from our suite of specialized tools designed to help you
            build accessible web experiences
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};
