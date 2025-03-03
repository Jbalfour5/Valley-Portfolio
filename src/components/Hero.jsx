import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaItchIo, FaBolt, FaPencilRuler } from "react-icons/fa";

const Hero = () => {
  return (
    <motion.section
      className="flex items-center justify-center pt-60 bg-zinc-900 text-zinc-50 text-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="home"
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
            href="#skills"
            className="btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Skills
            <FaBolt />
          </motion.a>
          <motion.a
            href="#projects"
            className="btn bg-zinc-50/10 text-zinc-50 hover:bg-zinc-50/15"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            
            View My Projects
            <FaPencilRuler />
          </motion.a>
        </div>
        {/* Social Logos */}
        <div className="flex justify-center mt-8 space-x-6">
          <motion.a
            href="https://github.com/jbalfour5" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub className="text-3xl text-zinc-400 hover:text-zinc-50 transition-colors" />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/ValleyBalfour" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin className="text-3xl text-zinc-400 hover:text-zinc-50 transition-colors" />
          </motion.a>
          <motion.a
            href="https://vall123.itch.io/" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaItchIo className="text-3xl text-zinc-400 hover:text-zinc-50 transition-colors" />
          </motion.a>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;