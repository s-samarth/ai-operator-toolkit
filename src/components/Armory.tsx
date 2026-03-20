import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Crosshair, FileText, Sword, Layers, Shield, BookOpen, Package, Zap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionWrapper from "./SectionWrapper";

interface ArmoryItem {
  id: string;
  icon: React.ElementType;
  label: string;
  sublabel: string;
  game: string;
  code: string;
  weight: string;
  detail: string;
}

const items: ArmoryItem[] = [
  {
    id: "standard",
    icon: Crosshair,
    label: "STANDARD ISSUE",
    sublabel: "Assault Rifle",
    game: "Your standard-issue kit — uniform, boots, comms radio",
    code: "System prompt (~50 built-in instructions)",
    weight: "Fixed — cannot be removed",
    detail: "Non-negotiable baseline. ~50 instructions loaded before your first message. This is the weight that exists before you type a single character. Every operator carries this. There's no mission without it.",
  },
  {
    id: "dossier",
    icon: FileText,
    label: "MISSION BRIEFING",
    sublabel: "Tactical Dossier",
    game: "Intel folder in your vest pocket",
    code: "CLAUDE.md files",
    weight: "~2-4K tokens (recommended)",
    detail: "Your persistent mission intel. Survives even when you drop your backpack (/compact — Claude re-reads it from disk fresh). Models can follow ~150-200 total instructions reliably. System prompt uses ~50, leaving you with roughly 100-150 before adherence degrades. Every line must earn its place.",
  },
  {
    id: "primary",
    icon: Sword,
    label: "PRIMARY WEAPON",
    sublabel: "Modular Assault Rifle",
    game: "Your main assault rifle — always slung, always ready",
    code: "GitHub MCP server",
    weight: "~10K tokens",
    detail: "The one weapon worth its weight on every deployment. PRs, issues, commits, repo searches — without leaving the battlefield. Not every MCP earns daily-carry status. This one does. Worth ~10K tokens because you reach for it constantly.",
  },
  {
    id: "heavy",
    icon: Layers,
    label: "SPECIALIST WEAPONS",
    sublabel: "Heavy Weapons Rack",
    game: "Sniper rifle, RPG, demolition kit",
    code: "Additional MCP servers (Playwright, Database, etc.)",
    weight: "~10K+ tokens EACH",
    detail: "Each one is powerful but adds significant standing weight before you start working. Load five servers with fifty-eight tools and you've burned ~55,000 tokens — 27% of your context gone on definitions alone. But on the RIGHT mission, heavy weapons are essential.",
  },
  {
    id: "tripwire",
    icon: Shield,
    label: "AUTOMATED DEFENSES",
    sublabel: "Trip Wire / Claymore",
    game: "Trip wires, claymores, surveillance drones",
    code: "Hooks (lint, typecheck, format)",
    weight: "~0 tokens (runs outside context)",
    detail: "Set once, trigger automatically with zero exceptions. Unlike advisory instructions in CLAUDE.md, hooks are deterministic — they WILL fire every time. The hook script runs outside Claude's context for free. But the output it returns goes INTO context. Filter output to errors only.",
  },
  {
    id: "manual",
    icon: BookOpen,
    label: "COMBAT TRAINING",
    sublabel: "Field Manual",
    game: "Muscle memory, CQB drills, sniper school",
    code: "Skills (.claude/skills/)",
    weight: "~30-50 tokens (metadata only)",
    detail: "Training that weighs almost nothing because it lives in your head, not on your back. Progressive disclosure: Claude reads only names/descriptions at first (~30-50 tokens per skill), then loads full instructions only when the skill matches the current task.",
  },
  {
    id: "crate",
    icon: Package,
    label: "LOADOUT PRESETS",
    sublabel: "Equipment Crate",
    game: "Pre-packed mission kits — \"assault kit,\" \"recon kit,\" \"demolition kit\"",
    code: "Plugins",
    weight: "Varies (bundles multiple items)",
    detail: "Pre-configured gear bundles. The feature-dev plugin = rifle + grenades + tools for building features. One install gives you everything for a mission type. Plugins can bundle commands, skills, agents, hooks, AND MCP servers into a single package.",
  },
  {
    id: "holster",
    icon: Zap,
    label: "SMART HOLSTER",
    sublabel: "Intelligent Weapon Rack",
    game: "Intelligent weapon rack — only draws what you need",
    code: "Tool Search (lazy loading)",
    weight: "Reduces standing weight by ~85%",
    detail: "Instead of strapping all weapons to your body at once, the smart holster holds them and only draws the specific tool when you reach for it. Enable with ENABLE_TOOL_SEARCH=auto:5. The difference between carrying 55K tokens of idle definitions and carrying almost nothing.",
  },
];

const Armory = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleClick = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <SectionWrapper className="bg-surface">
      <ScrollReveal>
        <p className="label-mono mb-4">SECTION 02 // THE ARMORY</p>
        <h2 className="heading-stencil text-3xl sm:text-4xl md:text-5xl mb-4">
          THE <span className="text-copper">WEAPON WALL</span>
        </h2>
        <p className="text-muted-custom mb-12 max-w-xl">
          Click any piece of equipment to inspect its stats and field notes.
        </p>
      </ScrollReveal>

      <div className="weapon-wall rounded-xl p-4 sm:p-6 mb-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {items.map((item, i) => {
            const Icon = item.icon;
            const isActive = activeId === item.id;
            return (
              <ScrollReveal key={item.id} delay={i * 0.05}>
                <button
                  onClick={() => handleClick(item.id)}
                  className={`weapon-mount w-full p-4 sm:p-6 rounded-lg border transition-all duration-300 text-left group cursor-pointer ${
                    isActive
                      ? "bg-surface-elevated border-copper glow-copper scale-[1.03]"
                      : "bg-background border-border hover:bg-surface-elevated hover:border-copper/50 hover:scale-[1.04] hover:-rotate-1"
                  }`}
                  style={{ borderBottom: isActive ? "2px solid hsl(24 58% 60% / 0.5)" : undefined }}
                >
                  <Icon
                    className={`w-8 h-8 sm:w-10 sm:h-10 mb-3 transition-all ${
                      isActive ? "text-copper" : "text-muted-custom group-hover:text-copper"
                    }`}
                    style={
                      isActive
                        ? { filter: "drop-shadow(0 0 6px hsl(24 58% 60% / 0.4))" }
                        : undefined
                    }
                  />
                  <p className="font-heading text-xs sm:text-sm tracking-wider uppercase text-bright font-semibold">
                    {item.label}
                  </p>
                  <p className="font-mono text-[10px] text-muted-custom mt-1">{item.sublabel}</p>
                </button>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeId && (() => {
          const item = items.find((i) => i.id === activeId)!;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <div className="border border-copper/30 rounded-lg bg-background p-6 sm:p-8 glow-copper">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <p className="label-mono text-copper mb-2">GAME EQUIVALENT</p>
                    <p className="text-body-custom text-sm">{item.game}</p>
                  </div>
                  <div>
                    <p className="label-mono text-copper mb-2">CODE EQUIVALENT</p>
                    <p className="text-body-custom text-sm font-mono">{item.code}</p>
                  </div>
                  <div>
                    <p className="label-mono text-copper mb-2">WEIGHT</p>
                    <p className="text-body-custom text-sm font-mono">{item.weight}</p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="label-mono text-copper mb-2">FIELD NOTES</p>
                  <p className="text-body-custom text-sm leading-relaxed">{item.detail}</p>
                </div>
              </div>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default Armory;
