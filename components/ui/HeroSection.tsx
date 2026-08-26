"use client";
import { motion } from "motion/react";
import { imageVariants, textVariants } from "@/style/SlideIn";
import MotionImage from "./MotionImage";
import BookNow from "../button/BookNow";

export default function HeroSection() {
  return (
    <section
      className="h-svh w-screen relative flex md:justify-start  justify-center md:items-center items-start"
      id="home"
    >
      <motion.header
        variants={textVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 0.8 }}
        className=" relative font-bold z-10 md:m-0 md:t-0 mt-[15svh] mb-[2%] flex flex-col gap-1 items-center md:row-start-1 row-start-2 row-end-2 md:pl-[10%] pl-0 z-10
        "
      >
        <span className="linear-gradient" />
        <MotionImage
          variants={imageVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 0.8 }}
          width={1080}
          height={960}
          src="/logo.webp"
          alt=""
          loading="eager"
          className="md:w-[50svh] w-[40svh] top-0 object-right object-cover -z-1 "
        />

        <h6 className=" font-tangerine font-bold text-white">
          Relax | Rejuvenate | Renew
        </h6>
        <BookNow />
      </motion.header>
      <MotionImage
        width={1080}
        height={960}
        src="/background.webp"
        alt=""
        loading="eager"
        className="absolute w-screen h-svh top-0 md:object-cover object-fill object-right -z-1"
      />
      <MotionImage
        variants={imageVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 0.8 }}
        width={1080}
        height={960}
        src="/dmodel.webp"
        alt=""
        loading="eager"
        className="absolute w-full md:h-svh h-auto bottom-0  object-cover -z-1"
      />
    </section>
  );
}
