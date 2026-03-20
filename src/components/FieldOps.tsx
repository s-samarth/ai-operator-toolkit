import { Trash2, RotateCcw, Navigation, Compass, RefreshCw } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionWrapper from "./SectionWrapper";

const maneuvers = [
  {
    icon: Trash2,
    command: "/compact",
    title: "DROP EMPTY MAGS",
    description: "Mid-mission, compress spent conversation history while keeping the mission context alive. A 70,000-token conversation compresses to ~4,000 tokens. Lighter, faster, still know where you're going.",
    tip: "/compact Focus on the auth module and remaining TODOs — tell it what to preserve.",
  },
  {
    icon: RotateCcw,
    command: "/clear",
    title: "EXTRACT TO BASE",
    description: "Full reset. Helicopter back to base. Fresh loadout, fresh context. Do this BETWEEN missions, not during them.",
    tip: "/rename first to tag the extraction point. /resume later to redeploy.",
  },
  {
    icon: Navigation,
    command: "Esc Esc",
    title: "CHECKPOINT RESPAWN",
    description: "Went left when you should have gone right? Don't radio 3 corrections — respawn at the last checkpoint. Restore conversation only, code only, or both.",
    tip: "One clean respawn beats 3 garbled corrections.",
  },
  {
    icon: Compass,
    command: "Plan mode",
    title: "RECON BEFORE ASSAULT",
    description: '"I want to build X. What\'s the approach?" before touching a single file. Use Opus for planning, Sonnet for execution.',
    tip: "Survey first. Breach second.",
  },
  {
    icon: RefreshCw,
    command: "/model",
    title: "SWITCH WEAPONS",
    description: "Match the weapon to the moment. Haiku for trivial tasks. Sonnet for standard work. Opus for complex reasoning. Switching mid-session costs nothing and changes everything.",
  },
];

const FieldOps = () => (
  <SectionWrapper className="bg-surface">
    <ScrollReveal>
      <p className="label-mono mb-4">SECTION 10 // FIELD OPERATIONS</p>
      <h2 className="heading-stencil text-3xl sm:text-4xl md:text-5xl mb-12">
        SESSION MANAGEMENT AS <span className="text-copper">TACTICS</span>
      </h2>
    </ScrollReveal>

    <div className="space-y-4">
      {maneuvers.map((m, i) => {
        const Icon = m.icon;
        return (
          <ScrollReveal key={m.title} delay={i * 0.08}>
            <div className="card-tactical p-5 sm:p-6">
              <div className="flex gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded bg-surface-elevated flex items-center justify-center">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-copper" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="heading-stencil text-sm sm:text-base">{m.title}</h3>
                    <code className="font-mono text-[10px] px-2 py-0.5 bg-surface-elevated rounded text-copper">{m.command}</code>
                  </div>
                  <p className="text-body-custom text-sm leading-relaxed">{m.description}</p>
                  {m.tip && (
                    <p className="text-muted-custom text-xs font-mono mt-2 italic">{m.tip}</p>
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>
        );
      })}
    </div>
  </SectionWrapper>
);

export default FieldOps;
