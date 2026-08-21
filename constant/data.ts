import { Instagram, MapPin, Phone, RedNote, Tiktok } from "@/svg";

export const Tabs = [
  { name: "home", hash: "home" },
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
    text: "+66 987 197 874",
    href: "tel:+66987197874",
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
    text: "Location",
    href: "https://maps.app.goo.gl/ej9AoXwP7tEUGVTq9?g_st=ic",
    svg: MapPin,
  },
  {
    text: "WhatsApp",
    href: "https://wa.me/message/A7ZGGQ65AFQ4H1",
    svg: Phone,
  },
  {
    text: "Instagram",
    href: "https://www.instagram.com/thainurumassagr?igsh=Z2UyZ2JuYW5oOWJv&igsi=Z2UyZ2JuYW5oOWJv",
    svg: Instagram,
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
