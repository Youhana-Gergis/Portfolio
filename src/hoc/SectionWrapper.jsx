import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{once:false, amount:0.25}}
      >
        <div className="hash-span" id={idName}></div>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;