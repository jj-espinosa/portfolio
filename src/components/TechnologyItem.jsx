import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TechnologyItem = ({ angle, src, alt, style, darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      className="technology-item absolute inset-0"
      style={{
        "--angle": `${angle}deg`,
      }}
    >
      <motion.img
        ref={ref}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        src={src}
        className="w-full h-full object-contain"
        alt={alt}
        style={darkMode ? null : style}
      />
    </div>
  );
};

export default TechnologyItem;
