import { Contacts } from "@/constant/data";
import Image from "next/image";
import Link from "next/link";

export default function BookNow() {
  return (
    <Link
      href={Contacts[1].href}
      className="flex  items-center gap-1 border-2 border-primary py-1.5 px-4 rounded-full bg-primary opacity-90 mt-2
      hover:-skew-2 hover:scale-105 active:-skew-2 active:scale-105"
    >
      <div className="relative size-10">
        <Image
          width={1080}
          height={960}
          alt=""
          src="/lotus.webp"
          className="absolute w-full h-full inset-0 object-cover"
        />
      </div>
      <p className="text-[5svw] md:text-[3.5svh]  font-tangerine font-bold tracking-wider">
        contact us
      </p>
    </Link>
  );
}
