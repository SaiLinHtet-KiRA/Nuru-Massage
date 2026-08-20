import { IconProps } from "@/svg";
import Link from "next/link";
import React, { createElement, ReactNode } from "react";

interface Props {
  text: string;
  href: string;
  svg: (props: IconProps) => ReactNode;
}

export default function Badge({ text, href, svg }: Props) {
  return (
    <Link href={href} className="flex items-center gap-1 opacity-75">
      <span>{createElement(svg, { className: "icon-sm" })} </span>
      <span className="text-base md:text-lg">{text}</span>
    </Link>
  );
}
