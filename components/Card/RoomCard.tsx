import { Room } from "@/app/interface/Cards";

export default function Roomcard({ price, minute }: Room) {
  return (
    <div className="">
      <span>{price}</span>
      <span>{minute}</span>
    </div>
  );
}
