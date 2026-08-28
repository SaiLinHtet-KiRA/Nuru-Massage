import ImageGrid from "@/components/layout/ImageGrid";
import AboutUs from "@/components/ui/AboutUs";
import ContactSection from "@/components/ui/ContactSection";
import HeroSection from "@/components/ui/HeroSection";
import ServiceSection from "@/components/ui/ServiceSection";

export default function Page() {
  return (
    <main className="h-dvh overflow-y-auto overflow-x-hidden scroll-smooth">
      <HeroSection />
      <ServiceSection />
      <AboutUs />
      <ImageGrid />
      <ContactSection />
    </main>
  );
}
