"use client";
import { motion } from "motion/react";
import { imageVariants, textVariants } from "@/style/SlideIn";
import MotionImage from "./MotionImage";
import BookNow from "../button/BookNow";

export default function AboutUs() {
  return (
    <section
      className="h-svh w-screen relative flex md:justify-start  justify-center md:items-center items-start"
      id="about-us"
    >
      <motion.header
        variants={textVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 1 }}
        className=" relative font-bold z-10 md:m-0 md:t-0 mt-[12svh] mb-[2%] flex flex-col gap-1 items-center md:row-start-1 row-start-2 row-end-2 md:pl-[10%] pl-0 z-10
        "
      >
        <span className="linear-gradient scale-150" />
        <h6 className=" font-tangerine font-black ">About Us</h6>
        <p className="md:w-[30svw] w-[80svw] font-parisienne font-bold md:text-2xl text-[4.5svw] md:leading-relaxed leading-5.5 text-center">
          Welcome to M&M Nuru Massage, a private wellness space dedicated to
          relaxation, comfort, and personalized massage experiences. Our goal is
          to create a calm, welcoming environment where every guest can take a
          break from the stresses of everyday life. We focus on professional
          service, a relaxing atmosphere, and respectful client care. Our team
          is committed to making each visit cofortable and tailored to your
          preferences.
        </p>

        {/* <BadageContainer /> */}
      </motion.header>
      <MotionImage
        width={1080}
        height={960}
        src="/background-2.webp"
        alt=""
        loading="eager"
        className="absolute w-screen h-svh top-0 md:object-cover object-fill object-right -z-1"
      />
      <MotionImage
        variants={imageVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 1 }}
        width={1080}
        height={960}
        src="/model-2.webp"
        alt=""
        loading="eager"
        className="absolute md:w-[50svw] w-full md:right-10 md:-bottom-[5svh] bottom-0 -z-1"
      />
    </section>
  );
}
