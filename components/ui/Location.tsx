import Map from "./Map";

export default function Location() {
  return (
    <section
      className="w-screen h-svh flex items-center justify-center "
      id="location"
    >
      <div className="relative overflow-hidden  w-[80svw] h-[80svh]">
        <Map />
      </div>
    </section>
  );
}
