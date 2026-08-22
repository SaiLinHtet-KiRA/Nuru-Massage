"use client";

import { Document } from "@/svg";
import { useRouter } from "next/navigation";

interface props {
  showSvg?: boolean;
  className: string;
}

export default function SeeMenu({ className, showSvg = false }: props) {
  const router = useRouter();

  return (
    <span
      className={className}
      onClick={() => router.replace("?showModal=true")}
    >
      {showSvg && <Document className="icon size-6 fill-primary" />}
      <h1>{showSvg ? "Menu" : "See Menu"}</h1>
    </span>
  );
}
