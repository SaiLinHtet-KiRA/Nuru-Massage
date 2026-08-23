import ContactSection from "@/components/ui/ContactSection";
import HeroSection from "@/components/ui/HeroSection";
import PopUpModal from "@/components/ui/PopUpModal";
import ServiceSection from "@/components/ui/ServiceSection";
import Image from "next/image";
import { Suspense } from "react";

export default function Page() {
  return (
    <main className="h-dvh snap-y snap-mandatory overflow-y-auto overflow-x-hidden">
      <HeroSection />
      <ServiceSection />
      <ContactSection />
      <Suspense>
        <PopUpModal>
          <div className="md:w-[50svh] w-[45svh] relative aspect-[17/25] ">
            <Image
              width={560}
              height={560}
              src={"/menu.webp"}
              alt=""
              className="absolute inset-0 object-cover"
            />
          </div>
        </PopUpModal>
      </Suspense>
    </main>
  );
}
