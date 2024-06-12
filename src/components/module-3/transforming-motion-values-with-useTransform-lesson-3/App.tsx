import { motion, useMotionValue, useTransform } from "framer-motion";

const App = () => {
  const sliderValue = useMotionValue(1);

  const opacity = useTransform(sliderValue, [1, 2.5, 5], [0, 0.8, 1]);

  const onRangeChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    sliderValue.set(parseFloat(ev.target.value));
  };

  return (
    <div className="flex items-center flex-col gap-8 justify-center min-h-screen">
      <motion.button
        className="bg-black text-white px-3 py-2 rounded-md"
        style={{ opacity }}>
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
