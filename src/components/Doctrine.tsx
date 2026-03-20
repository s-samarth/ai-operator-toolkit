import { AlertTriangle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionWrapper from "./SectionWrapper";

const rules = [
  {
    number: "01",
    title: "Building or coding something → CLAUDE (tactical weapon)",
    content: "If you're creating code, writing something that needs a specific voice, or doing complex multi-step analysis — this is a mission. Gear up. Load your CLAUDE.md. Choose your MCPs. Enter plan mode. Execute with discipline.",
    examples: "Shipping a feature, refactoring a codebase, writing a long-form article, building an app, debugging a complex system",
    color: "text-claude-blue",
  },
  {
    number: "02",
    title: "Researching or processing documents → GOOGLE AI PRO (Swiss Army knife)",
    content: "If the task is about intake (reading, summarizing, researching) rather than output (building, writing, creating) — pull out the multi-tool. It handles broad sweeps without burning any tactical ammo.",
    examples: "Summarizing a research paper, finding job postings, organizing notes from a video, drafting routine emails",
    color: "text-google-green",
  },
  {
    number: "03",
    title: "Quick lookup or micro-moment → CHATGPT (flashlight)",
    content: "If you need an answer in under 10 seconds and context/customization don't matter — fastest draw wins. Don't overthink it.",
    examples: '"How does useEffect cleanup work?", "What\'s 15% of 340?", "Translate this phrase", voice queries while doing something else',
    color: "text-chatgpt-amber",
  },
  {
    number: "04",
    title: "The tool choice depends on what you need, not what you have",
    content: "Need precision? → Claude. Even on the Free plan, a well-crafted prompt beats a sloppy Max prompt. Need breadth? → Google AI Pro. Need speed? → ChatGPT.",
    color: "text-copper",
  },
  {
    number: "05",
    title: "The Swiss Army knife protects the tactical weapons",
    content: "Every research task Google handles is an MCP you don't need in Claude Code. Every PDF summarized by NotebookLM is context not burned in Claude's window. The ecosystem doesn't just complement — it actively reduces the load on your primary weapons.",
    color: "text-google-green",
  },
];

const antiPatterns = [
  "USING CLAUDE FOR SWISS ARMY KNIFE TASKS → Wasting tactical ammo on research. Like loading a sniper rifle to open a can.",
  "USING CHATGPT FOR MISSIONS → Bringing a flashlight to a firefight. It'll give you an answer but not the right one.",
  "USING GOOGLE FOR PRECISION WORK → Trying to do surgery with a can opener. 70% quality isn't enough when the outcome matters.",
  "LOADING 5 MCPs \"JUST IN CASE\" → 27% of your carry weight gone before the mission starts.",
  "NEVER CLEARING BETWEEN TASKS → Carrying yesterday's mud into today's clean room. /clear is extraction. Use it.",
  "SENDING CORRECTIONS INSTEAD OF REWINDING → Three \"actually what I meant was...\" messages burn 3x the context. Esc Esc → one clean retry.",
];

const Doctrine = () => (
  <SectionWrapper className="bg-surface">
    <ScrollReveal>
      <p className="label-mono mb-4">SECTION 08 // THE DOCTRINE</p>
      <h2 className="heading-stencil text-3xl sm:text-4xl md:text-5xl mb-12">
        RULES OF <span className="text-copper">ENGAGEMENT</span>
      </h2>
    </ScrollReveal>

    <div className="space-y-4 mb-16">
      {rules.map((rule, i) => (
        <ScrollReveal key={rule.number} delay={i * 0.08}>
          <div className="card-tactical p-5 sm:p-6">
            <div className="flex gap-4">
              <span className={`font-heading text-2xl sm:text-3xl font-bold ${rule.color} opacity-40 flex-shrink-0`}>
                {rule.number}
              </span>
              <div>
                <h3 className="heading-stencil text-sm sm:text-base mb-2">{rule.title}</h3>
                <p className="text-body-custom text-sm leading-relaxed">{rule.content}</p>
                {rule.examples && (
                  <p className="text-muted-custom text-xs font-mono mt-2 italic">{rule.examples}</p>
                )}
              </div>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>

    <ScrollReveal>
      <div className="border border-destructive/30 rounded-lg p-6 sm:p-8 bg-background">
        <div className="flex items-center gap-3 mb-6">
          <AlertTriangle className="w-5 h-5 text-destructive" />
          <h3 className="heading-stencil text-lg text-destructive">COMMON MISTAKES</h3>
        </div>
        <div className="space-y-3">
          {antiPatterns.map((ap, i) => (
            <div key={i} className="flex gap-3 items-start -mx-2 px-2 py-1.5 rounded transition-colors hover:bg-surface-elevated/50">
              <span className="text-destructive font-mono text-xs mt-0.5">✕</span>
              <p className="text-body-custom text-sm leading-relaxed">{ap}</p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  </SectionWrapper>
);

export default Doctrine;
