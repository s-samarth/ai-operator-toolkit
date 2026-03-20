import ScrollReveal from "./ScrollReveal";
import SectionWrapper from "./SectionWrapper";

const proStats = [
  { label: "CALLSIGN", value: "Precision" },
  { label: "PLAN", value: "Pro ($20/mo)" },
  { label: "ROUNDS PER KILL", value: "3 (precise)" },
  { label: "LOADOUT WEIGHT", value: "65% capacity" },
  { label: "MISSION TRANSITIONS", value: "Clean extraction between ops (/clear)" },
  { label: "ERROR RECOVERY", value: "Checkpoint rewind (Esc Esc) — 1 clean retry" },
  { label: "PLANNING", value: "Reconnaissance before engagement (plan mode)" },
  { label: "EQUIPMENT", value: "1-2 MCPs, selected per mission" },
  { label: "DAILY OUTPUT", value: "15 missions completed" },
];

const maxStats = [
  { label: "CALLSIGN", value: "Spray & Pray" },
  { label: "PLAN", value: "Max 20x ($200/mo)" },
  { label: "ROUNDS PER KILL", value: "50 (wasted)" },
  { label: "LOADOUT WEIGHT", value: "95% capacity" },
  { label: "MISSION TRANSITIONS", value: "Carries stale intel into every new op" },
  { label: "ERROR RECOVERY", value: "3 correction messages each time" },
  { label: "PLANNING", value: "Breach first, think later" },
  { label: "EQUIPMENT", value: "5 MCPs loaded \"just in case\"" },
  { label: "DAILY OUTPUT", value: "10 missions completed" },
];

const Paradox = () => (
  <SectionWrapper className="bg-surface">
    <ScrollReveal>
      <p className="label-mono mb-4">SECTION 04 // THE PARADOX</p>
      <h2 className="heading-stencil text-3xl sm:text-4xl md:text-5xl mb-12">
        WHEN <span className="text-copper">LESS AMMO</span> WINS
      </h2>
    </ScrollReveal>

    <div className="grid md:grid-cols-[1fr_auto_1fr] gap-0 items-stretch">
      {/* Pro - Winner */}
      <ScrollReveal>
        <div className="border border-google-green/30 rounded-t-lg md:rounded-l-lg md:rounded-tr-none bg-background p-5 sm:p-6 h-full relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-google-green/10 to-transparent pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-heading text-xs tracking-wider uppercase font-bold text-google-green">WINNER</span>
              <span className="w-2 h-2 rounded-full bg-google-green animate-pulse-glow" />
            </div>
            <h3 className="heading-stencil text-lg sm:text-xl text-google-green mb-5">PRO PLAN OPERATOR (SKILLED)</h3>
            {proStats.map((s, i) => (
              <div
                key={s.label}
                className={`flex justify-between py-2 border-b border-border last:border-0 ${
                  i % 2 === 0 ? "bg-surface/50" : ""
                } -mx-2 px-2 rounded-sm`}
              >
                <span className="font-mono text-[10px] text-muted-custom tracking-wider">{s.label}</span>
                <span className="font-mono text-[11px] text-body-custom text-right ml-4">{s.value}</span>
              </div>
            ))}
            <div className="mt-5 pt-4 border-t border-google-green/20">
              <p className="label-mono text-google-green text-[10px] mb-2">OPERATIONAL NOTES</p>
              <p className="text-body-custom text-xs leading-relaxed italic">
                Every bullet intentional. Swaps loadout between missions. Uses Haiku for quick fixes, Sonnet for standard work, Opus for architecture. Context stays below 50% through proactive compaction.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* VS divider */}
      <div className="flex flex-col items-center justify-center py-4 md:py-0 md:px-6 relative">
        <div className="hidden md:block absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-copper/30 to-transparent" />
        <div
          className="heading-stencil text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-copper font-extrabold animate-pulse-glow"
          style={{ textShadow: "0 0 30px hsl(24 58% 60% / 0.4)" }}
        >
          VS
        </div>
      </div>

      {/* Max - Loser */}
      <ScrollReveal delay={0.15}>
        <div className="border border-destructive/30 rounded-b-lg md:rounded-r-lg md:rounded-bl-none bg-background p-5 sm:p-6 h-full relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-bl from-destructive/10 to-transparent pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-heading text-xs tracking-wider uppercase font-bold text-destructive">LOSER</span>
              <span className="w-2 h-2 rounded-full bg-destructive animate-pulse-glow" />
            </div>
            <h3 className="heading-stencil text-lg sm:text-xl text-destructive mb-5">MAX 20x OPERATOR (UNSKILLED)</h3>
            {maxStats.map((s, i) => (
              <div
                key={s.label}
                className={`flex justify-between py-2 border-b border-border last:border-0 ${
                  i % 2 === 0 ? "bg-surface/50" : ""
                } -mx-2 px-2 rounded-sm`}
              >
                <span className="font-mono text-[10px] text-muted-custom tracking-wider">{s.label}</span>
                <span className="font-mono text-[11px] text-body-custom text-right ml-4">{s.value}</span>
              </div>
            ))}
            <div className="mt-5 pt-4 border-t border-destructive/20">
              <p className="label-mono text-destructive text-[10px] mb-2">OPERATIONAL NOTES</p>
              <p className="text-body-custom text-xs leading-relaxed italic">
                27% of capacity wasted on weapons never drawn. Sends correction messages instead of rewinding to checkpoints. Uses Opus to open doors Haiku could handle. Context fills with wasted shots before missions complete.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>

    <ScrollReveal delay={0.3}>
      <div className="mt-10 text-center max-w-2xl mx-auto">
        <p className="text-body-custom text-sm leading-relaxed">
          <span className="text-bright font-semibold">Ammo</span> (plan tier) determines how long you can fight.{" "}
          <span className="text-bright font-semibold">Weight management</span> (context discipline) determines how well you fight.{" "}
          <span className="text-bright font-semibold">Marksmanship</span> (prompt quality) determines how much you accomplish per round.
        </p>
        <p className="text-muted-custom text-xs mt-4 italic">
          A Max 20x plan with no discipline is a rookie with unlimited ammo — 10,000 rounds fired, fewer targets hit than the veteran who fired 200.
        </p>
      </div>
    </ScrollReveal>
  </SectionWrapper>
);

export default Paradox;
