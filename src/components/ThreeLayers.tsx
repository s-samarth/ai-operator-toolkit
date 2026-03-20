import ScrollReveal from "./ScrollReveal";
import SectionWrapper from "./SectionWrapper";

const layers = [
  {
    badge: "FOUNDATIONAL",
    badgeColor: "bg-copper/20 text-copper border-copper/40",
    title: "CARRY WEIGHT DISCIPLINE",
    subtitle: "Resource Management",
    content: "What to carry, when to drop it. /clear between missions. /compact at 50% context with specific focus instructions. Swap MCPs per task type. Keep CLAUDE.md pruned. This is the difference between 65% loaded (mobile, sharp) and 95% loaded (sluggish, can't react). The baseline discipline everything else builds on.",
  },
  {
    badge: "ADVANCED",
    badgeColor: "bg-claude-blue/20 text-claude-blue border-claude-blue/40",
    title: "SHOT ACCURACY",
    subtitle: "Marksmanship",
    content: "Precise prompts using the CIF framework: Context, Intent, Format. Plan before execute. Esc Esc rewind instead of correction messages. @ for direct file targeting. Structured prompts that give Claude exactly what it needs. Same ammo, 3x more completed missions.",
  },
  {
    badge: "ELITE",
    badgeColor: "bg-chatgpt-amber/20 text-chatgpt-amber border-chatgpt-amber/40",
    title: "BATTLEFIELD IQ",
    subtitle: "Field Craft",
    content: "Knowing WHEN to deploy what. Haiku (the knife) for trivial fixes. Sonnet (the rifle) for standard coding. Opus (the sniper) for architecture and complex planning. When to go loud (multi-file features) vs stealth (3-minute bug fix). When to spawn subagents (air support). This only comes from reps.",
  },
];

const ThreeLayers = () => (
  <SectionWrapper>
    <ScrollReveal>
      <p className="label-mono mb-4">SECTION 05 // THREE LAYERS OF SKILL</p>
      <h2 className="heading-stencil text-3xl sm:text-4xl md:text-5xl mb-12">
        THE <span className="text-copper">SKILL STACK</span>
      </h2>
    </ScrollReveal>

    <div className="space-y-4">
      {layers.map((layer, i) => (
        <ScrollReveal key={layer.title} delay={i * 0.1}>
          <div className="card-tactical p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
              <div className="flex-shrink-0">
                <span className={`inline-block px-3 py-1 text-[10px] font-mono tracking-widest border rounded ${layer.badgeColor}`}>
                  {layer.badge}
                </span>
                <p className="text-muted-custom text-xs mt-2 font-mono">{layer.subtitle}</p>
              </div>
              <div>
                <h3 className="heading-stencil text-lg sm:text-xl mb-3">{layer.title}</h3>
                <p className="text-body-custom text-sm leading-relaxed">{layer.content}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  </SectionWrapper>
);

export default ThreeLayers;
