"use client";

import { useEffect } from "react";

interface GoogleTranslateElementOptions {
  pageLanguage: string;
  includedLanguages: string;
  autoDisplay: boolean;
}

interface GoogleTranslateNamespace {
  translate: {
    TranslateElement: new (
      options: GoogleTranslateElementOptions,
      containerId: string,
    ) => void;
  };
}

declare global {
  interface Window {
    google?: GoogleTranslateNamespace;
    googleTranslateElementInit?: () => void;
  }
}

const SUPPORTED_LANGUAGES = [
  "th",
  "ja",
  "ko",
  "zh-CN",
  "zh-TW",
  "fr",
  "de",
  "es",
  "vi",
  "id",
];
const PAGE_LANGUAGE = "en";
const SYNCED_LANG_KEY = "gt_synced_lang";

function getPreferredLanguage(): string | null {
  const browserLangs = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];
  for (const raw of browserLangs) {
    const base = raw.split("-")[0].toLowerCase();
    if (base === "zh") {
      return raw.toLowerCase().includes("tw") ||
        raw.toLowerCase().includes("hant")
        ? "zh-TW"
        : "zh-CN";
    }
    if (SUPPORTED_LANGUAGES.includes(base)) return base;
  }
  return null;
}

function clearAllTranslateCookies() {
  const hostname = window.location.hostname;
  const domains = [hostname, `.${hostname}`, ""];

  for (const domain of domains) {
    const domainPart = domain ? `;domain=${domain}` : "";
    document.cookie = `googtrans=;path=/${domainPart};expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  }
}

function getCookieLang(): string | null {
  const match = document.cookie.match(/googtrans=\/en\/([a-zA-Z-]+)/);
  return match ? match[1] : null;
}

export default function GoogleTranslate() {
  useEffect(() => {
    const preferredLang = getPreferredLanguage();
    if (!preferredLang) return;

    const existingCookieLang = getCookieLang();
    const syncedLang = sessionStorage.getItem(SYNCED_LANG_KEY);

    if (existingCookieLang === preferredLang) {
      // Cookie already matches this exact language — just init the widget
      loadScript();
      return;
    }

    if (syncedLang !== preferredLang) {
      // Genuinely new target language — reset cookie and reload once for it
      clearAllTranslateCookies();
      document.cookie = `googtrans=/en/${preferredLang};path=/`;
      sessionStorage.setItem(SYNCED_LANG_KEY, preferredLang);
      window.location.reload();
      return;
    }

    // We already reloaded for this language but cookie still doesn't match
    // (e.g. cookie blocked) — don't loop, just try initializing anyway
    loadScript();

    function loadScript() {
      window.googleTranslateElementInit = () => {
        if (!window.google?.translate) return;
        const container = document.getElementById("google_translate_element");
        if (!container || container.querySelector(".goog-te-combo")) return;
        new window.google.translate.TranslateElement(
          {
            pageLanguage: PAGE_LANGUAGE,
            includedLanguages: SUPPORTED_LANGUAGES.join(","),
            autoDisplay: false,
          },
          "google_translate_element",
        );
      };

      if (window.google?.translate) {
        window.googleTranslateElementInit();
        return;
      }

      if (
        document.querySelector(
          'script[src*="translate.google.com/translate_a/element.js"]',
        )
      ) {
        return;
      }

      const script = document.createElement("script");
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return <div id="google_translate_element" style={{ display: "none" }} />;
}
