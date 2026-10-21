
import { useReducedMotion } from "framer-motion";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  MessageCircle,
  Gift,
  Users,
  Package,
  CalendarDays,
  House,
  Building2,
  ArrowRight,
  Clock3,
  BadgeCheck,
  Droplets,
  Truck,
} from "lucide-react";

const WHATSAPP_NUMBER = "917366973933";

const createWhatsAppLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const plans = [
  {
    id: "daily",
    name: "Daily Delivery",
    label: "For everyday needs",
    icon: House,
    description:
      "Request regular 20L jar deliveries for your home or everyday water needs.",
    price: "Confirm on WhatsApp",
    unit: "20L jar",
    details: [
      "Ask about daily delivery availability",
      "Discuss your preferred delivery time",
      "Confirm the jar price before ordering",
      "Arrange delivery according to your location",
    ],
    highlight: "Suitable for households that need water regularly.",
    message:
      "Hello Amrit Jal, I am interested in regular daily 20L jar delivery. Please confirm availability, price and delivery timing for my location.",
  },
  {
    id: "alternate",
    name: "Alternate-Day Delivery",
    label: "Flexible routine",
    icon: CalendarDays,
    description:
      "Discuss a delivery schedule that suits your household's consumption.",
    price: "Confirm on WhatsApp",
    unit: "20L jar",
    details: [
      "Discuss delivery every alternate day",
      "Choose quantities based on your needs",
      "Confirm schedule before starting",
      "Ask about available service areas",
    ],
    highlight: "Useful for customers with a predictable routine.",
    message:
      "Hello Amrit Jal, I would like to enquire about alternate-day 20L jar delivery. Please share the available schedule and final price.",
  },
  {
    id: "weekly",
    name: "Weekly Delivery",
    label: "Home & workplace",
    icon: Package,
    description:
      "Enquire about arranging multiple jars in a planned weekly delivery.",
    price: "Quote on request",
    unit: "Based on quantity",
    details: [
      "Discuss the number of jars required",
      "Request a weekly delivery schedule",
      "Confirm availability for your location",
      "Get a price quote before placing an order",
    ],
    highlight: "A practical option for planned water requirements.",
    message:
      "Hello Amrit Jal, I would like to enquire about weekly 20L jar delivery. My approximate requirement is not final yet. Please share available options and pricing.",
  },
  {
    id: "monthly",
    name: "Monthly Requirement",
    label: "Plan ahead",
    icon: CalendarDays,
    description:
      "Discuss your monthly water requirement and arrange a suitable delivery plan.",
    price: "Custom quotation",
    unit: "Based on usage",
    details: [
      "Estimate your monthly jar requirement",
      "Discuss daily or scheduled deliveries",
      "Confirm billing and payment arrangements",
      "Ask about any applicable delivery charges",
    ],
    highlight: "Best for customers who want to plan regular usage.",
    message:
      "Hello Amrit Jal, I want to discuss a monthly 20L jar requirement. Please help me estimate the cost and confirm the available delivery and billing options.",
  },
];

const bulkOrders = [
  {
    name: "Events & Gatherings",
    icon: Gift,
    description:
      "Enquire about water jar requirements for parties, celebrations and local gatherings.",
    message:
      "Hello Amrit Jal, I need water jars for an upcoming event. Please let me know availability, pricing and delivery arrangements.",
  },
  {
    name: "Weddings & Functions",
    icon: Users,
    description:
      "Discuss quantities and delivery arrangements for weddings and family functions.",
    message:
      "Hello Amrit Jal, I would like to enquire about water jar supply for a wedding or family function. Please share the available options.",
  },
  {
    name: "Offices & Businesses",
    icon: Building2,
    description:
      "Plan water requirements for offices, shops, hostels and other workplaces.",
    message:
      "Hello Amrit Jal, I am enquiring about regular or bulk water jar supply for a business. Please share availability and pricing.",
  },
];

function WhatsAppButton({ href, children, secondary = false }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-700 focus-visible:ring-offset-2 ${
        secondary
          ? "border border-slate-200 bg-white text-slate-800 hover:border-cyan-300 hover:bg-cyan-50"
          : "bg-cyan-700 text-white shadow-sm hover:bg-cyan-800"
      }`}
    >
      <MessageCircle className="h-4 w-4" aria-hidden="true" />
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}

function PlanCard({ plan, index, reducedMotion }) {
  const Icon = plan.icon;

  return (
    <motion.article
      initial={reducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reducedMotion ? 0 : 0.4,
        delay: reducedMotion ? 0 : index * 0.07,
      }}
      className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg sm:p-7"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-800 ring-1 ring-cyan-100">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>

        <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
          {plan.label}
        </span>
      </div>

      <h3 className="mt-6 text-xl font-bold tracking-tight text-slate-950">
        {plan.name}
      </h3>

      <p className="mt-2 min-h-[3.5rem] text-sm leading-6 text-slate-600">
        {plan.description}
      </p>

      <div className="mt-5 rounded-2xl bg-slate-50 p-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Pricing
        </p>
        <p className="mt-2 text-lg font-bold text-slate-900">{plan.price}</p>
        <p className="mt-1 text-xs text-slate-500">{plan.unit}</p>
      </div>

      <ul className="mt-6 flex-1 space-y-3">
        {plan.details.map((detail) => (
          <li key={detail} className="flex items-start gap-2.5">
            <CheckCircle2
              className="mt-0.5 h-4 w-4 shrink-0 text-cyan-700"
              aria-hidden="true"
            />
            <span className="text-sm leading-6 text-slate-600">{detail}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 border-t border-slate-100 pt-5">
        <p className="mb-5 text-sm leading-6 text-slate-500">
          {plan.highlight}
        </p>

        <WhatsAppButton
          href={createWhatsAppLink(plan.message)}
        >
          Enquire on WhatsApp
        </WhatsAppButton>
      </div>
    </motion.article>
  );
}

export default function Subscription() {
  const reducedMotion = useReducedMotion();

  return (
    <main className="min-h-screen bg-[#f7fbff] text-slate-800">
      <title>Water Jar Delivery Plans | Amrit Jal</title>
      <meta
        name="description"
        content="Explore daily, alternate-day, weekly and monthly 20L water jar delivery options from Amrit Jal. Contact us to confirm availability and pricing in Barhog."
      />
      <meta name="robots" content="index, follow" />

      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-cyan-100 bg-gradient-to-br from-white via-cyan-50 to-blue-50">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-24">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-4 py-2 text-sm font-semibold text-cyan-900 shadow-sm">
              <Droplets className="h-4 w-4" aria-hidden="true" />
              Amrit Jal · Barhog
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Water delivery that fits
              <span className="block text-cyan-800">your routine.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Planning daily, weekly or monthly 20L water jar deliveries?
              Tell us what you need, and contact Amrit Jal to confirm
              availability, pricing and delivery arrangements for your area.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton
                href={createWhatsAppLink(
                  "Hello Amrit Jal, I would like to discuss a water jar delivery plan in Barhog."
                )}
              >
                Discuss your requirement
              </WhatsAppButton>

              <WhatsAppButton
                secondary
                href={createWhatsAppLink(
                  "Hello Amrit Jal, please share the current 20L jar price and delivery availability."
                )}
              >
                Ask for current pricing
              </WhatsAppButton>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-cyan-800" />
                Confirm before ordering
              </span>
              <span className="inline-flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-cyan-800" />
                Direct WhatsApp enquiry
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: reducedMotion ? 0 : 0.55, delay: 0.1 }}
            className="relative"
          >
            <div className="rounded-[2rem] border border-white bg-white/90 p-5 shadow-xl shadow-cyan-950/5 sm:p-7">
              <div className="rounded-3xl bg-gradient-to-br from-cyan-800 to-blue-950 p-6 text-white sm:p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
                  <Droplets className="h-8 w-8" aria-hidden="true" />
                </div>

                <p className="mt-6 text-sm font-medium text-cyan-100">
                  Your delivery, your schedule
                </p>
                <h2 className="mt-2 text-2xl font-bold leading-snug sm:text-3xl">
                  Start with a simple enquiry.
                </h2>
                <p className="mt-3 text-sm leading-7 text-blue-100">
                  Share your location and approximate requirement. Confirm
                  the final price and schedule directly with our team.
                </p>

                <div className="mt-6 flex items-start gap-3 rounded-2xl border border-white/15 bg-white/10 p-4">
                  <Truck className="mt-0.5 h-5 w-5 shrink-0 text-cyan-200" />
                  <div>
                    <p className="text-sm font-semibold">Delivery availability</p>
                    <p className="mt-1 text-xs leading-5 text-blue-100">
                      Confirm your specific area and preferred timing before
                      placing an order.
                    </p>
                  </div>
                </div>
              </div>

              <p className="px-2 pt-5 text-center text-xs leading-6 text-slate-500">
                Prices, delivery schedules and service availability are
                confirmed individually before an order is accepted.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Delivery plans */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-800">
            Delivery options
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Choose a routine that works for you
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            These are enquiry options, not automatically confirmed subscriptions.
            Contact us to agree on the final schedule, quantity and price.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan, index) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              index={index}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>
      </section>

      {/* Bulk orders */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-800">
              Special requirements
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Bulk & event enquiries
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Tell us the event date, location and approximate number of jars.
              Our team can confirm whether the requirement can be accommodated.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {bulkOrders.map((order, index) => {
              const Icon = order.icon;

              return (
                <motion.article
                  key={order.name}
                  initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: reducedMotion ? 0 : 0.4,
                    delay: reducedMotion ? 0 : index * 0.07,
                  }}
                  className="flex flex-col rounded-3xl border border-slate-200 bg-[#f9fcff] p-6 transition-shadow hover:shadow-md sm:p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-800">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-950">
                    {order.name}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                    {order.description}
                  </p>

                  <div className="mt-6">
                    <WhatsAppButton
                      href={createWhatsAppLink(order.message)}
                      secondary
                    >
                      Request a quote
                    </WhatsAppButton>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="rounded-3xl border border-cyan-100 bg-cyan-50/60 p-6 sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-800">
                Simple process
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                How to get started
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                No need to guess the price or availability. Confirm the details
                before you commit.
              </p>
            </div>

            <ol className="space-y-5">
              {[
                {
                  title: "Send an enquiry",
                  text: "Choose a delivery option and open WhatsApp.",
                },
                {
                  title: "Share your requirements",
                  text: "Tell us your location, quantity and preferred schedule.",
                },
                {
                  title: "Confirm the details",
                  text: "Agree on price, availability and payment arrangements with our team.",
                },
              ].map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-800 text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900">{step.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {step.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-slate-950 px-6 py-10 text-center text-white sm:px-10 sm:py-14">
          <Clock3 className="mx-auto h-8 w-8 text-cyan-300" />
          <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
            Let's discuss your water requirements
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">
            Contact Amrit Jal to confirm current pricing, delivery availability
            and a suitable schedule for your household or business.
          </p>

          <a
            href={createWhatsAppLink(
              "Hello Amrit Jal, I would like to discuss my water jar delivery requirements. Please contact me with the available options."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-cyan-600 px-6 py-3 font-semibold text-white transition hover:bg-cyan-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            <MessageCircle className="h-5 w-5" />
            Chat with Amrit Jal
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </main>
  );
}
