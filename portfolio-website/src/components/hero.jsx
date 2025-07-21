import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-800 text-white">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Nischal Shrestha</h1>
        <div className="text-2xl md:text-4xl h-14">
          <TypeAnimation
            sequence={[
              'Frontend Developer',
              1000,
              'Machine Learning Engineer',
              1000,
              'Problem Solver',
              1000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>
      </motion.div>
    </section>
  );
}