import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-night-ops" />
      <div className="absolute inset-0 topo-bg" />
      <div className="absolute inset-0 scan-lines pointer-events-none" />
      <div className="absolute inset-0 vignette pointer-events-none" />
      
      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-0.5 h-0.5 rounded-full bg-copper opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.p
          className="label-mono mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          FIELD MANUAL // FM-AI-2026
        </motion.p>

        <motion.h1
          className="heading-stencil text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        >
          THE OPERATOR'S
          <br />
          <span className="text-copper">GUIDE TO AI TOOLS</span>
        </motion.h1>

        <motion.p
          className="text-body-custom text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          What if Claude Code was a weapon, Google AI Pro was a Swiss Army knife,
          and ChatGPT was a flashlight?
        </motion.p>

        <motion.div
          className="crosshair-line w-48 sm:w-64 mx-auto mb-12"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        />

        <motion.div
          className="flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <p className="label-mono text-[10px] tracking-[0.25em]">
            SCROLL TO ENTER THE ARMORY
          </p>
          <ChevronDown className="w-5 h-5 text-copper animate-chevron-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
