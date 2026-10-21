import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Quote, Droplets, Star } from "lucide-react";

const testimonials = [
  {
    name: "Customer Review",
    role: "Home Delivery",
    text: "Looking for convenient drinking water delivery for your everyday needs? Amrit Jal makes ordering simple.",
  },
  {
    name: "Customer Review",
    role: "Regular Supply",
    text: "A convenient way to arrange drinking water jars for your home, shop or workplace.",
  },
  {
    name: "Customer Review",
    role: "Local Delivery",
    text: "Discover a simple ordering experience for your daily drinking water requirements.",
  },
];

function TestimonialCard({ testimonial, index, reduceMotion }) {
  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: reduceMotion ? 0 : index * 0.1 }}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      className="group flex h-full w-full flex-col rounded-3xl border border-cyan-100 bg-white p-6 shadow-lg shadow-blue-950/5 transition-shadow duration-300 hover:shadow-xl hover:shadow-cyan-900/10 sm:p-7"
    >
      <div className="mb-5 flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 transition-colors duration-300 group-hover:bg-cyan-500 group-hover:text-white">
          <Quote size={23} aria-hidden="true" />
        </div>

        <div
          className="flex items-center gap-1 rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1.5 text-xs font-semibold text-cyan-800"
          aria-label="Amrit Jal"
        >
          <Droplets size={14} aria-hidden="true" />
          Amrit Jal
        </div>
      </div>

      <p className="flex-1 text-sm leading-7 text-slate-600 sm:text-base">
        {testimonial.text}
      </p>

      <div className="mt-6 border-t border-slate-100 pt-5">
        <h3 className="font-bold text-slate-900">{testimonial.name}</h3>
        <p className="mt-1 text-xs font-medium tracking-wide text-cyan-700">
          {testimonial.role}
        </p>
      </div>
    </motion.article>
  );
}

export default function HeroTestimonials() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative isolate overflow-hidden bg-gradient-to-b from-white via-cyan-50/70 to-white py-20 sm:py-24 lg:py-28"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-0 -z-10 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-24 -z-10 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-cyan-800 shadow-sm sm:text-sm">
            <Droplets size={16} aria-hidden="true" />
            The Amrit Jal Experience
          </span>

          <h2
            id="testimonials-heading"
            className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl md:text-5xl"
          >
            Water Delivery,{" "}
            <span className="bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">
              Made Simple
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Convenient 20-litre drinking water jar ordering for homes,
            shops and workplaces in Barhog, Bihar.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.role}-${index}`}
              testimonial={testimonial}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 flex flex-col items-center justify-between gap-5 rounded-3xl border border-cyan-100 bg-white/90 p-6 shadow-lg shadow-blue-950/5 sm:flex-row sm:p-8"
        >
          <div>
            <h3 className="text-xl font-bold text-slate-950 sm:text-2xl">
              Need water for your home or business?
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
              Contact Amrit Jal to enquire about local delivery and ordering.
            </p>
          </div>

          <a
            href="https://wa.me/917366973933"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 rounded-full bg-cyan-600 px-7 py-3 font-bold text-white shadow-lg shadow-cyan-900/15 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-200 sm:w-auto"
          >
            Enquire on WhatsApp
            <span aria-hidden="true">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
