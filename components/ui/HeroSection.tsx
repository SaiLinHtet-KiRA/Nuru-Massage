import Image from "next/image";
import BadageContainer from "../container/BadageContainer";

export default function HeroSection() {
  return (
    <section
      className="grid md:grid-cols-[40%_60%] md:grid-rows-1 grid-cols-1 grid-rows-[40%_60%] h-[100svh] w-screen items-center gap-0 md:px-[5%] p-0 z-10 relative "
      id="home"
    >
      <section className="font-bold z-10 md:m-0 mb-[2%] self-end md:self-auto justify-self-center  ">
        <h1 className="text-3xl md:text-4xl text-primary">M&M</h1>
        <h1 className="text-3xl md:text-4xl text-primary">
          NURU MASSAGE & BAR
        </h1>
        <h5 className="text-xl md:text-2xl">Relax | Rejuvenate | Renew </h5>
        <BadageContainer />
      </section>
      <span className="md:relative absolute md:h-[80%] md:w-full  justify-self-center aspect-square w-screen -z-1 scale-100 bottom-0 self-end">
        <Image
          width={760}
          height={480}
          src="/building.png"
          alt=""
          className=" inset-0 object-cover w-full h-full top-0"
        />
        <span className="linear-gradient" />
      </span>
    </section>
  );
}
