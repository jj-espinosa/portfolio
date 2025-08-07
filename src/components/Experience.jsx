import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Experience = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const experiences = t("experiences", { returnObjects: true });

  return (
    <section className="pb-4">
      <motion.h2
        ref={ref}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        className="my-20 text-center dark:text-stone-300 text-4xl"
      >
        {t("experienceTitle")}
      </motion.h2>
      <div>
        {experiences.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              ref={ref}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-stone-500 dark:text-stone-400">
                {experience.year}
              </p>
            </motion.div>
            <motion.div
              ref={ref}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h3 className="mb-2 dark:text-stone-300 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-stone-500">
                  {experience.company}
                </span>
              </h3>
              <ul className="list-disc">
                {experience.description.map((point, index) => (
                  <li
                    key={index}
                    className="mb-4 text-stone-500 dark:text-stone-400 text-pretty"
                    dangerouslySetInnerHTML={{ __html: point }}
                  />
                ))}
              </ul>
              <div className="flex flex-wrap">
                {experience.technologies.map((technology, index) => (
                  <span
                    className="mr-2 mt-4 rounded bg-stone-300 dark:bg-stone-900 px-2 py-1 text-sm font-medium dark:text-stone-300"
                    key={index}
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
