import "./styles.css";
import { motion } from "framer-motion";

const App = () => {
  return (
    <div className="grid place-items-center min-h-screen">
      <div className="w-[150px] overflow-hidden flex relative flex-col aspect-[2/4] text-white bg-[#41352a] rounded-2xl">
        <div className="h-full fadeout">
          <motion.div
            className="text-[80px] origin-top-left [font-family:monospace] leading-[0.8] inset-1 absolute break-all"
            animate={{
              opacity: [0, 1, 1, 1, 0],
              scaleX: [1, 2.5, 2.5, 1, 1],
              scaleY: [1, 1, 2.5, 2.5, 10],
            }}
            transition={{
              repeat: Infinity,
              repeatDelay: 2,
              duration: 10,
              times: [0, 0.2, 0.4, 0.6, 1],
            }}>
            responsive
          </motion.div>
        </div>
        <p className="mt-auto p-2">Make your animations work on all devices</p>
      </div>
    </div>
  );
};

export default App;
