import { motion } from "framer-motion";
import { opacity, slideUp } from "./anim";

const Introduction = () => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-[#141516] z-[99] overflow-hidden"
      variants={slideUp}
      initial="initial"
      exit="exit"
    >
      <motion.svg
        className="absolute top-0 w-full h-[calc(100%+300px)]"
        viewBox="0 0 1920 1080"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path fill="#141516" d="M0 0h1920v1080H0z" />
      </motion.svg>

      <motion.p
        className="absolute z-10 text-white text-[42px] flex items-center"
        variants={opacity}
        initial="initial"
        animate="enter"
      >
        <span className="block w-[10px] h-[10px] rounded-full bg-white mr-2"></span>
        Your Text Here
      </motion.p>
    </motion.div>
  );
};

export default Introduction;
