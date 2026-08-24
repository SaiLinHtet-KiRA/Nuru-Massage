import { Variants } from "motion";

export const imageVariants: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "linear",
    },
  },
};
