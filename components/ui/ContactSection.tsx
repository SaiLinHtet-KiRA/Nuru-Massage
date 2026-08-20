import { Contacts, Rooms } from "@/constant/data";
import Image from "next/image";
import CardContainer from "./CardContainer";
import BadgeFullColor from "../Badge/BadgeFullColor";

export default function ContactSection() {
  return (
    <section
      className="flex flex-col max-h-screen items-center   justify-center md:gap-[2%] gap-[3%] backdrop-blur-sm "
      id="contact-us"
    >
      <header className=" flex flex-col items-center justify-end grow md:gap-2 gap-3">
        <h1 className="title">Contact Us</h1>
        <div className="flex flex-col items-center opacity-80 font-semibold md:text-lg text-sm">
          <p>STILL THINKING?</p>
          <p>Why not make it one click and contact us?</p>
          <div className="flex flex-wrap items-center justify-center md:gap-5 gap-2 items-center mt-3">
            {Contacts.map((contact, i) => (
              <BadgeFullColor {...contact} key={`contact-${i}`} />
            ))}
          </div>
        </div>
      </header>
      <span className="relative w-fit h-fit bg ">
        <Image
          width={760}
          height={480}
          src="/model-1.png"
          alt=""
          className="w-[40svh]"
        />
        <span className="linear-gradient" />
      </span>
    </section>
  );
}
