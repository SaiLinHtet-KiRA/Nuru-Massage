import { IconProps } from "@/svg";
import Link from "next/link";
import React, { createElement, ReactNode } from "react";

interface Props {
  text: string;
  href: string;
  svg: (props: IconProps) => ReactNode;
}

export default function BadgeFullColor({ text, href, svg }: Props) {
  return (
    <Link
      href={href}
      target="_blank"
      className=" flex items-center gap-1  bg-primary px-3 py-2 md:rounded-2xl rounded-lg hover:scale-110 active:scale-90  "
    >
      <span>
        {createElement(svg, { className: "icon-sm stroke-background" })}
      </span>
      <span className="text-base md:text-lg text-background ">{text}</span>
    </Link>
  );
}
