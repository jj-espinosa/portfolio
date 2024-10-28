import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <hr className="my-2 border-stone-700 sm:mx-auto lg:my-4" />
      <span className="block text-sm text-stone-500 dark:text-stone-400 text-center">
        © 2024{" "}
        <a href="#" className="hover:underline">
          Juan Jesús Espinosa
        </a>
        . {t("rights")}
      </span>
    </footer>
  );
};

export default Footer;
