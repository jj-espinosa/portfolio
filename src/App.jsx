import { useState, useEffect } from "react";
import i18n from "./i18n";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useTranslation } from "react-i18next";
import GradientBackground from "./components/GradientBackground";

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
      <div
        className={`fixed top-0 h-screen w-full z-[-1] ${
          darkMode ? "bg-neutral-950/20" : "bg-orange-50/20"
        }`}
      >
        <GradientBackground darkMode={darkMode} />
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
