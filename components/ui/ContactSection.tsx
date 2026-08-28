"use client";
import { Contacts } from "@/constant/data";
import BadgeFullColor from "../Badge/BadgeFullColor";
import { textVariants } from "@/style/SlideIn";
import MotionImage from "./MotionImage";
import { motion } from "motion/react";
import { imageVariants } from "@/style/FeedIn";
import Map from "./Map";

export default function ContactSection() {
  return (
    <section
      className="flex flex-col h-svh items-center justify-center md:gap-[2%] gap-[3%] backdrop-blur-sm "
      id="contact-us"
    >
      <motion.header
        variants={textVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 0.8 }}
        className=" flex flex-col items-center justify-end grow md:gap-2 gap-3"
      >
        <h6>Contact Us</h6>
        <div className="flex flex-col items-center opacity-80 font-semibold md:text-lg text-sm">
          <p className="text">STILL THINKING?</p>
          <p className="text">Why not make it one click and contact us?</p>
          <div className="flex flex-wrap items-center justify-center md:gap-5 gap-2 items-center mt-3 ">
            {Contacts.map((contact, i) => (
              <BadgeFullColor {...contact} key={`contact-${i}`} />
            ))}
          </div>
        </div>
      </motion.header>
      <span className="relative w-[50svh] aspect-[1.033/1] h-auto mb-10">
        <Map />
        {/* <span className="linear-gradient" /> */}
      </span>
    </section>
  );
}
