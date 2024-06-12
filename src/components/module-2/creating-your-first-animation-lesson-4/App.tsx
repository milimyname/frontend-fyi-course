import { motion } from "framer-motion";

function App() {
  return (
    <div className="grid min-h-screen place-items-center">
      <motion.button
        className="bg-blue-500 text-white p-4 rounded-lg"
        animate={{
          color: "#0f0",
          backgroundColor: "#00f",
          scale: 1.2,
          y: 100,
        }}>
        Hello World
      </motion.button>
    </div>
  );
}

export default App;
