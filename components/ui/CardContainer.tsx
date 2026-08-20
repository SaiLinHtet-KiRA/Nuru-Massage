import { Rooms } from "@/app/interface/Cards";
import Roomcard from "../Card/RoomCard";

export default function CardContainer({ name, rooms, color }: Rooms) {
  return (
    <div className="flex flex-wrap gap-2 items-center md:justify-start justify-center">
      <span className="uppercase font-medium text-nowrap text-sm  opacity-90 tracking-wider md:w-fit w-full text-center">
        {name}
      </span>
      <div className="flex gap-2 ">
        {rooms.map((room, i) => (
          <Roomcard
            {...room}
            key={i}
            className={color == "gold" ? "border-gold" : "border-silver/90"}
          />
        ))}
      </div>
    </div>
  );
}
