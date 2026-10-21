
import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Clock,
  MapPin,
  CheckCircle2,
  MessageCircle,
  Droplets,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

const WHATSAPP_NUMBER = "917366973933";

const SERVICEABLE_PINCODES = [
  "803107", // Barhog — verify the PIN code and service area before publishing
];

export default function DeliveryCheck() {
  const [pincode, setPincode] = useState("");
  const [status, setStatus] = useState(null);
  const reducedMotion = useReducedMotion();

  const handleDeliveryCheck = (e) => {
    e.preventDefault();

    if (!/^[1-9]\d{5}$/.test(pincode)) {
      setStatus("invalid");
      return;
    }

    setStatus(
      SERVICEABLE_PINCODES.includes(pincode)
        ? "available"
        : "unavailable"
    );
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Amrit Jal! I want to check water jar delivery availability in my area. My PIN code is ${pincode || "not provided"}. Please confirm availability and delivery details.`
  );

  return (
    <section
      id="delivery-check"
      aria-labelledby="delivery-heading"
      className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-100/80 px-4 py-20 sm:px-6 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-cyan-200/40 blur-[100px]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: Delivery checker */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reducedMotion ? 0 : 0.5 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-blue-800">
            <MapPin size={16} className="text-cyan-600" />
            Barhog & Nearby Areas
          </span>

          <h2
            id="delivery-heading"
            className="mt-6 text-3xl font-black leading-tight tracking-tight text-blue-950 sm:text-5xl"
          >
            Fresh Water,
            <span className="mt-2 block bg-gradient-to-r from-cyan-500 to-blue-700 bg-clip-text text-transparent">
              Delivered to You.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            Check whether Amrit Jal water jar delivery is available in your
            area. Enter your PIN code to get started.
          </p>

          {/* Delivery information card — no jar rate */}
          <div className="mt-8 flex max-w-md items-center gap-4 rounded-2xl border border-blue-100 bg-white p-5 shadow-lg shadow-blue-900/5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 text-white shadow-md shadow-cyan-600/20">
              <Droplets size={28} />
            </div>

            <div>
              <p className="font-bold text-blue-950">20L Water Jar Delivery</p>
              <p className="mt-1 text-sm leading-5 text-slate-500">
                Convenient doorstep delivery in our service areas.
              </p>
            </div>
          </div>

          {/* PIN code form */}
          <form onSubmit={handleDeliveryCheck} className="mt-7 max-w-xl">
            <label
              htmlFor="delivery-pincode"
              className="mb-3 block text-sm font-semibold text-blue-950"
            >
              Enter your 6-digit PIN code
            </label>

            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                id="delivery-pincode"
                type="text"
                inputMode="numeric"
                autoComplete="postal-code"
                maxLength={6}
                pattern="[1-9][0-9]{5}"
                value={pincode}
                onChange={(e) => {
                  setPincode(
                    e.target.value.replace(/\D/g, "").slice(0, 6)
                  );
                  setStatus(null);
                }}
                placeholder="e.g. 803107"
                aria-describedby="delivery-result"
                className="min-w-0 flex-1 rounded-2xl border border-blue-200 bg-white px-5 py-4 text-base text-blue-950 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                required
              />

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-4 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:from-cyan-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
              >
                Check Area <ArrowRight size={18} />
              </button>
            </div>
          </form>

          {/* Result messages */}
          <div id="delivery-result" aria-live="polite">
            {status === "invalid" && (
              <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
                Please enter a valid 6-digit Indian PIN code.
              </p>
            )}

            {status === "available" && (
              <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm leading-6 text-emerald-800">
                <CheckCircle2 className="mr-2 inline" size={18} />
                Your PIN code is in our service area. Contact us to confirm
                delivery timing and order details.
              </div>
            )}

            {status === "unavailable" && (
              <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-800">
                Delivery is not confirmed for this PIN code yet. Contact us
                on WhatsApp to enquire about your area.
              </div>
            )}
          </div>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-green-600 px-5 py-3 font-semibold text-white shadow-md shadow-green-700/10 transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            <MessageCircle size={19} />
            Ask on WhatsApp
          </a>

          <div className="mt-8 flex items-start gap-3 text-sm leading-6 text-slate-500">
            <ShieldCheck
              className="mt-0.5 shrink-0 text-cyan-600"
              size={19}
            />
            <p>
              Our team will confirm delivery availability and timing for your
              location.
            </p>
          </div>
        </motion.div>

        {/* Right: Google Maps */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reducedMotion ? 0 : 0.5, delay: 0.1 }}
          className="overflow-hidden rounded-3xl border border-blue-100 bg-white p-3 shadow-xl shadow-blue-900/10 sm:p-4"
        >
          <div className="mb-4 flex items-center gap-3 px-2 pt-2">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
              <MapPin size={23} />
            </div>

            <div>
              <h3 className="font-bold text-blue-950">
                Our Delivery Hub
              </h3>
              <p className="text-sm text-slate-500">
                Find us on Google Maps
              </p>
            </div>
          </div>

          <iframe
            title="Amrit Jal location on Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238.10396928157098!2d85.66786631332285!3d25.281634262748984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f261c400c1bbb9%3A0x5463df14a944454d!2sAmrit%20Jal!5e1!3m2!1sen!2sin!4v1755638403112!5m2!1sen!2sin"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full rounded-2xl"
          />

          <p className="px-2 pb-1 pt-3 text-xs leading-5 text-slate-500">
            Please verify that the map pin shows your actual delivery hub.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
