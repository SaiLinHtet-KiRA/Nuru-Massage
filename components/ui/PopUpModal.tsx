"use client";
import { XMark } from "@/svg";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

export default function PopUpModal({ children }: Props) {
  const router = useRouter();

  const searchParams = useSearchParams();

  const query = searchParams.get("showModal");
  console.log(query);
  useEffect(() => {
    if (query == "true") {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [query]);

  const CloseHandler = () => {
    router.replace("?showModal=false");
  };

  if (query == "true")
    return (
      <main className="fixed top-0 left-0 w-screen h-[100svh]  backdrop-blur-md flex justify-center items-center z-10000 ">
        <span
          className="absolute inset-0 cursor-pointer "
          onClick={CloseHandler}
        />
        <span className="relative z-10">
          {children}
          <span
            className="absolute -top-8 -right-8 p-2 rounded-full bg-red-700 cursor-pointer opacity-80"
            onClick={CloseHandler}
          >
            <XMark className="md:size-4 size-3" />
          </span>
        </span>
      </main>
    );
  return null;
}
