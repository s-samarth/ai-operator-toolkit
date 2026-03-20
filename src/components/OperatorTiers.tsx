import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import SectionWrapper from "./SectionWrapper";

const tiers = [
  {
    name: "CIVILIAN VOLUNTEER",
    plan: "Free Plan",
    subtitle: "A pistol and a prayer",
    ammo: 8,
    arsenal: 30,
    description: "Two magazines, no body armor, restricted areas. Can learn the basics. Can't run real operations. You'll feel the limits within minutes.",
    intensity: "opacity-50",
    borderColor: "border-border",
    accentColor: "text-muted-custom",
  },
  {
    name: "SPECIAL FORCES OPERATOR",
    plan: "Pro — $20/mo",
    subtitle: "Standard issue, standard excellence",
    ammo: 45,
    arsenal: 70,
    description: "Solid ammo allocation. Sonnet as the primary workhorse, limited Opus bursts for planning. The sweet spot where skill determines outcome more than raw resources.",
    intensity: "",
    borderColor: "border-copper",
    accentColor: "text-copper",
    recommended: true,
  },
  {
    name: "TIER 1 OPERATOR",
    plan: "Max — $100/mo",
    subtitle: "Drum magazines and extended ops",
    ammo: 75,
    arsenal: 90,
    description: "5x the ammo. Extended Opus access — sustained heavy fire instead of controlled bursts. Same gear, more sustained firepower.",
    intensity: "",
    borderColor: "border-chatgpt-amber",
    accentColor: "text-chatgpt-amber",
  },
  {
    name: "UNLIMITED ARMORY",
    plan: "Max 20x — $200/mo",
    subtitle: "Air support on speed dial",
    ammo: 100,
    arsenal: 100,
    description: "20x ammo. Full-auto Opus all day. Raw firepower without resource constraints. But the backpack is still the same size — 200K tokens for everyone.",
    intensity: "",
    borderColor: "border-destructive",
    accentColor: "text-destructive",
  },
];

const GaugeBar = ({ value, label, color }: { value: number; label: string; color: string }) => (
  <div className="mb-3">
    <div className="flex justify-between label-mono text-[10px] mb-1">
      <span>{label}</span>
      <span>{value}%</span>
    </div>
    <div className="h-2 bg-background rounded-full overflow-hidden">
      <motion.div
        className={`h-full rounded-full ${color}`}
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      />
    </div>
  </div>
);

const OperatorTiers = () => (
  <SectionWrapper>
    <ScrollReveal>
      <p className="label-mono mb-4">SECTION 03 // OPERATOR TIERS</p>
      <h2 className="heading-stencil text-3xl sm:text-4xl md:text-5xl mb-12">
        THE <span className="text-copper">AMMO SUPPLY CHAIN</span>
      </h2>
    </ScrollReveal>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {tiers.map((tier, i) => (
        <ScrollReveal key={tier.name} delay={i * 0.1}>
          <motion.div
            className={`relative card-tactical p-5 sm:p-6 h-full ${tier.borderColor} ${tier.intensity}`}
            whileHover={{ scale: 1.03, y: -4 }}
            transition={{ duration: 0.3 }}
          >
            {tier.recommended && (
              <div className="absolute -top-3 left-4 px-3 py-0.5 bg-copper text-primary-foreground font-mono text-[10px] tracking-wider rounded-sm font-bold">
                RECOMMENDED
              </div>
            )}
            <h3 className={`font-heading text-sm tracking-wider uppercase font-bold ${tier.accentColor} mb-1`}>
              {tier.name}
            </h3>
            <p className="font-mono text-[10px] text-muted-custom mb-1">{tier.plan}</p>
            <p className="text-body-custom text-xs italic mb-5">{tier.subtitle}</p>

            <GaugeBar value={tier.ammo} label="AMMO SUPPLY" color={tier.ammo < 50 ? "bg-copper" : tier.ammo < 80 ? "bg-chatgpt-amber" : "bg-destructive"} />
            <GaugeBar value={tier.arsenal} label="ARSENAL ACCESS" color="bg-claude-blue" />

            <p className="text-body-custom text-xs leading-relaxed mt-4">{tier.description}</p>
          </motion.div>
        </ScrollReveal>
      ))}
    </div>

    <ScrollReveal delay={0.4}>
      <div className="mt-12 border border-copper/40 rounded-lg p-6 sm:p-8 bg-surface text-center">
        <p className="heading-stencil text-lg sm:text-xl md:text-2xl mb-3">
          AMMO <span className="text-copper">≠</span> CARRY WEIGHT
        </p>
        <p className="text-body-custom text-sm leading-relaxed max-w-2xl mx-auto">
          A Max 20x subscription gives you 20x the ammunition. It does <span className="text-bright font-semibold">NOT</span> give you a bigger backpack. The context window is 200K tokens for everyone — Free, Pro, Max, Max 20x. You can have infinite bullets but still only carry 200 lbs.
        </p>
      </div>
    </ScrollReveal>
  </SectionWrapper>
);

export default OperatorTiers;
