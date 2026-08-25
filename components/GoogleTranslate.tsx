"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement: new (
          options: {
            pageLanguage: string;
            includedLanguages?: string;
            autoDisplay: boolean;
          },
          elementId: string,
        ) => unknown;
      };
    };
    googleTranslateElementInit?: () => void;
  }
}

export default function GoogleTranslate() {
  useEffect(() => {
    const browserLanguage = navigator.language.split("-")[0].toLowerCase();
    console.log("browserLanguage-", browserLanguage);
    // Don't translate if the browser is already English.
    if (browserLanguage === "en") {
      return;
    }

    window.googleTranslateElementInit = () => {
      const TranslateElement = window.google?.translate?.TranslateElement;

      if (!TranslateElement) return;

      new TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: browserLanguage,
          autoDisplay: true,
        },
        "google_translate_element",
      );
    };

    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      script.remove();
      delete window.googleTranslateElementInit;
    };
  }, []);

  return <div id="google_translate_element" style={{ display: "none" }} />;
}
