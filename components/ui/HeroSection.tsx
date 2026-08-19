import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="grid md:grid-cols-[30%_70%] md:grid-rows-1 grid-cols-1 grid-rows-[40%_60%] h-screen w-screen items-center gap-0 px-[5%] z-10 relative">
      <section className="font-bold z-10 md:m-0 mb-[2%] self-end md:self-auto justify-self-center ">
        <h1 className="text-xl md:text-4xl text-primary">
          M&M NURU MASSAGE & BAR{" "}
        </h1>
        <h5 className="text-base md:text-2xl">Relax | Restore | Reconnect</h5>
      </section>
      <span className="md:relative absolute bg-red-400 md:h-full md:w-full md:bottom-0 bottom-20 h-[60svh] justify-self-center w-[80svw]  -z-1">
        <Image
          width={760}
          height={480}
          src="/image-1.jpg"
          alt=""
          className=" inset-0 object-fit w-full h-full top-0"
        />
      </span>
    </section>
  );
}
