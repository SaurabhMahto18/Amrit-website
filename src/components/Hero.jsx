
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Droplets,
  Waves,
  MapPin,
} from "lucide-react";

const BRAND_NAME = "Amrit Jal";

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setText(BRAND_NAME);
      setIsDeleting(false);
      return undefined;
    }

    let timer;

    if (!isDeleting && text === BRAND_NAME) {
      timer = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && text === "") {
      timer = setTimeout(() => setIsDeleting(false), 600);
    } else {
      timer = setTimeout(() => {
        setText(
          BRAND_NAME.slice(
            0,
            text.length + (isDeleting ? -1 : 1)
          )
        );
      }, isDeleting ? 55 : 100);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, shouldReduceMotion]);

  const entrance = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
      };

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[600px] items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-950 via-slate-950 to-slate-900 text-white sm:min-h-[660px] lg:min-h-[720px]"
    >
      {/* Decorative background video */}
      <video
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        autoPlay={!shouldReduceMotion}
        loop
        muted
        playsInline
        preload="none"
        tabIndex={-1}
      >
        <source
          src="https://static.vecteezy.com/system/resources/previews/048/020/210/mp4/the-act-of-pouring-water-into-a-glass-from-a-short-distance-witnessing-the-refreshing-flow-free-video.mp4"
          type="video/mp4"
        />
      </video>

      {/* Improve text contrast */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950/85 via-cyan-950/75 to-slate-950/85"
      />

      {/* Ambient brand colours */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-0 -z-10 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl sm:h-96 sm:w-96"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-20 -z-10 h-80 w-80 rounded-full bg-amber-300/10 blur-3xl"
      />

      <div className="mx-auto w-full max-w-7xl px-5 py-20 text-center sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <motion.div
          {...entrance}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: 0.7, ease: "easeOut" }
          }
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/30 bg-white/10 px-4 py-2 text-xs font-semibold tracking-wide text-cyan-100 shadow-lg backdrop-blur-md sm:text-sm">
            <Droplets size={17} aria-hidden="true" />
            Everyday water delivery, made convenient
          </span>

          <h1
            id="hero-heading"
            className="mx-auto mt-7 max-w-5xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Pure. Refreshing.

            <span
              aria-hidden="true"
              className="mt-2 block text-cyan-300"
            >
              <span className="inline-block min-w-[5ch]">
                {text || "\u00A0"}
              </span>

              {!shouldReduceMotion && (
                <span className="ml-1 inline-block h-[0.8em] translate-y-1 animate-pulse border-r-2 border-amber-300" />
              )}
            </span>

            <span className="sr-only"> Amrit Jal</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
            Your local option for 20-litre drinking water jars
            in Barhog. Explore our products and contact us to
            enquire about delivery availability for your home
            or shop.
          </p>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { duration: 0.5, delay: 0.15 }
            }
            className="mt-9 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center"
          >
            <Link
              to="/products"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cyan-500 px-7 py-3.5 font-bold text-slate-950 shadow-xl shadow-cyan-950/30 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-200/70"
            >
              Explore Products
              <ArrowRight
                size={18}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <a
              href="#process"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur-md transition duration-300 hover:border-cyan-200/60 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-200/70"
            >
              <Waves size={18} aria-hidden="true" />
              Our Water Process
            </a>
          </motion.div>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-200">
            <span className="inline-flex items-center gap-2">
              <Droplets
                size={17}
                className="text-cyan-300"
                aria-hidden="true"
              />
              20L Water Jars
            </span>

            <span
              aria-hidden="true"
              className="hidden h-1 w-1 rounded-full bg-amber-300 sm:block"
            />

            <span className="inline-flex items-center gap-2">
              <MapPin
                size={16}
                className="text-amber-300"
                aria-hidden="true"
              />
              Barhog
            </span>
          </div>
        </motion.div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/10 to-transparent"
      />
    </section>
  );
}
