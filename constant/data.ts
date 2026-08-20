import { MapPin, Phone, Tiktok } from "@/svg";

export const Tabs = [
  { name: "home", hash: "" },
  { name: "service", hash: "service" },
  { name: "contact us", hash: "contact-us" },
];
export const Rooms = [
  {
    name: "nuru massage room",
    color: "gold",
    rooms: [
      { price: 4000, minute: 60 },
      { price: 5500, minute: 90 },
    ],
  },
  {
    name: "aroma massage room",
    color: "silver",
    rooms: [{ price: 3000, minute: 60 }],
  },
];
export const HeroBadges = [
  {
    text: "Thailand",
    link: "",
    svg: MapPin,
  },
  {
    text: "+66 666 666 66",
    link: "",
    svg: Phone,
  },
  {
    text: "M&M",
    link: "",
    svg: Tiktok,
  },
];
