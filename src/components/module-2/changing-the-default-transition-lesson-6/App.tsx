import { motion } from "framer-motion";

function App() {
  return (
    <div className="grid min-h-screen place-items-center">
      <motion.button
        className="bg-green-500 text-white p-4 rounded-lg"
        animate={{
          scaleX: 2,
          scaleY: 2,
          y: "50%",
        }}
        transition={{
          delay: 2,
          // ease: "linear",
          repeat: Infinity,
          repeatDelay: 1,
          repeatType: "reverse",
          scaleX: {
            delay: 1,
            repeatDelay: 1,
            repeat: Infinity,
          },
        }}>
        Hello World
      </motion.button>
    </div>
  );
}

export default App;
