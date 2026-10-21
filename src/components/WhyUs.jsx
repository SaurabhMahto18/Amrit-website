import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Clock,
  ShieldCheck,
  Recycle,
  Droplets,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Clock,
    title: "Convenient Local Delivery",
    description:
      "A convenient way to arrange 20-litre water jar delivery for your home, shop or everyday needs in Barhog.",
    color: "bg-cyan-50 text-cyan-700",
  },
  {
    icon: ShieldCheck,
    title: "Quality Conscious",
    description:
      "We believe in responsible water handling and transparent communication about available quality information.",
    color: "bg-teal-50 text-teal-700",
  },
  {
    icon: Recycle,
    title: "Responsible Jar Use",
    description:
      "Reusable water jars can help reduce single-use packaging when handled, cleaned and maintained appropriately.",
    color: "bg-amber-50 text-amber-700",
  },
  {
    icon: HeartHandshake,
    title: "Customer First",
    description:
      "Clear communication, convenient ordering and a helpful local service experience matter to us.",
    color: "bg-sky-50 text-sky-700",
  },
];

function FeatureCard({ feature, index, reduceMotion }) {
  const Icon = feature.icon;

  return (
    <motion.article
      initial={
        reduceMotion
          ? false
          : { opacity: 0, y: 24 }
      }
      whileInView={
        reduceMotion
          ? undefined
          : { opacity: 1, y: 0 }
      }
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: reduceMotion ? 0 : 0.5,
        delay: reduceMotion ? 0 : index * 0.09,
        ease: "easeOut",
      }}
      whileHover={reduceMotion ? undefined : { y: -5 }}
      className="group h-full rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition-shadow duration-300 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-950/5 sm:p-7"
    >
      <div className="flex items-start gap-4">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${feature.color} transition-transform duration-300 group-hover:scale-105`}
        >
          <Icon size={24} strokeWidth={1.8} aria-hidden="true" />
        </div>

        <div>
          <h3 className="text-lg font-bold leading-snug text-slate-950">
            {feature.title}
          </h3>

          <p className="mt-3 text-sm leading-7 text-slate-600">
            {feature.description}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export default function WhyUs() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="why"
      aria-labelledby="why-heading"
      className="relative isolate overflow-hidden bg-gradient-to-b from-white via-cyan-50/50 to-white py-20 sm:py-24 lg:py-28"
    >
      {/* Decorative brand elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-0 -z-10 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-20 -z-10 h-72 w-72 rounded-full bg-amber-200/25 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Section introduction */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, x: -24 }
            }
            whileInView={
              reduceMotion
                ? undefined
                : { opacity: 1, x: 0 }
            }
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: reduceMotion ? 0 : 0.65,
              ease: "easeOut",
            }}
            className="text-center lg:text-left"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-white px-4 py-2 text-sm font-semibold text-cyan-800 shadow-sm">
              <Droplets size={17} aria-hidden="true" />
              The Amrit Jal difference
            </span>

            <h2
              id="why-heading"
              className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl md:text-5xl"
            >
              Why choose{" "}
              <span className="text-cyan-600">Amrit Jal?</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-600 sm:text-lg lg:mx-0">
              Everyday water delivery should be simple and convenient.
              We focus on local customer needs, responsible handling
              and a dependable service experience in Barhog, Bihar.
            </p>

            <div className="mt-7 flex flex-col items-center gap-3 text-sm text-slate-700 sm:flex-row sm:justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2
                  size={18}
                  className="text-teal-600"
                  aria-hidden="true"
                />
                Convenient ordering
              </span>

              <span className="hidden h-1 w-1 rounded-full bg-amber-400 sm:block" />

              <span className="inline-flex items-center gap-2">
                <CheckCircle2
                  size={18}
                  className="text-teal-600"
                  aria-hidden="true"
                />
                Local service focus
              </span>
            </div>

            <div className="mt-9 flex justify-center lg:justify-start">
              <Link
                to="/about-us"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cyan-600 px-6 py-3 font-bold text-white shadow-lg shadow-cyan-900/10 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-200"
              >
                Learn About Us
                <ArrowRight
                  size={18}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>

          {/* Feature cards */}
          <div className="grid gap-5 sm:grid-cols-2">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                feature={feature}
                index={index}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
