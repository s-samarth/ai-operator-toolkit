import { motion } from "framer-motion";

interface KitDetailProps {
  color: string;
  borderClass: string;
  glowClass: string;
  classification: string;
  cost: string;
  role: string;
  strength: string;
  weightClass: string;
  whenToDeploy: string;
  operatorNote: string;
  keyTools?: string[];
  keyToolsLabel?: string;
  hiddenSuperpower?: string;
  isFlashlight?: boolean;
  isWeapon?: boolean;
  children?: React.ReactNode;
}

const statItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.08, duration: 0.3 },
  }),
};

const KitDetail = ({
  color,
  borderClass,
  glowClass,
  classification,
  cost,
  role,
  strength,
  weightClass,
  whenToDeploy,
  operatorNote,
  keyTools,
  keyToolsLabel,
  hiddenSuperpower,
  isFlashlight,
  isWeapon,
  children,
}: KitDetailProps) => {
  const stats = [
    { label: "CLASSIFICATION", value: classification },
    { label: "COST", value: cost },
    { label: "ROLE", value: role },
    { label: "STRENGTH", value: strength },
    { label: "WEIGHT CLASS", value: weightClass },
    { label: "WHEN TO DEPLOY", value: whenToDeploy },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, height: 0 }}
      animate={{ opacity: 1, y: 0, height: "auto" }}
      exit={{ opacity: 0, y: 20, height: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="overflow-hidden"
    >
      <div
        className={`mt-6 border rounded-lg p-6 sm:p-8 bg-background relative overflow-hidden ${borderClass} ${glowClass}`}
      >
        {isFlashlight && (
          <div className="absolute inset-0 flashlight-beam pointer-events-none" />
        )}

        {children}

        <div className="relative z-10 grid sm:grid-cols-2 gap-4">
          {stats.map(({ label, value }, i) => (
            <motion.div
              key={label}
              custom={i}
              initial={isFlashlight ? "hidden" : undefined}
              animate={isFlashlight ? "visible" : undefined}
              variants={isFlashlight ? statItemVariants : undefined}
            >
              <p className={`label-mono text-${color} text-[10px] mb-1`}>
                {label}
              </p>
              <p className="text-body-custom text-xs leading-relaxed">
                {value}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 mt-6 pt-6 border-t border-border">
          <p className={`label-mono text-${color} text-[10px] mb-1`}>
            OPERATOR NOTE
          </p>
          <p className="text-body-custom text-sm leading-relaxed italic">
            {operatorNote}
          </p>
        </div>

        {keyTools && (
          <div className="relative z-10 mt-4">
            <p className={`label-mono text-${color} text-[10px] mb-2`}>
              {keyToolsLabel || "KEY TOOLS"}
            </p>
            {isWeapon ? (
              <div className="flex flex-wrap gap-2">
                {keyTools.map((tool, i) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.12, duration: 0.3 }}
                    className="px-2 py-1 rounded text-[11px] font-mono border border-claude-blue/30 bg-claude-blue/5 text-claude-blue"
                    style={{
                      boxShadow:
                        "0 0 8px -2px hsl(228 100% 71% / 0.2)",
                    }}
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            ) : (
              <p className="text-body-custom text-xs font-mono leading-relaxed">
                {keyTools.join(", ")}
              </p>
            )}
          </div>
        )}

        {hiddenSuperpower && (
          <div className="relative z-10 mt-4 p-4 rounded bg-surface border border-border">
            <p className={`label-mono text-${color} text-[10px] mb-1`}>
              THE HIDDEN SUPERPOWER
            </p>
            <p className="text-body-custom text-xs leading-relaxed">
              {hiddenSuperpower}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default KitDetail;
