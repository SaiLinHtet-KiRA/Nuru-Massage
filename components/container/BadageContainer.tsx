import { HeroBadges } from "@/constant/data";
import Badge from "../Badge/Badge";

export default function BadageContainer() {
  return (
    <section className="flex items-center gap-2 py-3">
      {HeroBadges.map((info, i) => (
        <Badge {...info} key={"badge-" + i} />
      ))}
    </section>
  );
}
