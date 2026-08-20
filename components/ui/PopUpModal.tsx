"use client";
import { XMark } from "@/svg";
import React from "react";

interface Props {
  Close: () => void;
  children: React.ReactNode;
}

export default function PopUpModal({ Close, children }: Props) {
  return (
    <main className="fixed  w-screen h-[100svh]  backdrop-blur-md flex justify-center items-center z-1000 ">
      <span className="absolute inset-0 cursor-pointer " onClick={Close} />
      <span className="relative z-10">
        {children}
        <span
          className="absolute -top-8 -right-8 p-2 rounded-full bg-red-700 cursor-pointer opacity-80"
          onClick={Close}
        >
          <XMark className="md:size-4 size-3" />
        </span>
      </span>
    </main>
  );
}
