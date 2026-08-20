import { HeroBadges } from "@/constant/data";
import Badge from "../Badge/Badge";

export default function BadageContainer() {
  return (
    <div className="flex items-center gap-2 py-3">
      {HeroBadges.map((info, i) => (
        <Badge {...info} key={"badge-" + i} />
      ))}
    </div>
  );
}
