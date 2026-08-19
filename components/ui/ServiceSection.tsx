import { Rooms } from "@/constant/data";
import Image from "next/image";
import Roomcard from "../Card/RoomCard";
import CardContainer from "./CardContainer";

export default function ServiceSection() {
  return (
    <section
      className="grid md:grid-cols-[40%_60%] md:grid-rows-1 grid-cols-1 grid-rows-[40%_60%] h-screen w-screen items-center gap-0 px-[5%] z-10 relative"
      id="service"
    >
      <section className="font-bold z-10 md:m-0 mb-[2%] self-end md:self-auto justify-self-center ">
        <h1 className="text-xl md:text-4xl text-primary">Our Service</h1>
        <h1 className="text-xl md:text-4xl text-primary">NURU MASSAGE & BAR</h1>
        <section>
          {Rooms.map((room, i) => (
            <CardContainer {...room} key={i} />
          ))}
        </section>
      </section>
      <span className="md:relative absolute md:h-full md:w-full md:bottom-0 bottom-20 h-[60svh] justify-self-center w-[80svw] -z-1 scale-90">
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
