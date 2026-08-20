import { MapPin, Phone, RedNote, Tiktok } from "@/svg";

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
    href: "https://maps.app.goo.gl/ej9AoXwP7tEUGVTq9?g_st=ic",
    svg: MapPin,
  },
  {
    text: "+66 666 666 66",
    href: "tel:",
    svg: Phone,
  },
  {
    text: "M&M",
    href: "",

    svg: Tiktok,
  },
];
export const Contacts = [
  {
    text: "Map",
    href: "https://maps.app.goo.gl/ej9AoXwP7tEUGVTq9?g_st=ic",
    svg: MapPin,
  },
  {
    text: "WhatsApp",
    href: "tel:",
    svg: Phone,
  },
  {
    text: "TikTok",
    href: "",
    svg: Tiktok,
  },
  {
    text: "RedNote",
    href: "",
    svg: RedNote,
  },
];
