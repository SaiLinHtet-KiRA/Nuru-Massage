import ContactSection from "@/components/ui/ContactSection";
import HeroSection from "@/components/ui/HeroSection";
import ServiceSection from "@/components/ui/ServiceSection";

export default function Page() {
  return (
    <main className="h-dvh snap-y snap-mandatory overflow-y-auto">
      <HeroSection />
      <ServiceSection />
      <ContactSection />
    </main>
  );
}
