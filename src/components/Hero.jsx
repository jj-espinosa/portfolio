import profileImg from "../assets/profileImgwb.png";
import { motion } from "framer-motion";
import TiltCard from "./TiltCard";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childrenVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className="pb-4">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <TiltCard width={480} height={480}>
            <motion.img
              src={profileImg}
              alt="Juan Jesús Espinosa"
              className="rounded-3xl drop-shadow-[0_0_10px_rgba(36,37,69,0.5)] dark:drop-shadow-[0_0_10px_rgba(132,140,207,0.5)]"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            />
          </TiltCard>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start mt-10"
          >
            <motion.h2
              variants={childrenVariants}
              className="pb-2 text-4xl dark:text-stone-300 tracking-tighter lg:text-7xl"
            >
              Juan Jesús Espinosa
            </motion.h2>
            <motion.span
              variants={containerVariants}
              className="bg-gradient-to-r from-teal-700 dark:from-indigo-600 to-indigo-400 dark:to-teal-200 bg-clip-text text-transparent text-2xl lg:text-3xl tracking-tight"
            >
              {t("role")}
            </motion.span>
            <motion.p
              variants={containerVariants}
              className="my-2 max-w-lg py-6 text-xl text-stone-500 dark:text-stone-400 leading-relaxed tracking-tighter text-pretty"
              dangerouslySetInnerHTML={{ __html: t("whoAmI") }}
            />
            <motion.div
              variants={containerVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start w-full gap-2"
            >
              <a
                href={t("resumeRoute")}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-800 to-indigo-400 dark:from-indigo-600 dark:to-teal-200 group-hover:from-teal-800 group-hover:to-indigo-400 dark:group-hover:from-indigo-600 dark:group-hover:to-teal-200 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-blue-800"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-orange-100 dark:bg-neutral-950 rounded-md group-hover:bg-opacity-0">
                  {t("downloadResume")}
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/juan-jesus-espinosa-martinez/"
                target="_blank"
                rel="noopener noreferrer"
                className=" flex items-center justify-center gap-1 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href="mailto:jjespinosamartinez@gmail.com"
                className="flex items-center justify-center gap-1 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
              >
                <FaEnvelope />
                <span>Email</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
