module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "th"],
    localeDetection: true, // Enable or disable automatic locale detection
  },
  ns: ["common", "home"], // List of namespaces
  defaultNS: "common", // Default namespace used in components/pages
  backend: {
    loadPath: "/locales/{{lng}}/{{ns}}.json", // Path to translation files
  },
  react: {
    useSuspense: false, // Set to false for SSR compatibility
  },
};
