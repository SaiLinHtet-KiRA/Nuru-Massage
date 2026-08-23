"use client";
import { Tabs } from "@/constant/data";
import { useHash } from "@/hook/useHash";
import { Bars, XMark } from "@/svg";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function NavBar() {
  const [showTabs, setShowTabs] = useState(false);
  const { hash: currentHash, setHash } = useHash();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setHash(visible.target.id);
        }
      },
      {
        threshold: 0.5,
      },
    );

    document
      .querySelectorAll("section[id]")
      .forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [setHash]);

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
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
        ease: "linear",
      }}
      className="fixed w-screen top-0 flex md:flex-nowrap flex-wrap  items-center backdrop-blur-xs md:px-12 md:py-6 px-4 py-6 justify-between z-100"
    >
      <Link href={""} className="md:w-26 w-22 aspect-[1/0.6] relative  ">
        <Image
          width={1280}
          height={853}
          src="/logo.webp"
          alt="M&M NURU MASSAGE & BAR Logo"
          className="absolute inset-0 object-cover"
        />
      </Link>
      <div>
        {showTabs ? (
          <span onClick={() => setShowTabs(false)}>
            <XMark className="md:hidden icon" />
          </span>
        ) : (
          <span onClick={() => setShowTabs(true)}>
            <Bars className="md:hidden icon" />
          </span>
        )}
      </div>

      {showTabs && (
        <div className="items-center gap-6 flex flex-wrap ">
          {Tabs.map(({ name, hash }) => (
            <a
              href={`#${hash}`}
              key={name}
              className="w-screen md:w-fit text-center relative z-1"
            >
              <span className="relative capitalize font-semibold text-lg ">
                {name}
                {currentHash == hash && (
                  <motion.span
                    initial={{
                      width: 0,
                    }}
                    animate={{
                      width: "100%",
                    }}
                    key={currentHash}
                    className="absolute w-full h-0.5  bg-primary left-0 -bottom-1 -z-1 "
                  />
                )}
              </span>
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
}
