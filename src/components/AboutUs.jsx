
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Droplets,
  ShieldCheck,
  Users,
  Wallet,
  HeartHandshake,
  MapPin,
  FlaskConical,
  Waves,
  Truck,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Locally Rooted",
    description:
      "Serving households and communities in Nalanda with a focus on reliable local service.",
    color: "bg-amber-50 text-amber-700",
  },
  {
    icon: ShieldCheck,
    title: "Quality Focused",
    description:
      "A structured purification process designed to support consistent water quality.",
    color: "bg-cyan-50 text-cyan-700",
  },
  {
    icon: Wallet,
    title: "Everyday Value",
    description:
      "Convenient water options for households, shops and everyday needs.",
    color: "bg-yellow-50 text-yellow-700",
  },
  {
    icon: HeartHandshake,
    title: "Community First",
    description:
      "Building lasting relationships with the people and businesses we serve.",
    color: "bg-teal-50 text-teal-700",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Water Sourcing",
    description: "Water enters the treatment process.",
    icon: Droplets,
  },
  {
    number: "02",
    title: "Filtration",
    description: "Filtration removes targeted impurities.",
    icon: Waves,
  },
  {
    number: "03",
    title: "RO Treatment",
    description: "Reverse osmosis treatment, where applicable.",
    icon: FlaskConical,
  },
  {
    number: "04",
    title: "UV Treatment",
    description: "Ultraviolet treatment, as part of the process.",
    icon: Sparkles,
  },
  {
    number: "05",
    title: "Mineral Balance",
    description: "Mineral balancing according to the process.",
    icon: CheckCircle2,
  },
  {
    number: "06",
    title: "Bottling",
    description: "Water is prepared for packaging.",
    icon: ShieldCheck,
  },
  {
    number: "07",
    title: "Delivery",
    description: "Products reach customers through delivery.",
    icon: Truck,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

function Reveal({ children, className = "", delay = 0 }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={
        shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
      }
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function AboutUs() {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    document.title = "About Amrit Jal | Our Story & Water Delivery in Nalanda";

    let description = document.querySelector(
      'meta[name="description"]'
    );

    const createdDescription = !description;

    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }

    const previousDescription = description.content;

    description.content =
      "Discover Amrit Jal, a water brand serving Nalanda, Bihar. Learn about our mission, water treatment process and commitment to local communities.";

    return () => {
      document.title = "Amrit Jal";

      if (createdDescription) {
        description.remove();
      } else {
        description.content = previousDescription;
      }
    };
  }, []);

  return (
    <main className="relative overflow-hidden bg-white text-slate-800">
      <style>{`
        @keyframes aj-float {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -12px, 0); }
        }

        @keyframes aj-ripple {
          0% { transform: scale(0.9); opacity: 0.45; }
          100% { transform: scale(1.45); opacity: 0; }
        }

        .aj-float {
          animation: aj-float 7s ease-in-out infinite;
        }

        .aj-ripple {
          animation: aj-ripple 4s ease-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .aj-float, .aj-ripple {
            animation: none !important;
          }
        }
      `}</style>

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-amber-50">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-10 -z-10 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 bottom-0 -z-10 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl"
        />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-28">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-4 py-2 text-sm font-semibold text-cyan-800 shadow-sm">
              <Droplets size={16} aria-hidden="true" />
              Our story, our purpose
            </span>

            <h1 className="mt-7 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Every drop has a{" "}
              <span className="text-cyan-600">purpose.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              At <strong className="font-semibold text-slate-900">Amrit Jal</strong>,
              our goal is to make water delivery convenient and accessible
              for families and businesses across Nalanda, Bihar.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cyan-600 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-600/20 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300"
              >
                Explore Products
                <ArrowRight size={18} aria-hidden="true" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-800 transition duration-300 hover:border-cyan-300 hover:bg-cyan-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-200"
              >
                Get in Touch
              </Link>
            </div>

            <div className="mt-9 flex items-center gap-3 text-sm text-slate-500">
              <MapPin
                size={18}
                className="shrink-0 text-cyan-600"
                aria-hidden="true"
              />
              <span>Rooted in Nalanda, Bihar</span>
            </div>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.12 }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-3 shadow-2xl shadow-cyan-900/10 sm:p-4">
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <img
                  src="https://images.unsplash.com/photo-1628169829705-78e7b51b73e5?auto=format&fit=crop&w=1200&q=80"
                  alt="Water and nature representing Amrit Jal's commitment to water"
                  width="1200"
                  height="900"
                  fetchPriority="high"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 text-white sm:bottom-7 sm:left-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100">
                    Our commitment
                  </p>
                  <p className="mt-2 text-2xl font-bold sm:text-3xl">
                    Water for everyday life.
                  </p>
                </div>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="aj-float absolute -right-3 top-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-white bg-white text-cyan-600 shadow-xl sm:-right-5 sm:h-20 sm:w-20"
            >
              <Droplets size={34} strokeWidth={1.6} />
            </div>

            <div
              aria-hidden="true"
              className="absolute -bottom-5 left-8 h-24 w-24 rounded-full border border-cyan-300/50"
            >
              <div className="aj-ripple absolute inset-0 rounded-full border border-cyan-400/50" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-tl-[2rem] border-l-2 border-t-2 border-amber-300" />

            <img
              src="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=1100&q=80"
              alt="Clear drinking water in a natural setting"
              width="1100"
              height="900"
              loading="lazy"
              decoding="async"
              className="relative aspect-[5/4] w-full rounded-3xl object-cover shadow-xl shadow-slate-900/10"
            />

            <div className="absolute -bottom-5 right-4 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-lg sm:right-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                <HeartHandshake size={23} aria-hidden="true" />
              </div>
              <div>
                <p className="font-bold text-slate-900">Community first</p>
                <p className="text-sm text-slate-500">Serving our region</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">
              Who we are
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl">
              A local brand with a clear purpose.
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Amrit Jal began with a simple goal: to serve local households
              and businesses with convenient access to drinking water.
              Based in Nalanda, Bihar, we aim to combine dependable service
              with a strong focus on water quality.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              We believe a good customer experience goes beyond the product.
              It includes clear communication, reliable delivery and
              relationships built on trust.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "A focus on local customer needs",
                "Attention to water treatment and handling",
                "Convenient options for homes and businesses",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={21}
                    className="mt-0.5 shrink-0 text-teal-600"
                    aria-hidden="true"
                  />
                  <p className="text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-24">
        <div
          aria-hidden="true"
          className="absolute -right-20 top-0 h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-28 -left-10 h-80 w-80 rounded-full bg-teal-500/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              What drives us
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Our mission. Our vision.
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              A commitment to customers today and a thoughtful approach to
              serving our community in the future.
            </p>
          </Reveal>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-12 grid gap-6 md:grid-cols-2"
          >
            {[
              {
                title: "Our Mission",
                icon: Droplets,
                text: "To make drinking water accessible and convenient for families and businesses in Nalanda and surrounding service areas, with attention to quality and dependable service.",
              },
              {
                title: "Our Vision",
                icon: Sparkles,
                text: "To build a trusted water brand in Bihar through customer care, consistent service and responsible business practices.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  variants={itemVariants}
                  className="group rounded-3xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.09] sm:p-9"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300 transition duration-300 group-hover:bg-cyan-400/20">
                    <Icon size={28} aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold">{item.title}</h3>
                  <p className="mt-4 leading-8 text-slate-300">
                    {item.text}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-gradient-to-b from-white to-cyan-50/50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">
              The Amrit Jal approach
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Why choose{" "}
              <span className="text-cyan-600">Amrit Jal?</span>
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              We focus on the everyday details that matter to our customers:
              service, value, quality and community.
            </p>
          </Reveal>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <motion.article
                  key={feature.title}
                  variants={itemVariants}
                  className="group rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-100 hover:shadow-xl hover:shadow-cyan-950/5"
                >
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${feature.color} transition-transform duration-300 group-hover:scale-105`}
                  >
                    <Icon size={27} aria-hidden="true" />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-slate-950">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {feature.description}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Water treatment process */}
      <section className="overflow-hidden py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-800">
              <Waves size={16} aria-hidden="true" />
              From source to delivery
            </span>

            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              A process built around care.
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Explore the seven stages of our stated water treatment and
              delivery process. Actual treatment stages and controls should
              match the facility's operating procedures.
            </p>
          </Reveal>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="relative mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.number}
                  variants={itemVariants}
                  className="group relative rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold tracking-widest text-cyan-700">
                      {step.number}
                    </span>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700 transition-colors duration-300 group-hover:bg-cyan-600 group-hover:text-white">
                      <Icon size={22} aria-hidden="true" />
                    </div>
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-slate-950">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>

                  {index < processSteps.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-100 bg-white text-cyan-600 lg:flex"
                    >
                      <ArrowRight size={13} />
                    </div>
                  )}
                </motion.article>
              );
            })}
          </motion.div>

          <p className="mt-6 text-center text-xs leading-6 text-slate-500">
            Treatment methods and quality claims should be verified against
            the actual plant process and current test records.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-10">
        <Reveal>
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-cyan-700 via-cyan-800 to-slate-950 px-6 py-14 text-center text-white shadow-xl shadow-cyan-950/15 sm:px-12 sm:py-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 -top-24 h-64 w-64 rounded-full border border-white/10"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-4 -top-16 h-48 w-48 rounded-full border border-white/10"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-28 -left-12 h-64 w-64 rounded-full bg-cyan-400/10 blur-2xl"
            />

            <div className="relative mx-auto max-w-3xl">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-cyan-100">
                <Droplets size={29} aria-hidden="true" />
              </div>

              <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                From Nalanda, for everyday life.
              </h2>

              <p className="mx-auto mt-5 max-w-xl leading-7 text-cyan-50/90 sm:text-lg">
                Looking for water supply for your home, shop or business?
                Connect with Amrit Jal to explore available options.
              </p>

              <Link
                to="/contact"
                className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-amber-300 px-7 py-3 font-bold text-slate-950 shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-0.5 hover:bg-amber-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-200"
              >
                Contact Our Team
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
