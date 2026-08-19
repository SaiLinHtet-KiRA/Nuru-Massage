"use client";
import { Tabs } from "@/constant/data";
import { useHash } from "@/hook/useHash";
import { Bars, XMark } from "@/svg";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [showTabs, setShowTabs] = useState(false);
  const currentHash = useHash();

  useEffect(() => {
    const handleResize = () => {
      setShowTabs(window.innerWidth >= 640);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="fixed w-screen top-0 flex md:flex-nowrap flex-wrap  items-center bg-white/1 backdrop-blur-md md:px-12 md:py-6 px-4 py-6 justify-between z-100">
      <Link href={""}>
        <Image
          width={1280}
          height={853}
          src="/logo.webp"
          alt="M&M NURU MASSAGE & BAR"
          className="md:w-26 w-22 "
        />
      </Link>
      <section>
        {showTabs ? (
          <span onClick={() => setShowTabs(false)}>
            <XMark className="md:hidden icon" />
          </span>
        ) : (
          <span onClick={() => setShowTabs(true)}>
            <Bars className="md:hidden icon" />
          </span>
        )}
      </section>

      {showTabs ? (
        <section className=" items-center gap-6 flex flex-wrap ">
          {Tabs.map(({ name, hash }) => (
            <a
              href={`#${hash}`}
              key={name}
              className="w-screen md:w-fit text-center relative z-1"
            >
              <span className="relative capitalize font-semibold text-lg ">
                {name}
                {currentHash == hash && (
                  <span className="absolute w-full h-0.5  bg-primary left-0 -bottom-1 -z-1 " />
                )}
              </span>
            </a>
          ))}
        </section>
      ) : null}
    </nav>
  );
}
