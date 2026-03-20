import ScrollReveal from "./ScrollReveal";
import SectionWrapper from "./SectionWrapper";

const zones = [
  { label: "COMBAT READY", range: "0-25%", width: "25%", color: "bg-google-green", glow: "shadow-[0_0_20px_hsl(145_65%_58%/0.4)]" },
  { label: "OPERATIONAL", range: "25-50%", width: "25%", color: "bg-chatgpt-amber", glow: "shadow-[0_0_20px_hsl(43_96%_56%/0.3)]" },
  { label: "OVERBURDENED", range: "50-83%", width: "33%", color: "bg-copper", glow: "shadow-[0_0_20px_hsl(25_55%_60%/0.3)]" },
  { label: "CRITICAL", range: "83%+", width: "17%", color: "bg-destructive", glow: "shadow-[0_0_20px_hsl(0_84%_60%/0.4)]" },
];

const CarryWeight = () => (
  <SectionWrapper>
    <ScrollReveal>
      <p className="label-mono mb-4">SECTION 01 // CORE PREMISE</p>
      <h2 className="heading-stencil text-3xl sm:text-4xl md:text-5xl mb-6">
        EVERY OPERATOR HAS A <span className="text-copper">WEIGHT LIMIT</span>
      </h2>
    </ScrollReveal>

    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
      {/* Gauge */}
      <ScrollReveal delay={0.1}>
        <div className="relative">
          {/* Gauge border - military style */}
          <div className="border border-border rounded-lg p-4 bg-surface">
            <div className="label-mono text-[10px] mb-3 flex justify-between">
              <span>0 TOKENS</span>
              <span>200,000 TOKENS</span>
            </div>
            <div className="flex gap-0.5 h-10 rounded overflow-hidden">
              {zones.map((z) => (
                <div
                  key={z.label}
                  className={`${z.color} ${z.glow} relative flex items-center justify-center`}
                  style={{ width: z.width }}
                >
                  <span className="font-mono text-[9px] sm:text-[10px] font-bold text-primary-foreground tracking-wider whitespace-nowrap">
                    {z.label}
                  </span>
                </div>
              ))}
            </div>
            {/* Tick marks */}
            <div className="flex justify-between mt-2">
              {[0, 25, 50, 75, 100].map((tick) => (
                <div key={tick} className="flex flex-col items-center">
                  <div className="w-px h-2 bg-muted-foreground" />
                  <span className="font-mono text-[8px] text-muted-custom mt-1">{tick}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Text */}
      <ScrollReveal delay={0.2}>
        <div className="space-y-5 text-body-custom leading-relaxed">
          <p>
            Your context window is <span className="text-bright font-semibold">200,000 tokens</span>. That's your maximum carry weight — 200 lbs. Everything you load — system prompts, configuration files, tool definitions, conversation history, file reads — eats from this one shared pool.
          </p>
          <p>
            The heavier you are, the slower you move and the worse your aim gets. More context means degraded reasoning quality. Research confirms the <span className="text-copper font-semibold">"lost in the middle"</span> problem — information buried in the middle gets deprioritized.
          </p>
          <p>
            But here's the nuance most people miss: <span className="text-bright font-semibold">the goal isn't to carry less. It's to carry SMART.</span> A fully loaded operator on the right mission outperforms a lightweight operator on the wrong one. The weight isn't the enemy — <span className="text-copper">unnecessary weight is</span>.
          </p>
          <p className="text-muted-custom text-sm italic">
            The real discipline: carry what you need for THIS mission, not what you carried on the last one.
          </p>
        </div>
      </ScrollReveal>
    </div>
  </SectionWrapper>
);

export default CarryWeight;
