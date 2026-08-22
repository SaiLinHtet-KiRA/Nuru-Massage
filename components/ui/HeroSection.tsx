import Image from "next/image";
import BadageContainer from "../container/BadageContainer";

export default function HeroSection() {
  return (
    <section
      className="grid md:grid-cols-[40%_60%] md:grid-rows-1 grid-cols-1 grid-rows-[60%_40%]  h-svh w-screen items-center gap-0  z-10 relative "
      id="home"
    >
      <header className="font-bold z-10 md:m-0 mb-[2%] self-auto justify-self-center md:row-start-1 row-start-2 row-end-2 md:pl-[10%] pl-0 ">
        <h6>M&M</h6>
        <h6>NURU MASSAGE & BAR</h6>
        <h5 className="text-xl md:text-2xl">Relax | Rejuvenate | Renew </h5>
        <BadageContainer />
      </header>
      <span className=" relative overflow-hidden h-[80%] md:w-full  aspect-square w-screen -z-1  self-end md:row-start-1 row-start-1 row-end-1 ">
        <Image
          width={760}
          height={480}
          src="/model.webp"
          alt=""
          className=" inset-0 object-cover  w-full h-full top-0"
        />
        <span className="linear-gradient" />
      </span>
    </section>
  );
}
