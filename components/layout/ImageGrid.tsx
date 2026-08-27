import { Images } from "@/constant/data";
import React from "react";
import MotionImage from "../ui/MotionImage";
import { imageVariants } from "@/style/FeedIn";

export default function ImageGrid() {
  return (
    <section
      className="relative w-screen md:h-svh h-auto min-h-svh grid md:grid-rows-2 md:grid-cols-5 grid-cols-1 auto-rows-auto md:gap-0 gap-2 bg-[url(/background.webp)] md:p-0 pt-20"
      id="gallery"
    >
      <MotionImage
        width={1080}
        height={960}
        src="/background.webp"
        alt=""
        loading="eager"
        className="absolute w-screen h-svh top-0 md:object-cover object-fill object-right -z-1"
      />

      {Images.map((src, i) => (
        <MotionImage
          variants={imageVariants}
          key={"image-" + i}
          initial="offscreen"
          whileInView="onscreen"
          width={1080}
          height={960}
          src={src}
          alt="M&M Massage room photo"
          className="w-[90svw] md:h-full aspect-[4/6] object-cover object-top md:rounded-none rounded-xl mx-auto"
        />
      ))}
    </section>
  );
}
