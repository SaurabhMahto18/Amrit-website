import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ChevronDown,
} from "lucide-react";

// Framer Motion variants for staggered animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "General Inquiry",
    message: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Demo form submitted. Connect backend for real submission.");
  };

  return (
    <main className="bg-gradient-to-b from-blue-50/50 to-white min-h-screen relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-r from-blue-200 to-blue-100 rounded-b-full opacity-30 animate-wave -z-10"></div>

      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-blue-950"
        >
          Contact <span className="text-[#00AEEF]">Amrit Jal</span>
        </motion.h1>
        <p className="mt-4 text-lg text-blue-700 max-w-2xl mx-auto">
          We are here to answer your questions, take your orders, and provide support. Reach us via form, phone, WhatsApp, or social media.
        </p>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-3xl p-6 md:p-8 border border-blue-200 shadow-xl"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <h3 className="text-2xl font-bold text-blue-950">Send Us a Message</h3>
            <p className="text-blue-700 mt-1">
              Fill in the form below and we’ll respond as quickly as possible.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 grid md:grid-cols-2 gap-4">
              <motion.input
                variants={itemVariants}
                name="name"
                placeholder="Full name *"
                required
                value={formData.name}
                onChange={handleChange}
                className="col-span-1 px-4 py-3 rounded-2xl border border-blue-200 shadow-sm outline-none focus:ring-2 focus:ring-[#00AEEF]/50"
              />
              <motion.input
                variants={itemVariants}
                name="email"
                type="email"
                placeholder="Email *"
                required
                value={formData.email}
                onChange={handleChange}
                className="col-span-1 px-4 py-3 rounded-2xl border border-blue-200 shadow-sm outline-none focus:ring-2 focus:ring-[#00AEEF]/50"
              />
              <motion.input
                variants={itemVariants}
                name="phone"
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="col-span-1 px-4 py-3 rounded-2xl border border-blue-200 shadow-sm outline-none focus:ring-2 focus:ring-[#00AEEF]/50"
              />
              <motion.select
                variants={itemVariants}
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="col-span-1 px-4 py-3 rounded-2xl border border-blue-200 shadow-sm outline-none focus:ring-2 focus:ring-[#00AEEF]/50"
              >
                <option>General Inquiry</option>
                <option>Order</option>
                <option>Feedback</option>
                <option>Partnership</option>
                <option>Complaint</option>
              </motion.select>
              <motion.textarea
                variants={itemVariants}
                name="message"
                rows={4}
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="md:col-span-2 px-4 py-3 rounded-2xl border border-blue-200 shadow-sm outline-none focus:ring-2 focus:ring-[#00AEEF]/50"
              />
              <motion.input
                variants={itemVariants}
                name="file"
                type="file"
                onChange={handleChange}
                className="md:col-span-2 px-4 py-3 rounded-2xl border border-blue-200 bg-blue-50 shadow-sm outline-none text-blue-700"
              />
              <motion.button
                variants={itemVariants}
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="md:col-span-2 px-6 py-3 rounded-2xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors shadow-lg"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Details & Info */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Customer Care */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl p-6 border border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <p className="text-sm text-blue-500 font-medium">Customer Care</p>
              <div className="flex items-center gap-2 mt-2">
                <Phone className="w-5 h-5 text-blue-600" />
                <h4 className="text-lg font-semibold text-blue-950">+91 7366973933</h4>
              </div>
              <div className="flex gap-3 mt-4">
                <a
                  href="https://wa.me/917366973933"
                  className="px-4 py-2 rounded-xl bg-green-600 text-white font-medium hover:scale-105 transition-transform"
                >
                  WhatsApp
                </a>
                <a
                  href="mailto:care.amritjal@gmail.com"
                  className="px-4 py-2 rounded-xl border border-blue-200 text-blue-700 font-medium hover:bg-blue-100 transition-colors flex items-center gap-1"
                >
                  <Mail className="w-4 h-4" /> Email
                </a>
              </div>
            </motion.div>

            {/* Address & Map */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl p-6 border border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <p className="text-sm text-blue-500 font-medium">Our Hub Location</p>
              <div className="flex items-start gap-2 mt-2">
                <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <p className="text-lg font-medium text-blue-950 leading-relaxed">
                  Amrit Jal, Near Sanjay Mill, Barhog, Nalanda, BIHAR
                </p>
              </div>
              <p className="text-sm text-blue-600 mt-2 flex items-center gap-2">
                <Clock className="w-4 h-4" /> Mon–Sat, 9:00 AM – 7:00 PM
              </p>
              <div className="mt-4 rounded-xl overflow-hidden border border-blue-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238.10396928157098!2d85.66786631332285!3d25.281634262748984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f261c400c1bbb9%3A0x5463df14a944454d!2sAmrit%20Jal!5e1!3m2!1sen!2sin!4v1755638403112!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl p-6 border border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <p className="text-sm text-blue-500 font-medium">Follow Us</p>
              <div className="flex gap-4 mt-3">
                <a href="#" className="p-3 bg-blue-600 text-white rounded-full hover:scale-110 transition-transform">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 bg-pink-500 text-white rounded-full hover:scale-110 transition-transform">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 bg-blue-800 text-white rounded-full hover:scale-110 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 bg-sky-500 text-white rounded-full hover:scale-110 transition-transform">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* FAQ + CTA */}
        <div className="max-w-7xl mx-auto px-4 mt-20 grid md:grid-cols-2 gap-8">
          {/* FAQ */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="bg-white rounded-3xl p-6 md:p-8 border border-blue-200 shadow-xl"
          >
            <h4 className="text-xl font-bold text-blue-950 mb-4">Quick Help & FAQ</h4>
            <div className="space-y-4">
              {[
                { q: "How can I place a bulk order?", a: "Call our customer care or fill out the contact form for a quick quote." },
                { q: "Do you provide home delivery?", a: "Yes, we deliver within serviceable areas. Contact us on WhatsApp for special requests." },
                { q: "What payment methods are available?", a: "We accept UPI, cards, net banking, and cash on delivery for your convenience." },
                { q: "How fast is delivery?", a: "Delivery typically takes 12-24 hours depending on your location. Subscriptions are delivered on your set schedule." },
              ].map((item, idx) => (
                <motion.details
                  key={idx}
                  variants={itemVariants}
                  className="group rounded-xl border border-blue-200 px-4 py-3"
                >
                  <summary className="flex items-center justify-between cursor-pointer font-medium text-blue-800">
                    {item.q}
                    <motion.span 
                      className="ml-2 transition-transform"
                      animate={{ rotate: item.open ? 180 : 0 }} // This requires state management in the parent component
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.span>
                  </summary>
                  <p className="mt-2 text-blue-600 text-sm leading-relaxed">{item.a}</p>
                </motion.details>
              ))}
            </div>
          </motion.div>

          {/* CTA Box */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-blue-600 to-cyan-500 text-white rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-center"
          >
            <h4 className="text-xl font-bold">Want Amrit Jal at your doorstep?</h4>
            <p className="mt-2 text-sm text-blue-100">Fresh, pure, and mineral-rich water delivered to you.</p>
            <a
              href="tel:+917366973933"
              className="mt-6 px-6 py-3 rounded-2xl bg-white text-blue-700 font-semibold hover:scale-105 transition-transform text-center shadow-md"
            >
              Order Now
            </a>
          </motion.div>
        </div>
      </section>
      
      <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-5px) rotate(1deg); }
        }
        .animate-wave {
          animation: wave 6s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}