import { Room } from "@/app/interface/Cards";
import { Clock } from "@/svg";
import clsx from "clsx";

export default function Roomcard({
  price,
  minute,
  className,
}: Room & { className: string }) {
  return (
    <div
      className={clsx(
        "flex md:border-2 border md:1 md:px-3 px-2 md:py-1.5 py-1 md:gap-3 gap-2 rounded-lg backdrop-blur-lg sm-text items-center text-sm",
        className,
      )}
    >
      <span className="font-extralight tracking-wider flex items-center justify-center gap-1">
        <Clock className="md:size-5.5 size-4" />
        {minute}M
      </span>
      <span className="h-[80%] w-0.5 bg-white/50 rounded-2xl" />
      <span className="font-extralight tracking-wider">{price}฿</span>
    </div>
  );
}
