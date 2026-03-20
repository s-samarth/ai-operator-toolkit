import { Check, Minus } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionWrapper from "./SectionWrapper";

const essential = [
  "System prompt (~50 instructions) — the uniform. Non-negotiable.",
  "CLAUDE.md (2-4K tokens) — mission intel. You're blind without it.",
  "Primary MCP (~10K tokens) — your main weapon. Useless without it.",
  "Lint/type hook (0 context tokens) — automated defense.",
  "Context awareness habit — /context check every 3-4 exchanges.",
];

const missionDep = [
  "Additional MCPs (10K+ each) — heavy weapons for the right op.",
  "Extended CLAUDE.md with architecture docs — heavier intel for complex codebases.",
  "Multiple active skills — more training for specialized workflows.",
  "Opus model (heavier token cost per response) — overkill for routine, irreplaceable for architecture.",
];

const EssentialGear = () => (
  <SectionWrapper>
    <ScrollReveal>
      <p className="label-mono mb-4">SECTION 09 // ESSENTIAL VS LUXURY</p>
      <h2 className="heading-stencil text-3xl sm:text-4xl md:text-5xl mb-4">
        NOT ALL WEIGHT IS <span className="text-copper">DEAD WEIGHT</span>
      </h2>
      <p className="text-body-custom text-sm max-w-2xl mb-12 leading-relaxed">
        The discipline isn't minimalism — it's intentionalism. Some weight is non-negotiable. Some is mission-critical on specific deployments.
      </p>
    </ScrollReveal>

    <div className="grid md:grid-cols-2 gap-6">
      <ScrollReveal>
        <div className="border border-google-green/30 rounded-lg p-6 bg-background h-full transition-all duration-300 hover:shadow-[0_0_20px_-5px_hsl(142_71%_58%/0.15)]">
          <h3 className="heading-stencil text-sm text-google-green mb-4">ESSENTIAL — ALWAYS CARRY</h3>
          <div className="space-y-3">
            {essential.map((item, i) => (
              <div key={i} className="flex gap-3 items-start transition-transform hover:translate-x-1">
                <Check className="w-4 h-4 text-google-green flex-shrink-0 mt-0.5" />
                <p className="text-body-custom text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="border border-chatgpt-amber/30 rounded-lg p-6 bg-background h-full transition-all duration-300 hover:shadow-[0_0_20px_-5px_hsl(43_96%_56%/0.15)]">
          <h3 className="heading-stencil text-sm text-chatgpt-amber mb-4">MISSION-DEPENDENT — CARRY WHEN NEEDED</h3>
          <div className="space-y-3">
            {missionDep.map((item, i) => (
              <div key={i} className="flex gap-3 items-start transition-transform hover:translate-x-1">
                <Minus className="w-4 h-4 text-chatgpt-amber flex-shrink-0 mt-0.5" />
                <p className="text-body-custom text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>

    <ScrollReveal delay={0.2}>
      <p className="text-muted-custom text-sm text-center mt-8 max-w-xl mx-auto italic">
        A demolition expert loaded to 90% capacity with the right gear outperforms a lightweight operator at 40% who didn't bring the tools the job requires.
      </p>
    </ScrollReveal>
  </SectionWrapper>
);

export default EssentialGear;
