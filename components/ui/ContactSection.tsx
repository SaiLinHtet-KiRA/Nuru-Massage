import { Contacts } from "@/constant/data";
import Image from "next/image";
import BadgeFullColor from "../Badge/BadgeFullColor";

export default function ContactSection() {
  return (
    <section
      className="flex flex-col h-svh items-center   justify-center md:gap-[2%] gap-[3%] backdrop-blur-sm "
      id="contact-us"
    >
      <header className=" flex flex-col items-center justify-end grow md:gap-2 gap-3">
        <h6>Contact Us</h6>
        <div className="flex flex-col items-center opacity-80 font-semibold md:text-lg text-sm">
          <p className="text">STILL THINKING?</p>
          <p className="text">Why not make it one click and contact us?</p>
          <div className="flex flex-wrap items-center justify-center md:gap-5 gap-2 items-center mt-3">
            {Contacts.map((contact, i) => (
              <BadgeFullColor {...contact} key={`contact-${i}`} />
            ))}
          </div>
        </div>
      </header>
      <span className="relative w-[50svh] aspect-[1.033/1] h-auto ">
        <Image
          width={760}
          height={480}
          src="/model-1.png"
          alt=""
          className="absolute w-full h-full top-0 left-0 object-contain"
        />
        <span className="linear-gradient" />
      </span>
    </section>
  );
}
