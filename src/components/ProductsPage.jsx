
import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Search,
  SlidersHorizontal,
  PackageSearch,
  ArrowUpDown,
  Droplets,
  X,
} from "lucide-react";

import ProductCard from "../components/ProductCard";
import { PRODUCTS_DATA } from "../data/products";

const PAGE_TITLE = "Water Bottles & 20L Water Jars | Amrit Jal";

const PAGE_DESCRIPTION =
  "Explore Amrit Jal water bottles, multipacks and 20L water jars. Compare available sizes, view product prices and find water delivery options for your needs.";

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  const reducedMotion = useReducedMotion();

  // Categories are derived from the actual product catalogue.
  const categories = useMemo(() => {
    const values = PRODUCTS_DATA.map(
      (product) => product.category || product.type
    ).filter(Boolean);

    return ["All", ...new Set(values)];
  }, []);

  // Search, filter and sort products.
  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    const result = PRODUCTS_DATA.filter((product) => {
      const searchableText = [
        product.name,
        product.size,
        product.ml,
        product.description,
        product.shortDescription,
        product.category,
        product.type,
        product.badge,
        ...(product.features || []),
        ...(product.suitableFor || []),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesSearch = searchableText.includes(query);
      const productCategory = product.category || product.type;
      const matchesCategory =
        category === "All" || productCategory === category;

      return matchesSearch && matchesCategory;
    });

    if (sortBy === "price-low") {
      result.sort(
        (a, b) => Number(a.price || 0) - Number(b.price || 0)
      );
    } else if (sortBy === "price-high") {
      result.sort(
        (a, b) => Number(b.price || 0) - Number(a.price || 0)
      );
    } else if (sortBy === "name") {
      result.sort((a, b) =>
        String(a.name || a.size || "").localeCompare(
          String(b.name || b.size || "")
        )
      );
    } else if (sortBy === "discount") {
      const getDiscount = (product) => {
        const price = Number(product.price);
        const original = Number(product.originalPrice);

        if (
          product.originalPrice == null ||
          !Number.isFinite(original) ||
          !Number.isFinite(price) ||
          original <= price ||
          original <= 0
        ) {
          return 0;
        }

        return ((original - price) / original) * 100;
      };

      result.sort((a, b) => getDiscount(b) - getDiscount(a));
    }

    return result;
  }, [search, category, sortBy]);

  const clearFilters = () => {
    setSearch("");
    setCategory("All");
    setSortBy("default");
  };

  const hasActiveFilters =
    Boolean(search) || category !== "All" || sortBy !== "default";

  return (
    <>
      {/* SEO metadata: React 19 hoists these tags into the document head. */}
      <title>{PAGE_TITLE}</title>
      <meta name="description" content={PAGE_DESCRIPTION} />
      <meta
        name="robots"
        content="noindex, follow, max-image-preview:large"
      />
      <meta name="author" content="Amrit Jal" />
      <meta name="theme-color" content="#ffffff" />

      {/* Social sharing metadata */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Amrit Jal" />
      <meta property="og:title" content={PAGE_TITLE} />
      <meta property="og:description" content={PAGE_DESCRIPTION} />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={PAGE_TITLE} />
      <meta name="twitter:description" content={PAGE_DESCRIPTION} />

      <section
        aria-labelledby="products-heading"
        className="min-h-screen bg-gradient-to-b from-white via-sky-50/60 to-blue-50/80 py-10 sm:py-16"
      >
        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
          {/* Page Heading */}
          <motion.header
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.5 }}
            className="mb-8 text-center sm:mb-12"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white px-4 py-2 text-xs font-semibold text-blue-800 shadow-sm sm:text-sm">
              <Droplets
                size={17}
                aria-hidden="true"
                className="text-cyan-600"
              />
              The Amrit Jal Collection
            </span>

            <h1
              id="products-heading"
              className="mt-4 text-3xl font-black tracking-tight text-blue-950 sm:mt-5 sm:text-5xl"
            >
              Water Bottles &amp; 20L Water Jars
              <span className="text-cyan-500">.</span>
            </h1>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:mt-4 sm:text-lg sm:leading-7">
              Explore available water bottles, multipacks and 20L water
              jars from Amrit Jal. Compare sizes and prices to find the
              right option for your requirements.
            </p>
          </motion.header>

          {/* Search and Filters */}
          <div className="mb-7 rounded-2xl border border-blue-100 bg-white p-3 shadow-lg shadow-blue-950/[0.04] sm:rounded-3xl sm:p-6">
            <div className="grid gap-3 md:grid-cols-[1fr_auto] md:gap-4">
              {/* Search */}
              <div className="relative">
                <Search
                  size={19}
                  aria-hidden="true"
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 sm:left-4"
                />

                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search products, size or pack..."
                  aria-label="Search products by name, size or pack"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-10 text-sm text-blue-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100 sm:rounded-2xl sm:py-3.5 sm:pl-12"
                />

                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    aria-label="Clear search"
                    className="absolute right-2.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100"
                  >
                    <X size={17} aria-hidden="true" />
                  </button>
                )}
              </div>

              {/* Sort */}
              <label className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 sm:gap-3 sm:rounded-2xl sm:px-4">
                <ArrowUpDown
                  size={18}
                  aria-hidden="true"
                  className="shrink-0 text-cyan-700"
                />

                <span className="sr-only">Sort products</span>

                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                  className="w-full min-w-0 cursor-pointer bg-transparent py-3 text-sm font-medium text-blue-950 outline-none sm:py-3.5"
                >
                  <option value="default">Default order</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name: A to Z</option>
                  <option value="discount">Highest Discount</option>
                </select>
              </label>
            </div>

            {/* Category Buttons */}
            {categories.length > 1 && (
              <div className="mt-4 sm:mt-5">
                <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <SlidersHorizontal size={15} aria-hidden="true" />
                  Filter by category
                </div>

                <div className="flex gap-2 overflow-x-auto pb-1">
                  {categories.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setCategory(item)}
                      aria-pressed={category === item}
                      className={`shrink-0 rounded-full border px-3.5 py-2 text-xs font-semibold transition sm:px-4 sm:text-sm ${
                        category === item
                          ? "border-blue-700 bg-blue-700 text-white shadow-md shadow-blue-700/15"
                          : "border-blue-100 bg-white text-slate-600 hover:border-cyan-400 hover:text-blue-800"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Results Count */}
          <div
            className="mb-4 flex flex-wrap items-center justify-between gap-3 sm:mb-6"
            aria-live="polite"
          >
            <p className="text-xs text-slate-600 sm:text-sm">
              Showing{" "}
              <span className="font-bold text-blue-950">
                {filteredProducts.length}
              </span>{" "}
              of{" "}
              <span className="font-bold text-blue-950">
                {PRODUCTS_DATA.length}
              </span>{" "}
              products
            </p>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 transition hover:text-cyan-700 sm:text-sm"
              >
                <X size={15} aria-hidden="true" />
                Clear filters
              </button>
            )}
          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <motion.div
              layout={!reducedMotion}
              className="grid grid-cols-2 items-stretch gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4"
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  layout={!reducedMotion}
                  initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: reducedMotion ? 0 : 0.3,
                    delay: reducedMotion ? 0 : Math.min(index * 0.04, 0.2),
                  }}
                  className="min-w-0"
                >
                  <ProductCard product={product} index={index} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="rounded-2xl border border-dashed border-blue-200 bg-white px-5 py-14 text-center sm:rounded-3xl sm:py-20">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700 sm:h-16 sm:w-16">
                <PackageSearch size={30} aria-hidden="true" />
              </div>

              <h2 className="mt-5 text-xl font-bold text-blue-950">
                No products found
              </h2>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                Try another search term or clear your filters to see all
                available products.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="mt-6 rounded-xl bg-blue-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2"
              >
                View All Products
              </button>
            </div>
          )}

          {/* Footer Note */}
          <div className="mt-8 flex items-start gap-3 rounded-2xl border border-cyan-100 bg-white/90 p-4 sm:mt-12 sm:p-5">
            <Droplets
              size={21}
              aria-hidden="true"
              className="mt-0.5 shrink-0 text-cyan-600"
            />

            <p className="text-xs leading-6 text-slate-600 sm:text-sm">
              Product availability, packaging and delivery options may
              vary by service area. Contact Amrit Jal if you need help
              choosing a product.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
