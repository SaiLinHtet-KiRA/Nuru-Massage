"use client";
import { Contacts, Tabs } from "@/constant/data";
import { useHash } from "@/hook/useHash";
import { Bars, XMark } from "@/svg";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import clsx from "clsx";

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
  if (currentHash == "service") {
    return null;
  }
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
        ease: "linear",
      }}
      className={clsx(
        "fixed w-screen top-0 flex md:flex-nowrap flex-wrap md:gap-0 gap-4 items-center backdrop-blur-xs md:px-12 md:py-6 px-4 py-6 md:justify-between z-100",
        showTabs ? "justify-center" : "justify-between",
      )}
    >
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
              <span className="relative uppercase tracking-wide font-medium text-lg ">
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

      <Link
        href={Contacts[1].href}
        className="px-6 py-1 text border-2 border-primary md:text-primary rounded-full font-bold md:bg-transparent bg-primary text-foreground"
        target="_blank"
      >
        Contact Us
      </Link>
    </motion.nav>
  );
}
