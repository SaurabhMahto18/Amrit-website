
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Droplet,
  Sprout,
  FlaskConical,
  Filter,
  Zap,
  Package,
  CheckCircle,
  ArrowDown,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Pre-Filtration",
    subtitle: "The First Step",
    description:
      "Initial filtration helps remove larger particles and prepares water for the next purification stages.",
    icon: Filter,
    color: "from-cyan-400 to-blue-500",
  },
  {
    number: "02",
    title: "Sediment & Carbon",
    subtitle: "Deeper Cleaning",
    description:
      "Suitable sediment and carbon filters help reduce suspended particles, chlorine and unwanted odours.",
    icon: Sprout,
    color: "from-blue-400 to-indigo-500",
  },
  {
    number: "03",
    title: "Reverse Osmosis",
    subtitle: "Advanced Filtration",
    description:
      "Where an RO system is installed, its membrane reduces dissolved salts and selected contaminants.",
    icon: Droplet,
    color: "from-cyan-300 to-teal-500",
  },
  {
    number: "04",
    title: "Mineral & pH Balance",
    subtitle: "Quality Control",
    description:
      "Water composition is checked and adjusted according to the actual treatment process and applicable standards.",
    icon: FlaskConical,
    color: "from-indigo-400 to-blue-600",
  },
  {
    number: "05",
    title: "Final Polishing",
    subtitle: "Fresh Taste",
    description:
      "An appropriate post-treatment filter can help improve taste and reduce residual odours.",
    icon: Zap,
    color: "from-sky-400 to-cyan-500",
  },
  {
    number: "06",
    title: "Sanitisation",
    subtitle: "Hygiene Matters",
    description:
      "Water and reusable jars are handled hygienically. UV or ozone treatment is used only where installed.",
    icon: CheckCircle,
    color: "from-teal-400 to-emerald-500",
  },
  {
    number: "07",
    title: "Filling & Delivery",
    subtitle: "Ready for You",
    description:
      "Jars are filled, sealed and prepared for delivery to customers in the service area.",
    icon: Package,
    color: "from-blue-400 to-cyan-400",
  },
];

function ProcessCard({ step, index, reducedMotion }) {
  const Icon = step.icon;

  return (
    <motion.article
      initial={reducedMotion ? false : { opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: reducedMotion ? 0 : 0.45, ease: "easeOut" }}
      className="relative flex min-h-[350px] flex-col justify-between overflow-hidden
        rounded-[2rem] border border-white/15 bg-slate-900/95 p-7
        shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl
        sm:min-h-[380px] sm:p-10"
      style={{
        zIndex: index + 1,
        top: `${index * 12}px`,
      }}
    >
      {/* Decorative glow */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -right-16 -top-16 h-52 w-52
          rounded-full bg-gradient-to-br ${step.color} opacity-15 blur-3xl`}
      />

      <div className="relative z-10 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-bold tracking-[0.3em] text-cyan-300">
            STEP {step.number}
          </p>
          <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
            {step.subtitle}
          </p>
        </div>

        <div
          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl
            bg-gradient-to-br ${step.color} shadow-lg shadow-cyan-950/30`}
        >
          <Icon className="h-7 w-7 text-white" aria-hidden="true" />
        </div>
      </div>

      <div className="relative z-10 my-8">
        <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
          {step.title}
        </h3>
        <p className="mt-4 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
          {step.description}
        </p>
      </div>

      <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-5">
        <span className="text-sm font-medium text-slate-400">
          Amrit Jal Purification
        </span>
        <span className="text-3xl font-black text-white/10">
          {step.number}
        </span>
      </div>
    </motion.article>
  );
}

export default function Process() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="relative bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950
        px-5 py-20 text-white sm:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">

          {/* LEFT: Sticky heading and content */}
          <div className="relative">
            <div className="lg:sticky lg:top-24 lg:flex lg:min-h-[75vh]
              lg:flex-col lg:justify-center">

              <motion.div
                initial={reducedMotion ? false : { opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: reducedMotion ? 0 : 0.6 }}
              >
                <span className="inline-flex items-center gap-2 rounded-full
                  border border-cyan-400/30 bg-cyan-400/10 px-4 py-2
                  text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                  <Droplet className="h-4 w-4" />
                  From Source to You
                </span>

                <h2
                  id="process-heading"
                  className="mt-7 text-4xl font-black leading-tight
                    tracking-tight sm:text-5xl xl:text-6xl"
                >
                  Every Drop
                  <span className="block bg-gradient-to-r from-cyan-300
                    to-blue-400 bg-clip-text text-transparent">
                    Has a Journey.
                  </span>
                </h2>

                <p className="mt-6 max-w-lg text-base leading-8 text-slate-300 sm:text-lg">
                  Discover the journey of water through treatment, quality
                  checks and hygienic handling before it reaches your home.
                </p>

                <div className="mt-9 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center
                    rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
                    <Droplet className="h-6 w-6 text-cyan-300" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">
                      The Amrit Jal Process
                    </p>
                    <p className="mt-1 text-sm text-slate-400">
                      Explore all {steps.length} stages
                    </p>
                  </div>
                </div>

                <p className="mt-10 hidden text-sm text-cyan-200/70 lg:block">
                  Scroll down to explore each stage
                  <span className="ml-2 inline-block animate-bounce">↓</span>
                </p>
              </motion.div>
            </div>
          </div>

          {/* RIGHT: Overlapping scroll cards */}
          <div className="relative min-w-0">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="sticky mb-8"
                style={{
                  top: `calc(90px + ${index * 10}px)`,
                  zIndex: index + 1,
                }}
              >
                <ProcessCard
                  step={step}
                  index={index}
                  reducedMotion={reducedMotion}
                />
              </div>
            ))}
          </div>

        </div>

        <p className="mt-10 text-center text-xs leading-6 text-slate-400">
          Actual treatment stages depend on the equipment installed and
          the water-quality requirements.
        </p>
      </div>
    </section>
  );
}
