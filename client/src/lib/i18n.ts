export type Lang = "en" | "bg";

export const translations = {
  en: {
    history: "History",
    settings: "Settings",
    startWorkout: "Start workout",
    calendar: "Calendar",
    weight: "kg",
  },
  bg: {
    history: "История",
    settings: "Настройки",
    startWorkout: "Започни тренировка",
    calendar: "Календар",
    weight: "кг",
  },
} as const;

const STORAGE_KEY = "ironpath_lang";

export function getLang(): Lang {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved === "bg" ? "bg" : "en";
}

export function setLang(lang: Lang) {
  localStorage.setItem(STORAGE_KEY, lang);
}

export function t(lang: Lang, key: keyof typeof translations.en): string {
  return translations[lang][key];
}