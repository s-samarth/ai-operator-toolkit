import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Crosshair, PocketKnife, Flashlight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionWrapper from "./SectionWrapper";
import KitDetail from "./KitDetail";
import SwissArmyKnife from "./SwissArmyKnife";

type KitId = "weapon" | "knife" | "flashlight" | null;

const ThreeKits = () => {
  const [activeKit, setActiveKit] = useState<KitId>(null);

  return (
    <SectionWrapper>
      <ScrollReveal>
        <p className="label-mono mb-4">SECTION 07 // THE THREE KITS</p>
        <h2 className="heading-stencil text-3xl sm:text-4xl md:text-5xl mb-4">
          YOUR <span className="text-copper">ESSENTIAL CARRY</span>
        </h2>
        <p className="text-muted-custom mb-12 max-w-xl">
          Three tools. Three purposes. Click each to inspect.
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-6">
        {/* WEAPON - Claude */}
        <ScrollReveal>
          <button
            onClick={() => setActiveKit(activeKit === "weapon" ? null : "weapon")}
            className="w-full text-left"
          >
            <motion.div
              className={`rounded-lg border p-6 sm:p-8 transition-all duration-400 cursor-pointer ${
                activeKit === "weapon"
                  ? "bg-surface-elevated border-claude-blue glow-blue"
                  : "bg-surface border-border hover:border-claude-blue/50"
              }`}
              whileHover={{ scale: 1.02, rotateY: 3 }}
              animate={activeKit === "weapon" ? { rotateY: 5 } : { rotateY: 0 }}
              transition={{ duration: 0.4 }}
              style={{ perspective: 800 }}
            >
              <Crosshair
                className={`w-12 h-12 mb-4 transition-colors ${
                  activeKit === "weapon" ? "text-claude-blue" : "text-muted-custom"
                }`}
                style={
                  activeKit === "weapon"
                    ? { filter: "drop-shadow(0 0 8px hsl(228 100% 71% / 0.5))" }
                    : undefined
                }
              />
              <h3 className="heading-stencil text-lg text-claude-blue mb-1">THE TACTICAL WEAPON</h3>
              <p className="font-mono text-[10px] text-muted-custom">CLAUDE PRO / MAX</p>
            </motion.div>
          </button>
        </ScrollReveal>

        {/* KNIFE - Google */}
        <ScrollReveal delay={0.1}>
          <button
            onClick={() => setActiveKit(activeKit === "knife" ? null : "knife")}
            className="w-full text-left"
          >
            <motion.div
              className={`rounded-lg border p-6 sm:p-8 transition-all duration-400 cursor-pointer ${
                activeKit === "knife"
                  ? "bg-surface-elevated border-google-green glow-green"
                  : "bg-surface border-border hover:border-google-green/50"
              }`}
              whileHover={{ scale: 1.02, rotateY: 2 }}
              transition={{ duration: 0.3 }}
            >
              <PocketKnife
                className={`w-12 h-12 mb-4 transition-colors ${
                  activeKit === "knife" ? "text-google-green" : "text-muted-custom"
                }`}
              />
              <h3 className="heading-stencil text-lg text-google-green mb-1">THE SWISS ARMY KNIFE</h3>
              <p className="font-mono text-[10px] text-muted-custom">GOOGLE AI PRO</p>
            </motion.div>
          </button>
        </ScrollReveal>

        {/* FLASHLIGHT - ChatGPT */}
        <ScrollReveal delay={0.2}>
          <button
            onClick={() => setActiveKit(activeKit === "flashlight" ? null : "flashlight")}
            className="w-full text-left"
          >
            <motion.div
              className={`rounded-lg border p-6 sm:p-8 transition-all duration-400 cursor-pointer relative overflow-hidden ${
                activeKit === "flashlight"
                  ? "bg-surface-elevated border-chatgpt-amber glow-amber"
                  : "bg-surface border-border hover:border-chatgpt-amber/50"
              }`}
              whileHover={{ scale: 1.02, rotateY: 2 }}
              transition={{ duration: 0.3 }}
            >
              {activeKit === "flashlight" && (
                <motion.div
                  className="absolute inset-0 flashlight-beam"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                />
              )}
              <motion.div
                animate={
                  activeKit === "flashlight"
                    ? { filter: "brightness(1) grayscale(0)", scale: 1.1 }
                    : { filter: "brightness(0.35) grayscale(0.8)", scale: 1 }
                }
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                <Flashlight
                  className="w-12 h-12 mb-4 text-chatgpt-amber"
                  style={
                    activeKit === "flashlight"
                      ? { filter: "drop-shadow(0 0 12px hsl(43 96% 56% / 0.6))" }
                      : undefined
                  }
                />
              </motion.div>
              <h3 className="heading-stencil text-lg text-chatgpt-amber mb-1 relative z-10">
                THE FLASHLIGHT
              </h3>
              <p className="font-mono text-[10px] text-muted-custom relative z-10">CHATGPT</p>
            </motion.div>
          </button>
        </ScrollReveal>
      </div>

      {/* Expanded detail panels */}
      <AnimatePresence mode="wait">
        {activeKit === "weapon" && (
          <KitDetail
            key="weapon"
            color="claude-blue"
            borderClass="border-claude-blue/30"
            glowClass="glow-blue"
            classification="Mission-critical precision armament"
            cost="$20-200/mo depending on tier"
            role="The mission itself — building, coding, writing, deep analysis"
            strength="Precision, customization, configurability (CLAUDE.md, hooks, skills, MCPs)"
            weightClass="Heavy — every gram justified and intentional"
            whenToDeploy="When the outcome depends on precision. Multi-step tasks where context and customization determine success. Coding sessions. Long-form writing. Complex analysis."
            operatorNote="You don't just pick this up and fire. You train with it. You customize the optics (CLAUDE.md). You choose your attachments (MCPs). You zero it to your specifications. The weapon that wins firefights because you've built a relationship with it."
            keyTools={[
              "Claude Code",
              "CLAUDE.md",
              "MCP servers",
              "Hooks",
              "Skills",
              "/compact",
              "/clear",
            ]}
            isWeapon
          />
        )}
        {activeKit === "knife" && (
          <KitDetail
            key="knife"
            color="google-green"
            borderClass="border-google-green/30"
            glowClass="glow-green"
            classification="Multi-role utility instrument"
            cost="$20/mo"
            role="Everything that ISN'T the mission — research, email, documents, storage, ambient AI"
            strength="Breadth, ecosystem integration, always-on, zero configuration"
            weightClass="Near-zero — runs on a completely different supply line"
            whenToDeploy="When breadth beats depth. Research sweeps. Document summarization. Email drafting. Calendar management. The 30 ambient tasks that support the mission."
            operatorNote="A Swiss Army knife blade will cut rope, spread butter, and open a package. But you'd never bring it to a knife fight. It does 30 things at 70% quality — and that's the entire point. You don't configure it. It just works."
            keyTools={[
              "Gemini 3 Pro",
              "Jules",
              "NotebookLM",
              "Deep Search",
              "Workspace AI",
              "2TB storage",
              "$10/mo Cloud credits",
            ]}
            hiddenSuperpower="Every task Google handles is weight Claude doesn't carry. Every PDF NotebookLM summarizes is context not burned in Claude's window. The Swiss Army knife doesn't just complement — it actively makes the weapons more effective."
          >
            <SwissArmyKnife />
          </KitDetail>
        )}
        {activeKit === "flashlight" && (
          <KitDetail
            key="flashlight"
            color="chatgpt-amber"
            borderClass="border-chatgpt-amber/30"
            glowClass="glow-amber"
            classification="Everyday carry utility"
            cost="$20/mo"
            role="The 50 micro-moments per day that need a fast answer"
            strength="Fastest draw, most familiar interface, voice mode, instant answers"
            weightClass="None — it's in your back pocket, always"
            whenToDeploy="Quick lookups, voice queries, zero-stakes questions where speed is the only thing that matters. 'What does this error mean?' 'Translate this.' 'Rephrase this sentence.'"
            operatorNote="There's a reason operators carry a sidearm even with a rifle slung across their chest. Sometimes you need an answer in 4 seconds, not 40. ChatGPT is the quickest draw — app is instant, voice mode is natural, answers are 'good enough' for 90% of quick checks."
            isFlashlight
          />
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default ThreeKits;
