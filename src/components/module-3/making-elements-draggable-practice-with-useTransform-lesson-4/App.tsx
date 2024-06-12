import { motion, useMotionValue, useTransform } from "framer-motion";

// 1.
// const App = () => {
//   const x = useMotionValue(0);
//   return (
//     <div className="flex items-center flex-col gap-8 justify-center min-h-screen">
//       <motion.button
//         drag="x"
//         dragConstraints={{ left: 0, right: 0 }}
//         style={{ x }}
//         className="bg-black text-white px-3 py-2 rounded-md">
//         Scale ⚖️
//       </motion.button>
//     </div>
//   );
// };

// 2.

const App = () => {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-100, 0, 100], [1, 1, 1.5]);
  const backgroundColor = useTransform(
    x,
    [-100, 0, 100],
    ["#ff008c", "#306a87", "#7700ff"]
  );
  const borderRadius = useTransform(x, [-100, 0, 100], ["100%", "6px", "100%"]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <motion.div
        style={{ x, scale, backgroundColor, borderRadius }}
        className="w-32 h-32 bg-[#306a87] rounded-md flex items-center justify-center text-white"
        drag="x"
        // We talk about the dragConstraints in Module 11.
        // For now, it helps with bouncing the square back to the center
        // when you release it.
        dragConstraints={{ left: 0, right: 0 }}
      />
    </div>
  );
};

export default App;
