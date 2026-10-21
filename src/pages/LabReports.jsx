
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  ArrowDownToLine,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  FileSearch,
  FileText,
  FlaskConical,
  Info,
  MessageCircle,
  Search,
  ShieldCheck,
} from "lucide-react";

const BASE_URL = import.meta.env.BASE_URL;

const WHATSAPP_URL =
  "https://wa.me/917366973933?text=" +
  encodeURIComponent(
    "Hello Amrit Jal, I would like to enquire about water quality reports."
  );

const REPORTS = [
  {
    id: "latest",
    title: "Latest Water Quality Report",
    date: "Latest report",
    description:
      "View the most recent available water quality report, when published.",
    file: `${BASE_URL}assets/reports/latest-lab-report.pdf`,
    status: "Verify file before publishing",
  },
  {
    id: "july-2025",
    title: "July 2025 Report",
    date: "July 2025",
    description: "Archived report. Confirm the document and its test results.",
    file: `${BASE_URL}assets/reports/july-2025.pdf`,
    status: "Archive",
  },
  {
    id: "april-2025",
    title: "April 2025 Report",
    date: "April 2025",
    description: "Archived report. Confirm the document and its test results.",
    file: `${BASE_URL}assets/reports/april-2025.pdf`,
    status: "Archive",
  },
  {
    id: "january-2025",
    title: "January 2025 Report",
    date: "January 2025",
    description: "Archived report. Confirm the document and its test results.",
    file: `${BASE_URL}assets/reports/jan-2025.pdf`,
    status: "Archive",
  },
];

const FEATURES = [
  {
    icon: FileSearch,
    title: "Report transparency",
    text: "Access published documents and review the details they contain.",
  },
  {
    icon: FlaskConical,
    title: "Test-specific results",
    text: "Refer to the actual report for parameters, results, dates and methods.",
  },
  {
    icon: ClipboardCheck,
    title: "Document verification",
    text: "Check the issuing laboratory, sample details and report validity where applicable.",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 leading-7 text-slate-600">{description}</p>
      )}
    </div>
  );
}

function ReportCard({ report, index, reduceMotion }) {
  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-800">
          <FileText size={22} aria-hidden="true" />
        </span>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
          {report.status}
        </span>
      </div>

      <h3 className="mt-5 text-lg font-bold text-slate-900">
        {report.title}
      </h3>

      <p className="mt-2 flex items-center gap-2 text-sm text-slate-500">
        <CalendarDays size={16} aria-hidden="true" />
        {report.date}
      </p>

      <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
        {report.description}
      </p>

      <a
        href={report.file}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-cyan-200 px-4 py-3 text-sm font-semibold text-cyan-800 transition hover:bg-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2"
        aria-label={`Open ${report.title} PDF`}
      >
        <ArrowDownToLine size={17} aria-hidden="true" />
        Open report PDF
      </a>
    </motion.article>
  );
}

export default function LabReports() {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const reduceMotion = useReducedMotion();

  const filteredReports = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) return REPORTS;

    return REPORTS.filter((report) =>
      `${report.title} ${report.date} ${report.description}`
        .toLowerCase()
        .includes(query)
    );
  }, [searchTerm]);

  const archiveReports = filteredReports.filter(
    (report) => report.id !== "latest"
  );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <title>Water Quality & Lab Reports | Amrit Jal</title>
      <meta
        name="description"
        content="Explore published water quality reports from Amrit Jal. Review available documents, report dates and laboratory details, or contact us with verification questions."
      />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#f8fafc" />

      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-slate-200 bg-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-100/70 via-white to-white"
        />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-12 lg:py-24">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-4 py-2 text-sm font-semibold text-cyan-800 shadow-sm">
              <Activity size={16} aria-hidden="true" />
              Quality information
            </span>

            <h1 className="mt-6 max-w-2xl text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Water Quality &{" "}
              <span className="text-cyan-700">Lab Reports</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Find published water quality documents from Amrit Jal. Review
              the report itself for sample information, testing dates,
              measured parameters and laboratory details.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#available-reports"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-cyan-700 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-cyan-700 focus:ring-offset-2"
              >
                Explore reports
                <ArrowRight size={18} aria-hidden="true" />
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-cyan-700 focus:ring-offset-2"
              >
                <MessageCircle size={18} aria-hidden="true" />
                Ask a question
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <div className="rounded-3xl border border-cyan-100 bg-white p-6 shadow-xl shadow-cyan-950/5 sm:p-8">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-800">
                <ShieldCheck size={30} aria-hidden="true" />
              </div>
              <h2 className="mt-5 text-xl font-bold text-slate-900">
                Read the original report
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                Laboratory documents provide the context needed to understand
                individual test results. Check the sample date, report number,
                laboratory name and stated limits rather than relying on a
                summary alone.
              </p>
              <div className="mt-6 flex items-start gap-3 rounded-xl bg-amber-50 p-4 text-sm leading-6 text-amber-950">
                <Info
                  size={19}
                  className="mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <p>
                  A report applies to its stated sample and testing scope. It
                  does not automatically establish results for every batch or
                  future delivery.
                </p>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -right-3 -z-10 size-28 rounded-full bg-cyan-200/60 blur-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* What to look for */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
        <SectionHeading
          eyebrow="Understand the documents"
          title="What to check in a lab report"
          description="Use the details printed on the actual document to understand what was tested and what the findings mean."
        />

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.article
                key={feature.title}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-800">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-bold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {feature.text}
                </p>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* Reports */}
      <section
        id="available-reports"
        className="border-y border-slate-200 bg-white"
      >
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Document library"
              title="Available reports"
              description="Open a PDF to inspect the original document. Only keep entries here when the corresponding file is genuine and ready to publish."
            />

            <label className="relative block w-full md:max-w-xs">
              <span className="sr-only">Search lab reports</span>
              <Search
                size={18}
                aria-hidden="true"
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search reports..."
                className="min-h-12 w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100"
              />
            </label>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredReports
              .filter((report) => report.id === "latest")
              .map((report, index) => (
                <ReportCard
                  key={report.id}
                  report={report}
                  index={index}
                  reduceMotion={reduceMotion}
                />
              ))}
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-bold text-slate-900">
              Previous reports
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Historical documents are useful for reference, but should not be
              presented as current results.
            </p>

            {archiveReports.length > 0 ? (
              <div className="mt-5 space-y-3">
                {archiveReports.map((report, index) => {
                  const isOpen = openIndex === report.id;

                  return (
                    <article
                      key={report.id}
                      className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setOpenIndex(isOpen ? null : report.id)
                        }
                        aria-expanded={isOpen}
                        aria-controls={`report-panel-${report.id}`}
                        className="flex min-h-16 w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600"
                      >
                        <span className="flex items-center gap-3">
                          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                            <FileText size={19} aria-hidden="true" />
                          </span>
                          <span>
                            <span className="block font-semibold text-slate-900">
                              {report.title}
                            </span>
                            <span className="mt-1 block text-sm text-slate-500">
                              {report.date}
                            </span>
                          </span>
                        </span>
                        <ChevronDown
                          size={20}
                          aria-hidden="true"
                          className={`shrink-0 text-slate-500 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div
                          id={`report-panel-${report.id}`}
                          className="border-t border-slate-200 bg-slate-50 px-5 py-4"
                        >
                          <p className="text-sm leading-6 text-slate-600">
                            {report.description}
                          </p>
                          <a
                            href={report.file}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-flex min-h-10 items-center gap-2 font-semibold text-cyan-800 hover:text-cyan-950 focus:outline-none focus:underline"
                          >
                            <ArrowDownToLine size={17} aria-hidden="true" />
                            Open archived PDF
                          </a>
                        </div>
                      )}
                    </article>
                  );
                })}
              </div>
            ) : (
              <p className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
                No archived reports match “{searchTerm}”.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
        <div className="overflow-hidden rounded-3xl bg-slate-900 p-7 text-white sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
              Need clarification?
            </p>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
              Questions about a report?
            </h2>
            <p className="mt-3 leading-7 text-slate-300">
              Contact Amrit Jal to ask about available documents or request
              clarification on report details.
            </p>
          </div>

          <div className="mt-6 flex shrink-0 flex-col gap-3 sm:flex-row lg:mt-0">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-cyan-600 px-5 py-3 font-semibold text-white transition hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              <MessageCircle size={18} aria-hidden="true" />
              WhatsApp us
            </a>
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-600 px-5 py-3 font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Contact page
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
