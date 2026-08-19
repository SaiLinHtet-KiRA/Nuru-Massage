import { IconProps } from "@/svg";
import React, { createElement, ReactNode } from "react";

interface Props {
  className?: string;
  text: string;
  link: string;
  svg: (props: IconProps) => ReactNode;
}

export default function Badge({ className, text, svg }: Props) {
  return (
    <div className="flex items-center gap-1 opacity-75">
      <span>{createElement(svg, { className: "icon-sm" })} </span>
      <span className="text-base md:text-lg">{text}</span>
    </div>
  );
}
