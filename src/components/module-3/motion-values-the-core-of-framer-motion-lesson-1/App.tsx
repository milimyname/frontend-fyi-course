import { motion, useMotionValue } from "framer-motion";

// 1.

// const App = () => {
//   const scale = useMotionValue(2);

//   return (
//     <div className="grid place-items-center min-h-screen">
//       <motion.div
//         className="rounded-full w-32 h-12 bg-blue-400"
//         style={{ scale }}
//       />
//     </div>
//   );
// };

// 2.

const App = () => {
  const scale = useMotionValue(1);
  const onRangeChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    scale.set(parseFloat(ev.target.value));
  };

  return (
    <div className="flex items-center flex-col gap-8 justify-center min-h-screen">
      <motion.button
        className="bg-black text-white px-3 py-2 rounded-md"
        style={{ scale }}
        transition={{ type: "spring", damping: 300 }}>
        Scale ⚖️
      </motion.button>
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 p-3 bg-white/10 rounded-xl flex items-center justify-center">
        <input
          type="range"
          min={0.5}
          max={5}
          step={0.01}
          defaultValue={1}
          onChange={onRangeChange}
        />
      </div>
    </div>
  );
};

export default App;
