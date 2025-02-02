import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      className="flex items-center justify-center pt-60 bg-zinc-900 text-zinc-50 text-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="max-w-2xl"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Hi, I'm <span className="text-orange-700/90">Valley</span>!
        </motion.h1>
        <motion.p
          className="text-xl mb-8 text-zinc-400"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          A Programmer passionate about both game and web dev.
        </motion.p>
        <div className="flex justify-center space-x-4">
          <motion.a
            href="#projects"
            className="btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="btn bg-zinc-50/10 text-zinc-50 hover:bg-zinc-50/15"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;