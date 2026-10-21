
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ShoppingBag,
  Droplets,
  ImageOff,
} from "lucide-react";
import { badgeColors } from "../data/products";

export default function ProductCard({ product, index = 0 }) {
  const reducedMotion = useReducedMotion();
  const [imageError, setImageError] = useState(false);

  const productName = `${product.size || "Water"} Water Bottle`;

  return (
    <motion.article
      initial={reducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reducedMotion ? 0 : 0.4,
        delay: reducedMotion ? 0 : Math.min(index * 0.06, 0.3),
      }}
      whileHover={reducedMotion ? undefined : { y: -5 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl
        border border-blue-100 bg-white shadow-md shadow-blue-950/5
        transition-shadow duration-300 hover:shadow-xl hover:shadow-blue-950/10"
    >
      {/* Product image */}
      <Link
        to={`/product/${product.id}`}
        aria-label={`View ${productName} details`}
        className="relative block overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-100/70
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-500"
      >
        <div className="relative flex h-56 items-center justify-center p-6 sm:h-64">
          {!imageError && product.img ? (
            <img
              src={product.img}
              alt={product.name || productName}
              loading="lazy"
              onError={() => setImageError(true)}
              className="h-full w-full object-contain transition-transform
                duration-500 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="flex flex-col items-center gap-3 text-blue-300">
              <ImageOff size={42} strokeWidth={1.4} />
              <span className="text-sm">Product image unavailable</span>
            </div>
          )}

          {/* Decorative background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-12 -right-8 h-36 w-36
              rounded-full bg-cyan-200/30 blur-2xl"
          />

          {/* Product badge */}
          {product.badge && (
            <span
              className={`absolute left-4 top-4 z-10 rounded-full px-3 py-1.5
                text-xs font-bold shadow-sm ${
                  badgeColors[product.badge] ||
                  "bg-blue-700 text-white"
                }`}
            >
              {product.badge}
            </span>
          )}

          {/* View details icon */}
          <span
            aria-hidden="true"
            className="absolute bottom-4 right-4 flex h-10 w-10 items-center
              justify-center rounded-full border border-white/80 bg-white/90
              text-blue-800 shadow-sm transition duration-300
              group-hover:bg-cyan-500 group-hover:text-white"
          >
            <ArrowUpRight size={19} />
          </span>
        </div>
      </Link>

      {/* Product information */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="mb-1 text-xs font-bold uppercase tracking-[0.16em] text-cyan-700">
              Amrit Jal
            </p>

            <h3 className="text-lg font-extrabold leading-snug text-blue-950">
              <Link
                to={`/product/${product.id}`}
                className="rounded-sm outline-none transition hover:text-cyan-700
                  focus-visible:ring-2 focus-visible:ring-cyan-500"
              >
                {productName}
              </Link>
            </h3>

            {product.ml && (
              <p className="mt-1 text-sm text-slate-500">{product.ml}</p>
            )}
          </div>

          <div
            aria-hidden="true"
            className="flex h-10 w-10 shrink-0 items-center justify-center
              rounded-xl bg-cyan-50 text-cyan-700"
          >
            <Droplets size={21} />
          </div>
        </div>

        {/* Description */}
        <p className="mt-4 line-clamp-2 min-h-10 text-sm leading-6 text-slate-600">
          {product.description || "Explore this product from Amrit Jal."}
        </p>

        {/* Price */}
        {product.price !== undefined &&
          product.price !== null &&
          product.price !== "" && (
            <div className="mt-5 border-t border-blue-50 pt-4">
              <p className="text-xs font-medium text-slate-500">
                Price
              </p>
              <p className="mt-1 text-2xl font-black tracking-tight text-blue-950">
                ₹{product.price}
              </p>
            </div>
          )}

        {/* Product details CTA */}
        <Link
          to={`/product/${product.id}`}
          className="mt-5 inline-flex w-full items-center justify-center gap-2
            rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3.5
            text-sm font-bold text-white shadow-md shadow-blue-600/15
            transition duration-200 hover:from-cyan-600 hover:to-blue-700
            focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-cyan-500 focus-visible:ring-offset-2"
        >
          <ShoppingBag size={17} />
          View Product
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>
    </motion.article>
  );
}
