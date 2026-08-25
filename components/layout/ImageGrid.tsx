import { Images } from "@/constant/data";
import React from "react";
import MotionImage from "../ui/MotionImage";
import { imageVariants } from "@/style/FeedIn";

export default function ImageGrid() {
  return (
    <section
      className="w-screen min-h-svh grid md:auto-rows-auto md:grid-cols-3 grid-cols-1 grid-row-[repeat(auto-fill,50svh)]"
      id="gallery"
    >
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
          className="w-full h-full object-cover"
        />
      ))}
    </section>
  );
}
