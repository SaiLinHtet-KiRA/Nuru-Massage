import { Rooms } from "@/constant/data";
import Image from "next/image";
import Roomcard from "../Card/RoomCard";
import CardContainer from "./CardContainer";

export default function ServiceSection() {
  return (
    <section
      className="grid md:grid-cols-[50%_60%] md:grid-rows-1 grid-cols-1 grid-rows-[40%_60%] h-screen w-screen items-center gap-0  z-10 relative"
      id="service"
    >
      <section className="flex flex-col font-bold z-10 md:m-0 mb-[2%] self-end md:self-auto justify-self-center md:items-start items-center ">
        <h1 className="title">Our Service</h1>
        <span className="md:text-xl text-md">
          Choose Your Dream Room And Your Dream Girls
        </span>
        <h1
          className="text-sm md:text-sm cursor-pointer font-bold text-background mt-3 opacity-80 bg-primary rounded-lg md:px-2 md:py-0.5 px-3 py-1.5
        hover:opacity-100 active:opacity-100"
        >
          See Menu
        </h1>

        <section className="flex flex-col md:gap-2 gap-3 md:mt-3 mt-6">
          {Rooms.map((room, i) => (
            <CardContainer {...room} key={i} />
          ))}
        </section>
      </section>
      <span className="md:relative absolute md:h-full md:-left-[25%] left-0 md:w-full md:bottom-0 bottom-20  justify-self-center  -z-1 scale-90">
        <Image
          width={760}
          height={480}
          src="/room.png"
          alt=""
          className=" inset-0 object-fit w-full h-full top-0"
        />
        <span className="linear-gradient" />
      </span>
    </section>
  );
}
