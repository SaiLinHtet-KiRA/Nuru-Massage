import { Tabs } from "@/app/constant/data";
import Link from "next/link";

export default function WindowTabs() {
  return (
    <section className=" items-center gap-6 md:flex hidden">
      {Tabs.map(({ name, hash }) => (
        <Link
          href={{ hash }}
          key={"window-" + name}
          className="capitalize font-semibold text-lg"
        >
          {name}
        </Link>
      ))}
    </section>
  );
}
