import { motion } from "framer-motion";

function App() {
  return (
    <div className="grid min-h-screen place-items-center">
      <motion.button
        className="bg-green-500 rounded-sm text-white size-24"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: [null, "0%", "50%", "50%", "0%"],
        }}
        transition={{
          delay: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1,
          duration: 2,
          times: [0, 0.2, 0.35, 0.8, 1],
        }}
      />
    </div>
  );
}

export default App;
