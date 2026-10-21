import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ShoppingCart,
  Droplets,
  Phone,
  Menu,
  X,
} from "lucide-react";

import logo from "../assets/logo02.png";
import { useCart } from "../context/CartContext";

const WHATSAPP_NUMBER = "917366973933";
const PHONE_NUMBER = "+917366973933";

const navLinks = [
  { to: "/products", label: "Products" },
  { to: "/subscribe", label: "Subscription" },
  { to: "/#process", label: "Process", isAnchor: true },
  { to: "/faq", label: "FAQ" },
  { to: "/about-us", label: "About Us" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { cartCount = 0 } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  const closeMenu = () => setIsMenuOpen(false);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname, location.hash]);

  // Support navigating to #process from another route.
  useEffect(() => {
    if (location.hash !== "#process") return;

    let frameId;

    const scrollToProcess = () => {
      const section = document.getElementById("process");

      if (section) {
        section.scrollIntoView({
          behavior: shouldReduceMotion ? "auto" : "smooth",
          block: "start",
        });
      }
    };

    frameId = requestAnimationFrame(scrollToProcess);

    return () => cancelAnimationFrame(frameId);
  }, [location.pathname, location.hash, shouldReduceMotion]);

  // Close the menu using Escape.
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const navLinkClass = (link) => {
    const isActive =
      !link.isAnchor &&
      location.pathname === link.to;

    return [
      "relative inline-flex items-center py-2 text-sm font-semibold",
      "transition-colors duration-200",
      "focus-visible:outline-none focus-visible:ring-2",
      "focus-visible:ring-cyan-500 focus-visible:ring-offset-4 rounded-sm",
      isActive
        ? "text-cyan-700"
        : "text-slate-700 hover:text-cyan-700",
    ].join(" ");
  };

  const mobileLinkClass = (link) => {
    const isActive =
      !link.isAnchor &&
      location.pathname === link.to;

    return [
      "flex min-h-12 w-full items-center justify-between",
      "border-b border-slate-100 px-5 py-3 text-sm font-semibold",
      "transition-colors duration-200",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset",
      "focus-visible:ring-cyan-500",
      isActive
        ? "bg-cyan-50 text-cyan-800"
        : "text-slate-700 hover:bg-cyan-50 hover:text-cyan-800",
    ].join(" ");
  };

  const processLink = (link, mobile = false) => {
    const className = mobile
      ? mobileLinkClass(link)
      : navLinkClass(link);

    if (link.isAnchor) {
      return (
        <Link
          key={link.to}
          to={link.to}
          onClick={mobile ? closeMenu : undefined}
          className={className}
        >
          {link.label}
          {mobile && (
            <ArrowRight size={16} aria-hidden="true" />
          )}
        </Link>
      );
    }

    return (
      <Link
        key={link.to}
        to={link.to}
        onClick={mobile ? closeMenu : undefined}
        className={className}
      >
        {link.label}

        {!mobile && (
          <span
            aria-hidden="true"
            className={[
              "absolute inset-x-0 -bottom-1 h-0.5 origin-left",
              "rounded-full bg-cyan-500 transition-transform duration-300",
              location.pathname === link.to
                ? "scale-x-100"
                : "scale-x-0 group-hover:scale-x-100",
            ].join(" ")}
          />
        )}

        {mobile && (
          <ArrowRight size={16} aria-hidden="true" />
        )}
      </Link>
    );
  };

  const menuMotion = shouldReduceMotion
    ? {
        initial: false,
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0 },
      }
    : {
        initial: { opacity: 0, y: -10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -8 },
        transition: { duration: 0.22, ease: "easeOut" },
      };

  return (
    <header className="sticky top-0 z-50 border-b border-cyan-100 bg-white/95 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-10">
        {/* Brand: preserve the existing logo */}
        <Link
          to="/"
          onClick={closeMenu}
          aria-label="Amrit Jal homepage"
          className="flex shrink-0 items-center rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
        >
          <img
            src={logo}
            alt="Amrit Jal water delivery logo"
            width={140}
            height={90}
            decoding="async"
            className="h-12 w-auto max-w-[120px] object-contain sm:h-14 sm:max-w-[140px]"
          />
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-5 lg:flex xl:gap-7"
        >
          {navLinks.map((link) => (
            <div key={link.to} className="group">
              {processLink(link)}
            </div>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href={`tel:${PHONE_NUMBER}`}
            aria-label="Call Amrit Jal"
            className="hidden min-h-10 items-center gap-2 rounded-full border border-cyan-200 bg-white px-3 text-sm font-semibold text-slate-700 transition-colors hover:border-cyan-400 hover:bg-cyan-50 hover:text-cyan-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 sm:inline-flex"
          >
            <Phone size={16} aria-hidden="true" />
            <span className="hidden xl:inline">Call Us</span>
          </a>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              "Hello Amrit Jal, I would like to enquire about water jar delivery."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-10 items-center justify-center gap-2 rounded-full bg-cyan-600 px-4 text-sm font-bold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300 sm:inline-flex"
          >
            <Droplets size={17} aria-hidden="true" />
            <span>Order on WhatsApp</span>
          </a>

          {/* Cart */}
          <Link
            to="/cart"
            aria-label={`Shopping cart, ${cartCount} items`}
            className="relative inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-cyan-200 bg-white px-3 text-slate-800 transition-colors hover:border-cyan-400 hover:bg-cyan-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
          >
            <ShoppingCart size={20} aria-hidden="true" />

            <span className="hidden text-sm font-semibold sm:inline">
              Cart
            </span>

            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-white bg-amber-400 px-1 text-[10px] font-extrabold text-slate-950">
                {cartCount > 99 ? "99+" : cartCount}
              </span>
            )}
          </Link>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-200 bg-white text-slate-800 transition-colors hover:bg-cyan-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 lg:hidden"
          >
            {isMenuOpen ? (
              <X size={22} aria-hidden="true" />
            ) : (
              <Menu size={22} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Animated mobile menu */}
      <AnimatePresence initial={false}>
        {isMenuOpen && (
          <motion.div
            {...menuMotion}
            id="mobile-navigation"
            className="absolute inset-x-0 top-full border-t border-cyan-100 bg-white shadow-xl lg:hidden"
          >
            <nav
              aria-label="Mobile navigation"
              className="mx-auto max-h-[calc(100dvh-76px)] max-w-7xl overflow-y-auto px-4 pb-5 sm:px-6"
            >
              <div className="pt-2">
                {navLinks.map((link) => processLink(link, true))}
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  onClick={closeMenu}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-cyan-200 px-3 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-cyan-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                >
                  <Phone size={17} aria-hidden="true" />
                  Call Us
                </a>

                <Link
                  to="/cart"
                  onClick={closeMenu}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-cyan-200 px-3 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-cyan-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                >
                  <ShoppingCart size={17} aria-hidden="true" />
                  View Cart
                </Link>
              </div>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  "Hello Amrit Jal, I would like to enquire about water jar delivery."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="mt-3 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-cyan-600 px-5 py-3 text-sm font-bold text-white shadow-md transition-colors hover:bg-cyan-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300"
              >
                Order on WhatsApp
                <ArrowRight size={17} aria-hidden="true" />
              </a>

              <p className="mt-4 text-center text-xs leading-5 text-slate-500">
                Your local partner for everyday water delivery.
              </p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
