"use client";
import { Tabs } from "@/constant/data";
import { Bars, XMark } from "@/svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [showTabs, setShowTabs] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth >= 640;
  });

  return (
    <nav className="fixed w-screen top-0 flex md:flex-nowrap flex-wrap  items-center bg-white/10 backdrop-blur-2xl md:px-12 md:py-6 px-4 py-6 justify-between">
      <Link href={""}>
        <Image
          width={1280}
          height={853}
          src="/logo.webp"
          alt="M&M NURU MASSAGE & BAR"
          className="md:w-26 w-22 "
        />
      </Link>
      {showTabs ? (
        <span onClick={() => setShowTabs(false)}>
          <XMark className="md:hidden size-10 stroke-primary" />
        </span>
      ) : (
        <span onClick={() => setShowTabs(true)}>
          <Bars className="md:hidden size-10 stroke-primary" />
        </span>
      )}

      {showTabs && (
        <section className=" items-center gap-6 flex flex-wrap ">
          {Tabs.map(({ name, hash }) => (
            <Link
              href={{ hash }}
              key={name}
              className="capitalize font-semibold text-lg w-screen md:w-fit text-center"
            >
              {name}
            </Link>
          ))}
        </section>
      )}
    </nav>
  );
}
