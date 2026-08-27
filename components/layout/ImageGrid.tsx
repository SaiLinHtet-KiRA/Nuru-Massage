import { Images } from "@/constant/data";
import MotionImage from "../ui/MotionImage";
import { imageVariants } from "@/style/FeedIn";

export default function ImageGrid() {
  return (
    <section
      className="relative w-screen md:h-svh h-auto 
      min-h-svh bg-[url(/background.webp)] pt-20 flex  justify-center overflow-hidden pb-2 "
      id="gallery"
    >
      <div className="w-full h-full grid auto-rows-auto md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] grid-cols-2 gap-3  px-[4svw]">
        {Images.map((src, i) => (
          <span
            key={"image-" + i}
            className="relative w-full h-full backdrop-blur-xs overflow-hidden border-2 border-gold rounded-xl justify-self-center"
          >
            <MotionImage
              variants={imageVariants}
              initial="offscreen"
              whileInView="onscreen"
              width={1080}
              height={960}
              src={src}
              alt="M&M Massage room photo"
              className="w-full h-full object-center object-scale-down md:rounded-none "
            />
          </span>
        ))}
      </div>
    </section>
  );
}
