
import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Droplets,
  Globe2,
  HelpCircle,
  MapPin,
  MessageCircle,
  Package,
  Search,
  ShieldCheck,
  Truck,
  X,
  Phone,
  Mail,
} from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/917366973933?text=Hello%20Amrit%20Jal%2C%20I%20have%20a%20question.";

const PHONE_URL = "tel:+917366973933";
const EMAIL_URL = "mailto:care.amritjal@gmail.com";

const FAQS = [
  {
    id: "products",
    category: "Products",
    icon: Package,
    question: "What water products can I order?",
    answer:
      "Amrit Jal's current product catalogue includes 250 ml, 500 ml and 1 litre bottles, multipacks, and 20 litre water jars. Check the Products page for the options currently listed.",
    keywords: "bottle sizes multipacks 20 litre jar products",
  },
  {
    id: "delivery-area",
    category: "Delivery",
    icon: MapPin,
    question: "Where does Amrit Jal deliver?",
    answer:
      "Amrit Jal is focused on serving customers in Barhog. Contact us on WhatsApp to confirm whether delivery is available at your exact location before placing an order.",
    keywords: "Barhog service area location delivery address",
  },
  {
    id: "ordering",
    category: "Ordering",
    icon: MessageCircle,
    question: "How can I place an order?",
    answer:
      "Contact Amrit Jal through WhatsApp to enquire about products, prices and delivery availability. Please confirm your order details with us before arranging delivery.",
    keywords: "buy order WhatsApp booking purchase",
  },
  {
    id: "pricing",
    category: "Products",
    icon: Droplets,
    question: "How can I check product prices?",
    answer:
      "Visit the Products page to compare the listed products and prices. For delivery charges, current availability or confirmation of an order total, contact Amrit Jal directly.",
    keywords: "price cost rates delivery charge",
  },
  {
    id: "bulk",
    category: "Ordering",
    icon: Truck,
    question: "Can I enquire about larger orders?",
    answer:
      "You can contact our team about your quantity requirements and intended delivery location. We will need to confirm availability and the arrangements for your order.",
    keywords: "bulk wholesale event office quantity large order",
  },
  {
    id: "quality",
    category: "Water & Safety",
    icon: ShieldCheck,
    question: "Where can I find information about water quality?",
    answer:
      "For information about the water supplied, applicable quality standards and any available test documentation, contact Amrit Jal directly. Please verify the relevant product documentation before relying on specific quality or certification claims.",
    keywords: "water quality RO mineral TDS testing certification safety",
  },
  {
    id: "payment",
    category: "Ordering",
    icon: CheckCircle2,
    question: "Which payment options are available?",
    answer:
      "Please confirm the accepted payment method with Amrit Jal when placing your order. Payment options should be verified before you complete a purchase.",
    keywords: "payment UPI cash card online checkout",
  },
  {
    id: "contact",
    category: "Support",
    icon: HelpCircle,
    question: "How can I contact Amrit Jal?",
    answer:
      "You can contact Amrit Jal through WhatsApp, call the listed support number, or send an email. Include your location and the product you are enquiring about so we can understand your request.",
    keywords: "contact support help phone email",
  },
];

const CATEGORIES = [
  "All Questions",
  "Products",
  "Delivery",
  "Ordering",
  "Water & Safety",
  "Support",
];

export default function FAQ() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Questions");
  const [openId, setOpenId] = useState("products");

  const reducedMotion = useReducedMotion();

  const filteredFAQs = useMemo(() => {
    const query = search.trim().toLowerCase();

    return FAQS.filter((item) => {
      const matchesCategory =
        activeCategory === "All Questions" ||
        item.category === activeCategory;

      const searchableText =
        `${item.question} ${item.answer} ${item.keywords} ${item.category}`
          .toLowerCase();

      return matchesCategory && searchableText.includes(query);
    });
  }, [search, activeCategory]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setOpenId("");
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative isolate overflow-hidden bg-[#F7FAFC] py-16 sm:py-20 lg:py-28"
    >
      {/* Subtle background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-cyan-100/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 -z-10 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Left: Editorial introduction */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: reducedMotion ? 0 : 0.5 }}
            className="lg:sticky lg:top-24"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white px-3.5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-800 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-cyan-500" />
              Help Centre
            </div>

            <h2
              id="faq-heading"
              className="mt-6 max-w-xl text-4xl font-black leading-[1.1] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl"
            >
              Good questions.
              <span className="mt-1 block text-blue-700">
                Clear answers.
              </span>
            </h2>

            <p className="mt-5 max-w-lg text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Everything you need to know about Amrit Jal products,
              ordering and delivery, in one simple place.
            </p>

            <div className="mt-8 flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <MapPin size={21} aria-hidden="true" />
              </div>

              <div>
                <p className="font-bold text-slate-900">
                  Serving Barhog
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Ask us to confirm delivery availability at your
                  location before ordering.
                </p>
              </div>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-5 inline-flex w-full items-center justify-between gap-4 rounded-2xl bg-blue-950 p-5 text-white transition hover:bg-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 sm:max-w-md"
            >
              <span className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                  <MessageCircle size={22} aria-hidden="true" />
                </span>

                <span>
                  <span className="block font-bold">
                    Still need help?
                  </span>
                  <span className="mt-1 block text-sm text-blue-100">
                    Talk to us on WhatsApp
                  </span>
                </span>
              </span>

              <ArrowRight
                size={20}
                aria-hidden="true"
                className="shrink-0 transition-transform group-hover:translate-x-1"
              />
            </a>

            <p className="mt-4 text-xs leading-5 text-slate-500">
              Contact: +91 73669 73933
            </p>
          </motion.div>

          {/* Right: Searchable FAQ */}
          <div className="min-w-0">
            <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-[0_18px_60px_rgba(15,23,42,0.06)] sm:p-6 lg:p-8">
              {/* Search */}
              <label className="relative block">
                <span className="sr-only">
                  Search frequently asked questions
                </span>

                <Search
                  size={19}
                  aria-hidden="true"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="search"
                  value={search}
                  onChange={(event) => {
                    setSearch(event.target.value);
                    setOpenId("");
                  }}
                  placeholder="Search a question..."
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-11 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100"
                />

                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    aria-label="Clear FAQ search"
                    className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-xl text-slate-500 hover:bg-slate-200"
                  >
                    <X size={17} aria-hidden="true" />
                  </button>
                )}
              </label>

              {/* Category filters */}
              <div
                className="mt-5 flex gap-2 overflow-x-auto pb-2"
                aria-label="FAQ categories"
              >
                {CATEGORIES.map((category) => {
                  const active = activeCategory === category;

                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => handleCategoryChange(category)}
                      aria-pressed={active}
                      className={`shrink-0 rounded-full border px-3.5 py-2 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 ${
                        active
                          ? "border-blue-950 bg-blue-950 text-white"
                          : "border-slate-200 bg-white text-slate-600 hover:border-cyan-400 hover:text-blue-800"
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>

              <div className="mt-5 flex items-center justify-between border-b border-slate-100 pb-4">
                <p className="text-sm font-semibold text-slate-900">
                  Frequently asked questions
                </p>
                <p className="text-xs text-slate-500">
                  {filteredFAQs.length} results
                </p>
              </div>

              {/* Accordion */}
              <div className="divide-y divide-slate-100">
                {filteredFAQs.map((item, index) => {
                  const Icon = item.icon;
                  const isOpen = openId === item.id;
                  const answerId = `faq-answer-${item.id}`;

                  return (
                    <motion.div
                      key={item.id}
                      initial={
                        reducedMotion ? false : { opacity: 0, y: 8 }
                      }
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: reducedMotion ? 0 : 0.22,
                        delay: reducedMotion ? 0 : Math.min(index * 0.025, 0.15),
                      }}
                      className="py-1"
                    >
                      <h3>
                        <button
                          type="button"
                          aria-expanded={isOpen}
                          aria-controls={answerId}
                          onClick={() =>
                            setOpenId(isOpen ? "" : item.id)
                          }
                          className="flex w-full items-center gap-3 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 sm:gap-4"
                        >
                          <span
                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                              isOpen
                                ? "bg-blue-950 text-white"
                                : "bg-blue-50 text-blue-700"
                            }`}
                          >
                            <Icon size={19} aria-hidden="true" />
                          </span>

                          <span className="min-w-0 flex-1">
                            <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                              {item.category}
                            </span>
                            <span
                              className={`mt-1 block text-sm font-bold leading-6 sm:text-base ${
                                isOpen
                                  ? "text-blue-800"
                                  : "text-slate-800"
                              }`}
                            >
                              {item.question}
                            </span>
                          </span>

                          <span
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform ${
                              isOpen
                                ? "rotate-180 bg-cyan-50 text-blue-800"
                                : "bg-slate-50 text-slate-500"
                            }`}
                          >
                            <ChevronDown
                              size={18}
                              aria-hidden="true"
                            />
                          </span>
                        </button>
                      </h3>

                      <div
                        id={answerId}
                        hidden={!isOpen}
                        className="pb-5 pl-[52px] pr-2 sm:pl-14"
                      >
                        <p className="text-sm leading-7 text-slate-600">
                          {item.answer}
                        </p>

                        <a
                          href={WHATSAPP_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-blue-700 hover:text-cyan-700"
                        >
                          Ask us on WhatsApp
                          <ArrowRight size={14} aria-hidden="true" />
                        </a>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {filteredFAQs.length === 0 && (
                <div className="py-12 text-center">
                  <Search
                    size={28}
                    aria-hidden="true"
                    className="mx-auto text-slate-400"
                  />
                  <h3 className="mt-4 font-bold text-slate-900">
                    No matching questions
                  </h3>
                  <p className="mt-2 text-sm text-slate-500">
                    Try a different keyword or reset your filters.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearch("");
                      setActiveCategory("All Questions");
                      setOpenId("");
                    }}
                    className="mt-4 rounded-xl bg-blue-950 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-900"
                  >
                    Clear search and filters
                  </button>
                </div>
              )}
            </div>

            {/* Direct contact options */}
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <a
                href={PHONE_URL}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-blue-300 hover:shadow-sm"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <Phone size={19} aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs text-slate-500">
                    Prefer a call?
                  </span>
                  <span className="mt-1 block text-sm font-bold text-slate-900">
                    Call Amrit Jal
                  </span>
                </span>
              </a>

              <a
                href={EMAIL_URL}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-blue-300 hover:shadow-sm"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <Mail size={19} aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs text-slate-500">
                    Have a detailed query?
                  </span>
                  <span className="mt-1 block text-sm font-bold text-slate-900">
                    Email our team
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom brand note */}
        <div className="mt-12 border-t border-slate-200 pt-6">
          <p className="mx-auto max-w-3xl text-center text-xs leading-6 text-slate-500">
            Amrit Jal product availability and delivery arrangements
            should be confirmed directly with our team. Product details,
            prices and service availability may change.
          </p>
        </div>
      </div>
    </section>
  );
}
