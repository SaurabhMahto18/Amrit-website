import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Droplets,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Twitter,
  Waves,
} from "lucide-react";

import logo from "../assets/logo02.png";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Amrit Jal", to: "/about" },
  { label: "Our Products", to: "/products" },
  { label: "Contact Us", to: "/contact" },
];

const supportLinks = [
  { label: "Frequently Asked Questions", to: "/faq" },
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Water Quality Information", to: "/lab-reports" },
];

const legalLinks = [
  { label: "Certificates", to: "/certificates" },
  { label: "Lab Reports", to: "/lab-reports" },
];

// Add your actual profile URLs when your social pages are ready.
// Empty URLs are intentionally not rendered.
const socialLinks = [
  { label: "Facebook", href: "", icon: Facebook },
  { label: "Instagram", href: "", icon: Instagram },
  { label: "Twitter", href: "", icon: Twitter },
];

const sectionHeading =
  "text-sm font-bold uppercase tracking-[0.16em] text-white";

const footerLink =
  "inline-flex items-center gap-1.5 text-sm text-slate-300 transition-colors duration-300 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 rounded-sm";

function FooterLinkList({ title, links }) {
  return (
    <div>
      <h2 className={sectionHeading}>{title}</h2>

      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.to + link.label}>
            <Link className={footerLink} to={link.to}>
              {link.label}
              <ArrowUpRight
                size={13}
                aria-hidden="true"
                className="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();

  const animationProps = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.08 },
        transition: { duration: 0.55, ease: "easeOut" },
      };

  return (
    <motion.footer
      {...animationProps}
      className="relative isolate overflow-hidden bg-slate-950 text-slate-300"
      aria-label="Amrit Jal website footer"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 -top-32 -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-36 -left-24 -z-10 h-96 w-96 rounded-full bg-amber-400/[0.07] blur-3xl"
      />

      {/* Brand and navigation */}
      <div className="mx-auto max-w-7xl px-5 pb-12 pt-16 sm:px-8 sm:pt-20 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link
              to="/"
              aria-label="Amrit Jal home"
              className="inline-flex items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              <img
                src={logo}
                alt="Amrit Jal water delivery brand logo"
                width="140"
                height="90"
                loading="lazy"
                decoding="async"
                className="h-10 w-auto max-w-36 object-contain"
              />

              
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Your local drinking water delivery partner. Discover convenient
              water supply options for your home, shop and everyday needs.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks
                .filter((social) => social.href.trim().length > 0)
                .map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={`Amrit Jal on ${label}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                  >
                    <Icon size={18} aria-hidden="true" />
                  </a>
                ))}
            </div>

            <div className="mt-7 flex items-start gap-3 text-sm leading-6 text-slate-400">
              <MapPin
                size={19}
                className="mt-0.5 shrink-0 text-cyan-400"
                aria-hidden="true"
              />
              <p>Serving our local community in Bihar.</p>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2 lg:pl-4">
            <FooterLinkList title="Explore" links={quickLinks} />
          </div>

          {/* Support */}
          <div className="lg:col-span-3">
            <FooterLinkList title="Customer Support" links={supportLinks} />

            <div className="mt-8">
              <h2 className={sectionHeading}>Legal &amp; Transparency</h2>
              <ul className="mt-5 space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.to + link.label}>
                    <Link className={footerLink} to={link.to}>
                      {link.label}
                      <ArrowUpRight
                        size={13}
                        aria-hidden="true"
                        className="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="lg:col-span-3">
            <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-950/80 via-slate-900 to-slate-900 p-6 shadow-xl shadow-black/10">
              <div
                aria-hidden="true"
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-cyan-300/10"
              />

              <div className="relative">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-300">
                  <Droplets size={23} aria-hidden="true" />
                </div>

                <h2 className="mt-5 text-xl font-bold text-white">
                  Need water delivered?
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Get in touch with our team to ask about products, pricing and
                  delivery availability in your area.
                </p>

                <Link
                  to="/contact"
                  className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-cyan-500 px-5 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-950/20 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300/40"
                >
                  Contact Amrit Jal
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Trust statement */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
              <ShieldCheck size={21} aria-hidden="true" />
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                Service with care
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-400">
                Focused on customer service and responsible water handling.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-400">
            <Waves size={17} className="text-cyan-400" aria-hidden="true" />
            <span>Every drop has a purpose.</span>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p>
            &copy; {new Date().getFullYear()} Amrit Jal. All rights reserved.
          </p>

          <p className="leading-5">
            Drinking water delivery for everyday needs.
          </p>

          <Link
            to="/privacy-policy"
            className="w-fit transition-colors hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </motion.footer>
  );
}
