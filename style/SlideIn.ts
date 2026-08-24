import { Variants } from "motion";

export const textVariants: Variants = {
  offscreen: { y: 8, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.6,
      ease: "linear",
    },
  },
};
export const imageVariants: Variants = {
  offscreen: {
    y: 5,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "linear",
    },
  },
};
