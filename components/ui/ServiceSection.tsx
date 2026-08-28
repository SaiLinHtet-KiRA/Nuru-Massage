"use client";

import { imageVariants } from "@/style/SlideIn";
import MotionImage from "./MotionImage";

export default function ServiceSection() {
  return (
    <section className="w-screen h-svh relative " id="service">
      <MotionImage
        variants={imageVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 1 }}
        width={760}
        height={480}
        src="/menu.webp"
        alt="M&M Nuru Maasge Menu"
        className="absolute inset-0 w-full h-full md:w-[65svh] md:h-auto m-auto"
      />
    </section>
  );
}
