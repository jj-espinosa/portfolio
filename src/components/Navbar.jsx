import { useState } from "react";
import { motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

const Navbar = ({ darkMode, toggleDarkMode, setLanguage }) => {
  const { t } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLanguageToggle = (lang) => {
    setLanguage(lang);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="flex items-center justify-end pt-6 pb-14 lg:py-6">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.25 }}
        className="flex items-center justify-center gap-4 text-2xl"
      >
        <div className="relative flex w-fit items-center rounded-full">
          <button
            className={`${TOGGLE_CLASSES} ${
              !darkMode ? "text-white" : "text-slate-300"
            }`}
            onClick={toggleDarkMode}
          >
            <FiMoon className="relative z-10 text-lg md:text-sm" />
            <span className="relative z-10">{t("lightMode")}</span>
          </button>
          <button
            className={`${TOGGLE_CLASSES} ${
              darkMode ? "text-white" : "text-slate-800"
            }`}
            onClick={toggleDarkMode}
          >
            <FiSun className="relative z-10 text-lg md:text-sm" />
            <span className="relative z-10">{t("darkMode")}</span>
          </button>
          <div
            className={`absolute inset-0 z-0 flex ${
              darkMode ? "justify-end" : "justify-start"
            }`}
          >
            <motion.span
              layout
              transition={{ type: "spring", damping: 15, stiffness: 250 }}
              className="h-full w-1/2 rounded-full bg-gradient-to-r from-teal-700 dark:from-indigo-600 to-indigo-400 dark:to-teal-200"
            />
          </div>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button
            className="dark:text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
            type="button"
          >
            {localStorage.getItem("language") === "es" ? "Español" : "English"}
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          {isDropdownOpen && (
            <div className="absolute left-0 z-50 w-full bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <button
                    onClick={() => handleLanguageToggle("en")}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    {t("english")}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLanguageToggle("es")}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    {t("spanish")}
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
