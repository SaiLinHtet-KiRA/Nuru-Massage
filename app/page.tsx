import ContactSection from "@/components/ui/ContactSection";
import HeroSection from "@/components/ui/HeroSection";
import PopUpModal from "@/components/ui/PopUpModal";
import ServiceSection from "@/components/ui/ServiceSection";
import Image from "next/image";

export default function Page() {
  return (
    <main className="h-dvh snap-y snap-mandatory overflow-y-auto overflow-x-hidden">
      <HeroSection />
      <ServiceSection />
      <ContactSection />
      <PopUpModal>
        <Image
          width={560}
          height={560}
          src={"/menu.webp"}
          alt=""
          className="md:w-[50svh] w-[45svh]"
        />
      </PopUpModal>
    </main>
  );
}
