import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ProductsSection } from "@/components/products-section";
import { GallerySection } from "@/components/gallery-section";
import { HeritageSection } from "@/components/heritage-section";
import { QualitySection } from "@/components/quality-section";
import { QuoteSection } from "@/components/quote-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <ProductsSection />
      <GallerySection />
      <HeritageSection />
      <QualitySection />
      <QuoteSection />
      <CTASection />
      <Footer />
    </main>
  );
}
