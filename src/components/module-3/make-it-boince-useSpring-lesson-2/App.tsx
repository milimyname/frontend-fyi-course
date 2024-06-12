import { motion, useMotionValue, useSpring } from "framer-motion";

const App = () => {
  const scale = useMotionValue(1);
  const scaleSpring = useSpring(scale, {
    stiffness: 300,
    damping: 200,
    mass: 1,
    velocity: 0,
  });
  const onRangeChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    scale.set(parseFloat(ev.target.value));
  };

  return (
    <div className="flex items-center flex-col gap-8 justify-center min-h-screen">
      <motion.button
        className="bg-black text-white px-3 py-2 rounded-md"
        style={{ scale: scaleSpring }}
        // transition={{ type: "spring", damping: 300 }}
      >
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
