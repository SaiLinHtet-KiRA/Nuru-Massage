import ContactSection from "@/components/ui/ContactSection";
import HeroSection from "@/components/ui/HeroSection";
import Location from "@/components/ui/Location";
import ServiceSection from "@/components/ui/ServiceSection";

export default function Page() {
  return (
    <main className="h-dvh snap-y snap-mandatory overflow-y-auto overflow-x-hidden scroll-smooth">
      <HeroSection />
      <ServiceSection />
      <Location />
      <ContactSection />
    </main>
  );
}
