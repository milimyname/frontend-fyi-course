import { motion } from "framer-motion";
import { forwardRef } from "react";

const Button = forwardRef<HTMLButtonElement>((props, ref) => {
  return <button ref={ref}>...</button>;
});

const MotionButton = motion(Button);

function App() {
  return (
    <div className="grid min-h-screen place-items-center">
      <motion.button
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.2 }}
        className="bg-blue-500 text-white p-4 rounded-lg">
        Hello World
      </motion.button>
    </div>
  );
}

export default App;
