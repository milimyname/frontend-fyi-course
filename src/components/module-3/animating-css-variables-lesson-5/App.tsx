import { motion, useMotionValue, useTransform } from "framer-motion";

// const App = () => {
//   const scale = useMotionValue(20);

//   return (
//     <div className="grid place-items-center gap-8 justify-center min-h-screen">
//       <motion.button
//         className="bg-black text-black px-3 py-2 rounded-md"
//         style={{
//           "--scale": scale,
//         }}>
//         CSS Variables
//       </motion.button>
//     </div>
//   );
// };

// 2.

const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <motion.ol
        initial={{ "--x": "0px" }}
        animate={{ "--x": "100px" }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="flex flex-col gap-3 text-center">
        <li className="bg-blue-400 p-5 rounded-2xl translate-x-[--x]">CSS</li>
        <li className="bg-blue-400 p-5 rounded-2xl translate-x-[--x]">is</li>
        <li className="bg-blue-400 p-5 rounded-2xl translate-x-[--x]">
          the BEST
        </li>
      </motion.ol>
    </div>
  );
};

export default App;
