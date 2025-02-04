//Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Carousel from "./components/Carousel";


//Node Modules
import { motion } from "framer-motion";

const App = () => {
    return (
        <motion.div
        //Animation
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }} 
      >
        <Header/>
        <Hero/>
        <About/>
        <Skills/>
        <Carousel/>
      </motion.div>
    )
}

export default App;