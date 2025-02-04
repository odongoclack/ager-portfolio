import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import "../App.css";

const Home = () => {
  const navigate = useNavigate();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  const components = [
    { name: 'About', path: '/about', delay: 0.4 },
    { name: 'Projects', path: '/projects', delay: 0.6 },
    { name: 'Contact', path: '/contact', delay: 0.8 }
  ];

  return (
    <div className="content">
      <div className="flex flex-col items-center justify-center min-h-screen w-full space-y-8">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img 
            src="/Images/Austine.jpg" 
            alt="Ager Austine" 
            className="w-40 h-40 rounded-full border-4 border-blue-400 shadow-lg shadow-blue-500/50"
          />
        </motion.div>

        <motion.h1 
          {...fadeIn}
          className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400"
        >
          Welcome to Ager Austine's Portfolio
        </motion.h1>
        
        <motion.p 
          {...fadeIn}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-300"
        >
          AI Engineer | Generative AI | Value-Centered AI | Data Engineering
        </motion.p>

        <div className="flex flex-wrap justify-center gap-6 w-full max-w-4xl px-4">
          {components.map((component,) => (
            <motion.div
              key={component.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: component.delay }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate(component.path)}
              className="cursor-pointer flex-1 min-w-[250px] max-w-[300px]"
            >
              <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-400 transition-colors duration-300">
                <h2 className="text-2xl font-semibold mb-2">{component.name}</h2>
                <div className="w-12 h-1 bg-blue-400 mx-auto rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-gray-400 mt-8"
        >
          <p>Scroll or click to explore</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;