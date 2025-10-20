import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { ProductGrid } from "../components/ProductGrid";
import { FeaturedCarousel } from "../components/FeaturedCarousel";
import { StatsChart } from "../components/StatsChart";
import { Newsletter } from "../components/Newsletter";
import { ContentSections } from "../components/ContentSections";
import { Footer } from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <ProductGrid />
        <FeaturedCarousel />
        <StatsChart />
        <ContentSections />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
