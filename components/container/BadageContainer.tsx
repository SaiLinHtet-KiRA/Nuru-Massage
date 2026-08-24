import { HeroBadges } from "@/constant/data";
import Badge from "../Badge/Badge";
import SeeMenu from "../button/SeeMenu";

export default function BadageContainer() {
  return (
    <div className="flex items-center gap-2 py-3  opacity-75 ">
      {HeroBadges.map((info, i) => (
        <Badge {...info} key={"badge-" + i} />
      ))}
      <SeeMenu
        className="text cursor-pointer flex items-center gap-1 opacity-80 default-transition active:opacity-100 active:scale-110 hover:scale-110"
        showSvg={true}
      />
    </div>
  );
}
