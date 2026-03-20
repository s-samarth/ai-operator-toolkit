import { motion } from "framer-motion";

const blades = [
  { label: "Gemini 3 Pro", angle: -75 },
  { label: "Jules", angle: -50 },
  { label: "NotebookLM", angle: -25 },
  { label: "Deep Search", angle: 0 },
  { label: "Workspace AI", angle: 25 },
  { label: "2TB Storage", angle: 50 },
  { label: "Cloud Credits", angle: 75 },
];

const SwissArmyKnife = () => (
  <div className="relative z-10 flex justify-center mb-6">
    <div className="relative" style={{ width: 280, height: 160 }}>
      {/* Handle */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-md border border-google-green/30 bg-surface-elevated"
        style={{ width: 48, height: 24 }}
      />

      {/* Blades fanning out from handle pivot */}
      {blades.map((blade, i) => (
        <motion.div
          key={blade.label}
          className="absolute origin-bottom"
          style={{
            left: "50%",
            bottom: 12,
            marginLeft: -3,
            width: 6,
            height: 80,
          }}
          initial={{ rotate: 0, opacity: 0 }}
          animate={{ rotate: blade.angle, opacity: 1 }}
          transition={{
            delay: 0.15 + i * 0.08,
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          {/* Blade body */}
          <div
            className="w-full h-full rounded-t-sm"
            style={{
              background:
                "linear-gradient(180deg, hsl(142 71% 58% / 0.5) 0%, hsl(142 71% 58% / 0.15) 100%)",
              border: "1px solid hsl(142 71% 58% / 0.3)",
            }}
          />
          {/* Label at tip */}
          <motion.span
            className="absolute -top-5 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[9px] text-google-green"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.08, duration: 0.3 }}
          >
            {blade.label}
          </motion.span>
        </motion.div>
      ))}
    </div>
  </div>
);

export default SwissArmyKnife;
