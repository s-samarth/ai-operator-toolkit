import ScrollReveal from "./ScrollReveal";
import SectionWrapper from "./SectionWrapper";

const pillars = [
  {
    title: "CLAUDE = THE MISSION",
    color: "text-claude-blue",
    borderColor: "border-claude-blue/30",
    content: "Deploy when precision is the point. Building. Coding. Writing that needs your voice. Analysis that requires deep reasoning. You gear up for this — configure CLAUDE.md, choose MCPs, manage context, plan before executing. This is the operation.",
  },
  {
    title: "GOOGLE AI PRO = THE ECOSYSTEM",
    color: "text-google-green",
    borderColor: "border-google-green/30",
    content: "Deploy when breadth is the point. Research. Document processing. Email. Calendar. Storage. The 30 ambient tasks that support the mission but aren't the mission. Zero configuration. Zero tactical ammo spent. A different supply line entirely.",
  },
  {
    title: "CHATGPT = THE UTILITY",
    color: "text-chatgpt-amber",
    borderColor: "border-chatgpt-amber/30",
    content: "Deploy when speed is the point. The 50 micro-moments. Quick lookups. Voice queries. \"Good enough\" answers to low-stakes questions. Fastest draw, lowest overhead. You reach for it without thinking — and that's exactly the point.",
  },
];

const Closing = () => (
  <SectionWrapper>
    <ScrollReveal>
      <p className="label-mono mb-4">SECTION 11 // CLOSING</p>
      <h2 className="heading-stencil text-3xl sm:text-4xl md:text-5xl mb-12">
        THE COMPLETE <span className="text-copper">OPERATOR'S DOCTRINE</span>
      </h2>
    </ScrollReveal>

    <div className="grid md:grid-cols-3 gap-6 mb-16">
      {pillars.map((p, i) => (
        <ScrollReveal key={p.title} delay={i * 0.1}>
          <div className={`border rounded-lg p-6 bg-surface h-full ${p.borderColor}`}>
            <h3 className={`heading-stencil text-sm sm:text-base mb-4 ${p.color}`}>{p.title}</h3>
            <p className="text-body-custom text-sm leading-relaxed">{p.content}</p>
          </div>
        </ScrollReveal>
      ))}
    </div>

    <ScrollReveal delay={0.3}>
      <div className="text-center max-w-3xl mx-auto">
        <div className="crosshair-line w-32 mx-auto mb-8" />
        <blockquote className="heading-stencil text-xl sm:text-2xl md:text-3xl leading-snug text-copper">
          "The operator's edge isn't having the best single tool. It's knowing which one to reach for before your hand even moves."
        </blockquote>
        <div className="crosshair-line w-32 mx-auto mt-8" />
      </div>
    </ScrollReveal>
  </SectionWrapper>
);

export default Closing;
