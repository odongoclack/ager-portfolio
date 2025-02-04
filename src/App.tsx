import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { motion } from 'framer-motion';
import  './components/Footer';
import  './components/Home';
function App() {
  return (
    <div className="app-container">
      <Navbar />

      {/* Sidebar Navigation */}
      <div className="sidebar">
        <a href="#home"></a>
        <a href="#about"></a>
        <a href="#projects"></a>
        <a href="#contact"></a>
      </div>

      {/* Main Content with Animations */}
      <div className="main-content">
        <motion.div
          id="hero"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Hero />
        </motion.div>

        <motion.div
          id="about"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <About />
        </motion.div>

        <motion.div
          id="projects"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Projects />
        </motion.div>

        <motion.div
          id="contact"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Contact />
        </motion.div>
      </div>
    </div>
  );
}

export default App;