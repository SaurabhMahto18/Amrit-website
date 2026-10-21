
import { useReducedMotion } from "framer-motion";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  UserRound,
  LockKeyhole,
  Share2,
  FileText,
  RefreshCw,
  Mail,
  Phone,
  MessageCircle,
  Cookie,
  Database,
  ShoppingBag,
  ChevronRight,
  CalendarDays,
  CircleHelp,
  Eye,
  Trash2,
  Globe,
} from "lucide-react";

const BRAND = "Amrit Jal";
const EMAIL = "care.amritjal@gmail.com";
const PHONE = "+917366973933";
const WHATSAPP =
  "https://wa.me/917366973933?text=Hello%20Amrit%20Jal%2C%20I%20have%20a%20privacy%20question.";

const LAST_UPDATED = "21 October 2026";

const sections = [
  {
    id: "information",
    title: "Information We Collect",
    subtitle: "What information may be collected",
    icon: UserRound,
    content: [
      {
        heading: "Contact and delivery details",
        text: "When you contact us or place an order, we may collect your name, phone number, email address and delivery address, along with details you choose to provide.",
      },
      {
        heading: "Order information",
        text: "We may process product selections, quantities, order history, delivery instructions and customer support messages to help manage your requests.",
      },
      {
        heading: "Payment information",
        text: "If online payments are enabled, payment information may be handled by the relevant payment provider. The actual information collected and stored depends on the payment method and integration in use.",
      },
      {
        heading: "Technical information",
        text: "Our website or hosting services may process technical information such as browser type, device information, IP address and basic usage logs, depending on the services enabled.",
      },
    ],
  },
  {
    id: "usage",
    title: "How We Use Your Information",
    subtitle: "Why your information matters",
    icon: ShoppingBag,
    content: [
      {
        heading: "Order handling",
        text: "To respond to enquiries, confirm order details and coordinate delivery where available.",
      },
      {
        heading: "Customer support",
        text: "To answer questions, resolve order issues and communicate about requests you have made.",
      },
      {
        heading: "Service improvement",
        text: "To understand website issues and improve the usability and reliability of our services where relevant data is available.",
      },
      {
        heading: "Important communications",
        text: "To send order-related updates or important service and policy information. Promotional messages should be sent only where permitted and, when required, with your consent.",
      },
    ],
  },
  {
    id: "whatsapp",
    title: "WhatsApp & Customer Communication",
    subtitle: "Messages and contact preferences",
    icon: MessageCircle,
    content: [
      {
        heading: "When you contact us",
        text: "If you choose to contact Amrit Jal through WhatsApp, phone or email, we will use the information you provide to respond to your enquiry.",
      },
      {
        heading: "Third-party platform",
        text: "WhatsApp and other communication services operate under their own privacy policies and terms. Information shared through these services may be processed by the relevant provider.",
      },
      {
        heading: "Your choice",
        text: "Avoid sharing passwords, payment credentials or unnecessary sensitive information in messages. You may contact us to discuss your communication preferences.",
      },
    ],
  },
  {
    id: "cookies",
    title: "Cookies & Website Technologies",
    subtitle: "Browser preferences and usage",
    icon: Cookie,
    content: [
      {
        heading: "Essential functionality",
        text: "The website or its hosting infrastructure may use browser storage or similar technologies to support features such as navigation, preferences or shopping-cart functionality.",
      },
      {
        heading: "Analytics and optional tools",
        text: "Analytics, advertising pixels or other tracking tools should only be described as active if they are actually installed. Their use may depend on the website configuration and applicable consent requirements.",
      },
      {
        heading: "Browser controls",
        text: "You can review your browser settings to manage cookies and site data. Blocking certain technologies may affect some website features.",
      },
    ],
  },
  {
    id: "sharing",
    title: "Sharing & Third-Party Services",
    subtitle: "When information may be disclosed",
    icon: Share2,
    content: [
      {
        heading: "Service providers",
        text: "Information may be shared with relevant providers when necessary to operate a requested service, such as website hosting, communication, delivery coordination or payment processing.",
      },
      {
        heading: "Legal obligations",
        text: "Information may be disclosed when required by applicable law or a valid legal process, or when necessary to protect legal rights and address security concerns.",
      },
      {
        heading: "No sale of personal information",
        text: "Amrit Jal does not intend to sell personal information. Any sharing should be limited to legitimate purposes and handled in accordance with applicable requirements.",
      },
    ],
  },
  {
    id: "security",
    title: "Data Security",
    subtitle: "Protecting the information you share",
    icon: LockKeyhole,
    content: [
      {
        heading: "Reasonable safeguards",
        text: "Appropriate technical and organisational safeguards should be used to protect personal information against unauthorised access, loss, misuse or disclosure.",
      },
      {
        heading: "Access and transmission",
        text: "Access to personal information should be limited to people and services that need it for legitimate business purposes. The safeguards available depend on the systems in use.",
      },
      {
        heading: "Important limitation",
        text: "No website or electronic transmission can be guaranteed to be completely secure. Please avoid sending confidential credentials through ordinary messages.",
      },
    ],
  },
  {
    id: "retention",
    title: "Data Retention & Deletion",
    subtitle: "How long information may be kept",
    icon: Database,
    content: [
      {
        heading: "Retention",
        text: "Personal information should be retained only for as long as reasonably necessary for the purpose for which it was collected, including order management, customer support and applicable legal or accounting obligations.",
      },
      {
        heading: "Deletion requests",
        text: "You may contact us to request deletion of personal information. We may need to retain certain records where required by law or where a legitimate, lawful reason applies.",
      },
    ],
  },
  {
    id: "rights",
    title: "Your Privacy Choices & Rights",
    subtitle: "Requests concerning your information",
    icon: ShieldCheck,
    content: [
      {
        heading: "Access and correction",
        text: "You may contact us to ask about personal information associated with your enquiry or orders, or to request correction of inaccurate information, subject to applicable law and verification.",
      },
      {
        heading: "Marketing preferences",
        text: "If you receive promotional communications, you may ask us to stop sending them. Essential service or transaction-related messages may still be necessary.",
      },
      {
        heading: "How to make a request",
        text: "Email us at care.amritjal@gmail.com with the subject “Privacy Request”. Please include enough information for us to understand your request, but do not send passwords or payment credentials.",
      },
    ],
  },
  {
    id: "children",
    title: "Children's Privacy",
    subtitle: "Information about younger users",
    icon: Eye,
    content: [
      {
        heading: "Responsible use",
        text: "Our website is intended for people making product enquiries or purchases. Children should not submit personal information without appropriate parent or guardian involvement.",
      },
      {
        heading: "Questions or concerns",
        text: "If you believe a child has provided personal information through our website, contact us so the matter can be reviewed and handled appropriately.",
      },
    ],
  },
  {
    id: "international",
    title: "Third-Party Links & External Services",
    subtitle: "When you leave our website",
    icon: Globe,
    content: [
      {
        heading: "External websites",
        text: "Our website may link to third-party services, such as WhatsApp. We do not control the privacy practices of external websites or services.",
      },
      {
        heading: "Review their policies",
        text: "Before sharing information through an external service, review that provider's terms and privacy policy.",
      },
    ],
  },
  {
    id: "updates",
    title: "Policy Updates",
    subtitle: "Keeping this policy current",
    icon: RefreshCw,
    content: [
      {
        heading: "Changes",
        text: "This Privacy Policy may be revised when our website, services or applicable legal requirements change.",
      },
      {
        heading: "Latest version",
        text: "The revision date shown at the top of this page indicates the version date published by Amrit Jal. Please review this page periodically for updates.",
      },
    ],
  },
];

function SectionCard({ section, index, reducedMotion }) {
  const Icon = section.icon;

  return (
    <motion.article
      id={section.id}
      initial={reducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: reducedMotion ? 0 : 0.4,
        delay: reducedMotion ? 0 : Math.min(index * 0.035, 0.2),
      }}
      className="scroll-mt-28 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-8"
    >
      <div className="mb-6 flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-800 ring-1 ring-cyan-100">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>

        <div>
          <h2 className="text-xl font-bold tracking-tight text-slate-900">
            {section.title}
          </h2>
          <p className="mt-1 text-sm text-slate-500">{section.subtitle}</p>
        </div>
      </div>

      <div className="space-y-5">
        {section.content.map((item) => (
          <div key={item.heading}>
            <h3 className="text-sm font-semibold text-slate-800">
              {item.heading}
            </h3>
            <p className="mt-1.5 text-sm leading-7 text-slate-600">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </motion.article>
  );
}

export default function PrivacyPolicy() {
  const reducedMotion = useReducedMotion();

  return (
    <main className="min-h-screen bg-[#f7fbff] text-slate-800">
      <title>Privacy Policy | Amrit Jal</title>
      <meta
        name="description"
        content="Read the Amrit Jal Privacy Policy to understand how customer, order and contact information may be collected, used, protected and managed."
      />
      <meta name="robots" content="index, follow" />

      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-cyan-100 bg-gradient-to-br from-white via-cyan-50 to-blue-50">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl"
        />

        <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.5 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-4 py-2 text-sm font-semibold text-cyan-900 shadow-sm">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              Your privacy matters
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Privacy, handled
              <span className="block text-cyan-800">with care.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              At <strong className="text-slate-800">Amrit Jal</strong>, we
              believe customers should understand how their information may be
              used when they browse our website, contact us or enquire about an
              order.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-3 py-2">
                <CalendarDays className="h-4 w-4 text-cyan-800" />
                Last updated: {LAST_UPDATED}
              </span>
              <span className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-3 py-2">
                <FileText className="h-4 w-4 text-cyan-800" />
                Privacy policy
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-6xl px-5 pt-10 sm:px-8">
        <div className="grid gap-6 md:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-800">
                <FileText className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-bold text-slate-900">
                About this policy
              </h2>
            </div>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              This page explains the general ways personal information may be
              handled when you use Amrit Jal's website and contact channels.
              The information actually collected depends on the features you
              use and the services enabled on the website.
            </p>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              This policy should be read alongside any applicable order terms
              and notices presented when you use a particular service.
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-100 bg-cyan-50/70 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <CircleHelp className="h-6 w-6 text-cyan-900" />
              <h2 className="text-lg font-bold text-slate-900">
                Need help?
              </h2>
            </div>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Have a question about your personal information? Contact our
              team using the details below.
            </p>

            <a
              href={`mailto:${EMAIL}?subject=Privacy%20Request`}
              className="mt-5 inline-flex items-center gap-2 font-semibold text-cyan-900 hover:text-cyan-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-700 focus-visible:ring-offset-4"
            >
              Contact us
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Contents and policy sections */}
      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-800">
            Privacy overview
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            How your information is handled
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
            Explore each topic below. Select a section to jump directly to its
            details.
          </p>
        </div>

        <nav
          aria-label="Privacy policy sections"
          className="mb-8 rounded-3xl border border-slate-200 bg-white p-5 sm:p-6"
        >
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((section) => {
              const Icon = section.icon;

              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="group flex min-h-12 items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-700 transition hover:bg-cyan-50 hover:text-cyan-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-700"
                >
                  <Icon className="h-4 w-4 shrink-0 text-cyan-800" />
                  <span className="font-medium">{section.title}</span>
                  <ChevronRight className="ml-auto h-4 w-4 shrink-0 opacity-50 transition group-hover:translate-x-0.5" />
                </a>
              );
            })}
          </div>
        </nav>

        <div className="space-y-5">
          {sections.map((section, index) => (
            <SectionCard
              key={section.id}
              section={section}
              index={index}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>
      </section>

      {/* Contact panel */}
      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8 sm:pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-slate-950 p-7 text-white sm:p-10 lg:p-12">
          <div
            aria-hidden="true"
            className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl"
          />

          <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">
                We're here to help
              </p>
              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                Questions about your privacy?
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300">
                Reach out to Amrit Jal for privacy questions, correction
                requests or concerns about information you have shared with us.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <a
                href={`mailto:${EMAIL}?subject=Privacy%20Request`}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                <Mail className="h-4 w-4" />
                Email us
              </a>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>

              <a
                href={`tel:${PHONE}`}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                <Phone className="h-4 w-4" />
                Call Amrit Jal
              </a>
            </div>
          </div>

          <div className="relative mt-8 border-t border-white/15 pt-5 text-xs leading-6 text-slate-400">
            This page provides general information about privacy practices. It
            is not a substitute for legal advice. Please ensure the final policy
            matches your actual website configuration and applicable law.
          </div>
        </div>
      </section>
    </main>
  );
}
