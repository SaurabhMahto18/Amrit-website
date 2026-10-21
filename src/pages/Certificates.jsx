
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ShieldCheck,
  FileText,
  Download,
  ExternalLink,
  BadgeInfo,
  CircleCheck,
  CircleAlert,
  Droplets,
  MessageCircle,
} from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/917366973933?text=Hello%20Amrit%20Jal%2C%20I%20would%20like%20to%20enquire%20about%20your%20water%20quality%20documents.";

const documents = [
  {
    id: "bis",
    title: "BIS Certification",
    subtitle: "Indian Standard IS 14543",
    description:
      "For packaged drinking water, applicable BIS certification details should be checked against the actual licence and its validity.",
    preview: "/assets/certificates/bis-preview.jpg",
    file: "/assets/certificates/bis.pdf",
    accent: "blue",
    status: "Verification required",
  },
  {
    id: "fssai",
    title: "FSSAI Licence",
    subtitle: "Food safety licence details",
    description:
      "The applicable FSSAI licence should be verified using the genuine licence document and relevant business details.",
    preview: "/assets/certificates/fssai-preview.jpg",
    file: "/assets/certificates/fssai.pdf",
    accent: "orange",
    status: "Verification required",
  },
];

function CertificateCard({ document, index, reducedMotion }) {
  const [previewFailed, setPreviewFailed] = useState(false);
  const [fileStatus, setFileStatus] = useState("unknown");

  const isBlue = document.accent === "blue";

  const accentClasses = isBlue
    ? {
        icon: "bg-blue-50 text-blue-700 ring-blue-100",
        label: "bg-blue-50 text-blue-800",
        button: "bg-blue-700 hover:bg-blue-800",
      }
    : {
        icon: "bg-orange-50 text-orange-700 ring-orange-100",
        label: "bg-orange-50 text-orange-800",
        button: "bg-orange-600 hover:bg-orange-700",
      };

  const handleDocumentError = () => {
    setFileStatus("missing");
  };

  return (
    <motion.article
      initial={reducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reducedMotion ? 0 : 0.4,
        delay: reducedMotion ? 0 : index * 0.08,
      }}
      className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
    >
      <div className="border-b border-slate-100 p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ring-1 ${accentClasses.icon}`}
            >
              <ShieldCheck className="h-6 w-6" aria-hidden="true" />
            </div>

            <div>
              <h2 className="text-xl font-bold tracking-tight text-slate-950">
                {document.title}
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                {document.subtitle}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <span
            className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold ${accentClasses.label}`}
          >
            <CircleAlert className="h-3.5 w-3.5" aria-hidden="true" />
            {document.status}
          </span>
        </div>
      </div>

      <div className="px-6 pt-6 sm:px-7">
        <div className="flex min-h-56 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
          {!previewFailed ? (
            <img
              src={document.preview}
              alt={`${document.title} document preview`}
              loading="lazy"
              className="h-56 w-full object-contain"
              onError={() => setPreviewFailed(true)}
            />
          ) : (
            <div className="px-6 py-8 text-center">
              <FileText
                className="mx-auto h-12 w-12 text-slate-400"
                aria-hidden="true"
              />
              <p className="mt-3 font-semibold text-slate-700">
                Preview unavailable
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-500">
                Add the genuine document preview to the public assets folder.
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="text-sm leading-7 text-slate-600">
          {document.description}
        </p>

        <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4">
          <div className="flex items-start gap-2.5">
            <BadgeInfo
              className="mt-0.5 h-5 w-5 shrink-0 text-amber-800"
              aria-hidden="true"
            />
            <p className="text-xs leading-6 text-amber-950">
              Confirm the document number, registered entity, applicable
              product and validity before treating this document as proof of
              current certification.
            </p>
          </div>
        </div>

        {fileStatus === "missing" && (
          <p role="status" className="mt-3 text-sm text-red-700">
            The document could not be opened. Check that the PDF exists in
            your public assets folder.
          </p>
        )}

        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          <a
            href={document.file}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setFileStatus("unknown")}
            onError={handleDocumentError}
            className={`inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-700 focus-visible:ring-offset-2 ${accentClasses.button}`}
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            View PDF
          </a>

          <a
            href={document.file}
            download
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-700 focus-visible:ring-offset-2"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Certificates() {
  const reducedMotion = useReducedMotion();

  return (
    <main className="min-h-screen bg-[#f7fbff] text-slate-800">
      <title>Certifications & Quality Documents | Amrit Jal</title>
      <meta
        name="description"
        content="Review certification and water-quality document information for Amrit Jal. Contact us to request genuine, applicable and current documents."
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

        <div className="relative mx-auto max-w-6xl px-5 py-16 text-center sm:px-8 sm:py-20">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.45 }}
          >
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-4 py-2 text-sm font-semibold text-cyan-900 shadow-sm">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              Transparency & documentation
            </div>

            <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Quality documents.
              <span className="block text-cyan-800">
                Clear information.
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              We believe customers should be able to ask questions about
              applicable licences, certification and water-quality records.
              Contact Amrit Jal to confirm which current documents apply to
              the products and business you are enquiring about.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Notice */}
      <section className="mx-auto max-w-6xl px-5 pt-10 sm:px-8">
        <div className="flex items-start gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6">
          <BadgeInfo
            className="mt-0.5 h-6 w-6 shrink-0 text-amber-800"
            aria-hidden="true"
          />
          <div>
            <h2 className="font-bold text-amber-950">
              Documents must be verified before publication
            </h2>
            <p className="mt-2 text-sm leading-7 text-amber-950/90">
              The document paths below are examples carried over from the
              existing project. Confirm that the actual PDFs and preview
              images exist, are genuine, and relate to the relevant registered
              entity and products. Do not publish certification claims until
              the documents have been checked.
            </p>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-800">
            Document centre
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            Certification & licence information
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
            Use the document links only after adding the relevant genuine files
            to your project's public assets.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {documents.map((document, index) => (
            <CertificateCard
              key={document.id}
              document={document}
              index={index}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8 sm:pb-20">
        <div className="rounded-3xl bg-slate-950 p-7 text-white sm:p-10">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-cyan-300">
                <Droplets className="h-4 w-4" aria-hidden="true" />
                Amrit Jal · Barhog
              </div>
              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                Need a specific quality document?
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                Contact us to ask about applicable licences, certificates or
                available water-quality records. We can confirm what is
                available for your enquiry.
              </p>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-cyan-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Enquire on WhatsApp
            </a>
          </div>

          <div className="mt-7 border-t border-white/15 pt-5 text-xs leading-6 text-slate-400">
            Certification and licence requirements depend on the applicable
            product, business activity and current regulations. Document
            availability alone does not establish current validity.
          </div>
        </div>
      </section>
    </main>
  );
}
