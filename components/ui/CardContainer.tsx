import { Rooms } from "@/app/interface/Cards";
import React from "react";
import Roomcard from "../Card/RoomCard";

export default function CardContainer({ name, rooms }: Rooms) {
  return (
    <section className="">
      <span>{name}</span>
      <section>
        {rooms.map((room, i) => (
          <Roomcard {...room} key={i} />
        ))}
      </section>
    </section>
  );
}
