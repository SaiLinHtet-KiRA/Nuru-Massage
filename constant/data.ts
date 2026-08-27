import { Instagram, MapPin, Phone, RedNote, Tiktok, Youtube } from "@/svg";

export const Tabs = [
  { name: "home", hash: "home" },
  { name: "service", hash: "service" },
  { name: "about us", hash: "about-us" },
  { name: "gallery", hash: "gallery" },
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
    text: "Bangkok,Thailand",
    href: "https://maps.app.goo.gl/aqbEedZWhrTk4jSn6",
    svg: MapPin,
  },
];
export const Contacts = [
  {
    text: "Location",
    href: "https://maps.app.goo.gl/aqbEedZWhrTk4jSn6",
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
    text: "YouTube",
    href: "https://www.youtube.com/@MMNuruMassageandBar",
    svg: Youtube,
  },
  {
    text: "TikTok",
    href: "https://www.tiktok.com/@mnm.nurumassagenbar?_r=1&_t=ZS-998xExOfn1x",
    svg: Tiktok,
  },

  {
    text: "RedNote",
    href: "",
    svg: RedNote,
  },
];

export const Images = [
  "/model/1.webp",
  "/model/2.webp",
  "/model/3.webp",
  "/model/4.webp",
  "/model/5.webp",
  "/model/6.webp",
  "/model/7.webp",
  "/model/8.webp",
  "/model/9.webp",
  "/model/10.webp",
];
