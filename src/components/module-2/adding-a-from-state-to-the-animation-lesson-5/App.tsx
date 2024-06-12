import { motion } from "framer-motion";

// This example won't run in the preview window,
// copy it to App.tsx to see it in action.

const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <motion.button
        className="bg-black text-white px-3 py-2 rounded-md"
        animate={{
          background: "#f00",
        }}
        initial={{
          background: "#00f",
        }}>
        Fancy button
      </motion.button>
    </div>
  );
};

export default App;
