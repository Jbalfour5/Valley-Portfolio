//Components
import Header from "./components/Header";
import Hero from "./components/Hero";


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
      </motion.div>
    )
}

export default App;