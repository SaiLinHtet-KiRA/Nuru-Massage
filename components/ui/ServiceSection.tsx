"use client";
import { Rooms } from "@/constant/data";
import Image from "next/image";
import CardContainer from "./CardContainer";
import SeeMenu from "../button/SeeMenu";
import { motion } from "motion/react";
import { imageVariants, textVariants } from "@/style/SlideIn";
import MotionImage from "./MotionImage";

export default function ServiceSection() {
  return (
    <section
      className="grid md:grid-cols-[50%_60%] md:grid-rows-1 grid-cols-1 grid-rows-[70%_30%]   h-svh w-screen items-center gap-0  z-10 relative "
      id="service"
    >
      <motion.header
        variants={textVariants}
        initial="offscreen"
        whileInView="onscreen"
        className="!ease-linear flex  flex-col font-bold z-10 md:m-0 mb-[2%] self-center md:self-auto justify-self-center md:items-start items-center"
      >
        <h6>Our Service</h6>
        <h5 className="text">Choose Your Dream Room And Your Dream Girls</h5>
        <SeeMenu className="flex items-center bg-primary rounded-lg md:px-2 md:py-0.5 px-3 py-1.5 mt-3 opacity-80 hover:scale-110 active:scale-100 hover:opacity-100 active:opacity-100 text-background cursor-pointer font-bold text" />

        <div className="flex flex-col md:gap-2 gap-3 md:mt-3 mt-6">
          {Rooms.map((room, i) => (
            <CardContainer {...room} key={i} />
          ))}
        </div>
      </motion.header>
      <span className="md:relative absolute md:h-full md:-left-[25%] left-0 md:w-full bottom-0 w-[60svh]   justify-self-center -z-1 ">
        <MotionImage
          variants={imageVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 0.8 }}
          width={760}
          height={480}
          src="/room.png"
          alt=""
          className=" inset-0 object-fit w-full h-full top-0 !ease-linear"
        />
        <span className="linear-gradient" />
      </span>
    </section>
  );
}
