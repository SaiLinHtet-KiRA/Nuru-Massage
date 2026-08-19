import { Tabs } from "@/app/constant/data";
import Image from "next/image";
import Link from "next/link";
import WindowTabs from "./WindowTabs";

export default function NavBar() {
  return (
    <nav className="fixed w-screen top-0 flex items-center bg-white/10 backdrop-blur-2xl md:px-12 md:py-6 px-4 py-6 justify-between">
      <Link href={""}>
        <Image
          width={1280}
          height={853}
          src="/logo.webp"
          alt="M&M NURU MASSAGE & BAR"
          className="md:w-26 w-22 "
        />
      </Link>
      <WindowTabs />
    </nav>
  );
}
