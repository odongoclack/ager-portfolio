import { motion } from 'framer-motion';
import "../App.css"; 
import Austine from "../Images/Austine.jpg"; 

const Hero = () => {
  return (
    <div className="hero-section">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1.5 }}
      >
        HI, I'M AGER AUSTINE
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Software Engineer | AI Enthusiast | Full-Stack Developer
      </motion.p>

      <motion.img
      src={Austine} alt="Ager Austine" 
        className="hero-img"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      />
    </div>
  );
};

export default Hero;