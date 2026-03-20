import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import SectionWrapper from "./SectionWrapper";

const missions = [
  {
    id: "cqb",
    stamp: "LIGHT OPS",
    stampColor: "text-google-green border-google-green/40",
    title: "CQB — CLOSE QUARTERS",
    subtitle: "Frontend UI Work",
    model: "Sonnet (fast, responsive, accurate)",
    equipment: "Context7 MCP only",
    doctrine: "Small focused components. Rapid iterations. Frequent /clear between components. No heavy tools needed — speed is the weapon. Think room clearing with a submachine gun.",
  },
  {
    id: "longrange",
    stamp: "HEAVY OPS",
    stampColor: "text-claude-blue border-claude-blue/40",
    title: "LONG RANGE — OVERWATCH",
    subtitle: "Architecture & Planning",
    model: "Opus (deep reasoning, multi-file awareness)",
    equipment: "GitHub MCP + project-specific tools",
    doctrine: "Plan mode first — full reconnaissance. Heavy code review. Document architectural decisions. This is where Opus bursts earn their weight. Slow, calculated, every shot matters.",
  },
  {
    id: "demolition",
    stamp: "SPECIALIST OPS",
    stampColor: "text-copper border-copper/40",
    title: "DEMOLITION — BREACH & CLEAR",
    subtitle: "Data/Backend Pipeline",
    model: "Sonnet for volume + Opus for schema design",
    equipment: "Database MCP + GitHub",
    doctrine: "Test-driven development. Verify after every step. The Database MCP is dead weight on every other mission — here, it's the primary weapon. The RPG finally earns its carry cost.",
  },
  {
    id: "stealth",
    stamp: "COVERT OPS",
    stampColor: "text-muted-custom border-muted-foreground/40",
    title: "STEALTH — SILENT ENTRY",
    subtitle: "Quick Fixes & Bugs",
    model: "Haiku for trivial fixes, Sonnet for moderate bugs",
    equipment: "None. Zero MCPs loaded.",
    doctrine: "@ file path → describe fix → test → /clear. Don't load the armory for a 3-minute op. Every second configuring is wasted. Knife only. In and out.",
  },
];

const MissionLoadouts = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <SectionWrapper className="bg-surface">
      <ScrollReveal>
        <p className="label-mono mb-4">SECTION 06 // MISSION LOADOUTS</p>
        <h2 className="heading-stencil text-3xl sm:text-4xl md:text-5xl mb-12">
          MISSION-TYPE <span className="text-copper">LOADOUTS</span>
        </h2>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 gap-4">
        {missions.map((m, i) => (
          <ScrollReveal key={m.id} delay={i * 0.08}>
            <button
              onClick={() => setActiveId(activeId === m.id ? null : m.id)}
              className="w-full text-left"
            >
              <div className={`card-tactical p-5 sm:p-6 h-full relative overflow-hidden transition-all duration-300 ${activeId === m.id ? "border-copper glow-copper" : ""}`}>
                {/* CLASSIFIED watermark */}
                <span className="classified-watermark">CLASSIFIED</span>
                {/* Classification stamp */}
                <div className={`classified-stamp absolute top-4 right-4 text-[9px] ${m.stampColor}`}>
                  {m.stamp}
                </div>

                <h3 className="heading-stencil text-base sm:text-lg mb-1 pr-24">{m.title}</h3>
                <p className="font-mono text-[10px] text-muted-custom mb-3">{m.subtitle}</p>

                <AnimatePresence>
                  {activeId === m.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-3 mt-3 border-t border-border space-y-3">
                        <div>
                          <p className="label-mono text-copper text-[10px] mb-1">MODEL</p>
                          <p className="text-body-custom text-xs font-mono">{m.model}</p>
                        </div>
                        <div>
                          <p className="label-mono text-copper text-[10px] mb-1">EQUIPMENT</p>
                          <p className="text-body-custom text-xs font-mono">{m.equipment}</p>
                        </div>
                        <div>
                          <p className="label-mono text-copper text-[10px] mb-1">DOCTRINE</p>
                          <p className="text-body-custom text-xs leading-relaxed">{m.doctrine}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </button>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default MissionLoadouts;
