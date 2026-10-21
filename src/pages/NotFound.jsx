
import { Link, useLocation } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Droplets,
  Home,
  MessageCircle,
  Search,
  ShoppingBag,
} from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/917366973933?text=Hello%20Amrit%20Jal%2C%20I%20need%20help%20finding%20a%20page.";

export default function NotFound() {
  const location = useLocation();
  const reducedMotion = useReducedMotion();

  const attemptedPath = `${location.pathname}${location.search}`;

  return (
    <>
      <title>Page Not Found (404) | Amrit Jal</title>
      <meta
        name="description"
        content="This Amrit Jal page could not be found. Return to the homepage, explore our products, or contact us for assistance."
      />
      <meta name="robots" content="noindex, follow" />

      <main className="relative isolate flex min-h-[75vh] items-center justify-center overflow-hidden bg-gradient-to-br from-white via-sky-50 to-blue-50 px-4 py-16 sm:py-24">
        {/* Background decoration */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 -z-10 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-20 -z-10 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl"
        />

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.5 }}
          className="w-full max-w-2xl text-center"
        >
          {/* Brand mark */}
          <Link
            to="/"
            aria-label="Amrit Jal home"
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white px-4 py-2 shadow-sm transition hover:border-cyan-400"
          >
            <Droplets
              size={20}
              aria-hidden="true"
              className="text-cyan-600"
            />
            <span className="text-sm font-extrabold tracking-wide text-blue-950">
              AMRIT JAL
            </span>
          </Link>

          {/* Error illustration */}
          <div
            className="relative mx-auto mt-10 flex h-40 w-40 items-center justify-center sm:h-48 sm:w-48"
            aria-hidden="true"
          >
            <div className="absolute inset-0 rounded-full border border-cyan-200 bg-white/70 shadow-xl shadow-blue-900/5" />
            <div className="absolute inset-4 rounded-full border border-dashed border-blue-200" />

            <Droplets
              size={58}
              strokeWidth={1.5}
              className="relative text-cyan-600"
            />

            <span className="absolute -right-1 top-4 rounded-xl border border-blue-100 bg-white px-3 py-1.5 text-sm font-black text-blue-800 shadow-sm">
              404
            </span>
          </div>

          <p className="mt-8 text-xs font-bold uppercase tracking-[0.25em] text-blue-700">
            Lost in the flow?
          </p>

          <h1 className="mt-3 text-4xl font-black tracking-tight text-blue-950 sm:text-6xl">
            Page not found<span className="text-cyan-500">.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-slate-600 sm:text-base">
            This page may have moved, the link may be outdated, or the
            address may have been entered incorrectly. Let’s help you
            find your way back.
          </p>

          {/* Show the attempted path for troubleshooting */}
          <p className="mx-auto mt-4 max-w-full break-all rounded-xl border border-blue-100 bg-white/80 px-4 py-3 font-mono text-xs text-slate-500">
            Requested path: {attemptedPath}
          </p>

          {/* Main actions */}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-950 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-950/10 transition hover:bg-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2"
            >
              <Home size={18} aria-hidden="true" />
              Back to Home
              <ArrowRight size={16} aria-hidden="true" />
            </Link>

            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-200 bg-white px-6 py-3.5 text-sm font-bold text-blue-950 transition hover:border-cyan-400 hover:bg-cyan-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2"
            >
              <ShoppingBag size={18} aria-hidden="true" />
              Explore Products
            </Link>
          </div>

          {/* Support */}
          <div className="mx-auto mt-10 max-w-md border-t border-blue-100 pt-6">
            <p className="text-sm font-semibold text-slate-800">
              Still looking for something?
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Contact our team and tell us which page you need.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold text-green-700 transition hover:bg-green-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
            >
              <MessageCircle size={18} aria-hidden="true" />
              <span>Get help on WhatsApp</span>
              <ArrowRight size={15} aria-hidden="true" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs font-medium text-slate-500">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 hover:text-blue-800"
            >
              <ArrowLeft size={14} aria-hidden="true" />
              Home
            </Link>

            <span aria-hidden="true" className="text-slate-300">
              /
            </span>

            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 hover:text-blue-800"
            >
              <Search size={14} aria-hidden="true" />
              Browse products
            </Link>
          </div>
        </motion.div>
      </main>
    </>
  );
}
