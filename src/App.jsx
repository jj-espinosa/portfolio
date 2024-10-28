import { useState, useEffect } from "react";
import i18n from "./i18n";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t } = useTranslation();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    } else {
      const browserLanguage = navigator.language || navigator.userLanguage;
      const defaultLanguage = browserLanguage.startsWith("es") ? "es" : "en";
      i18n.changeLanguage(defaultLanguage);
      localStorage.setItem("language", defaultLanguage);
    }

    const currentMode = localStorage.getItem("darkMode");
    if (currentMode === "true") {
      setDarkMode(true);
    } else if (currentMode === "false") {
      setDarkMode(false);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setDarkMode(prefersDark);
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
  };

  const setLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  };

  return (
    <div className={`min-h-screen antialiased ${darkMode ? "dark" : ""}`}>
      <div className="fixed inset-0 -z-10">
        <div
          className={`absolute top-0 z-[-2] h-screen w-screen transition-colors duration-300 ${
            darkMode
              ? "bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
              : "bg-amber-50 bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"
          }`}
        ></div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          setLanguage={setLanguage}
        />
        <Hero description={t("description")} />
        <Experience title={t("experienceTitle")} />
      </div>
      <Technologies darkMode={darkMode} />
      <Footer />
    </div>
  );
};

export default App;
