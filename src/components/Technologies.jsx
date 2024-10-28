import { technologies } from "../info";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TechnologyItem from "./TechnologyItem.jsx";
import { useTranslation } from "react-i18next";

const Technologies = ({ darkMode }) => {
  const { t } = useTranslation();
  const quantity = 10;
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section>
      <motion.h2
        ref={ref}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        className="my-8 text-center dark:text-stone-300 text-4xl"
      >
        {t("technologiesTitle")}
      </motion.h2>
      <div className="min-h-[250px] lg:min-h-[575px] flex items-center justify-center relative overflow-hidden">
        <div
          className="absolute w-[75px] h-[100px] lg:w-[150px] lg:h-[200px] top-[15%] left-[calc(50%-40px)] lg:left-[calc(50%-100px)] animate-autoRun"
          style={{
            transformStyle: "preserve-3d",
            transform: "perspective(1000px)",
          }}
        >
          {technologies.map((technology, index) => {
            const angle = index * (360 / quantity);
            return (
              <TechnologyItem
                key={index}
                angle={angle}
                src={technology.src}
                alt={technology.alt}
                darkMode={darkMode}
                style={technology.style}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
