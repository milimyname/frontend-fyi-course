import { motion } from "framer-motion";

function App() {
  return (
    <div className="grid min-h-screen place-items-center">
      <motion.button
        className="bg-green-500 text-white p-4 rounded-lg"
        whileHover={{
          scale: 2,
        }}
        whileFocus={{
          scale: 3,
        }}
        whileTap={{
          scale: 1,
        }}>
        Hello World
      </motion.button>
    </div>
  );
}

export default App;
