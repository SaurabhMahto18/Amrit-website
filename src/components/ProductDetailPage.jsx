
import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Droplets,
  Minus,
  Package,
  Plus,
  ShoppingCart,
  Truck,
  ShieldCheck,
  CircleCheck,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { PRODUCTS_DATA } from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductDetailPage() {
  const { id } = useParams();
  const { addToCart, increaseQuantity } = useCart();
  const reduceMotion = useReducedMotion();

  const [quantity, setQuantity] = useState(1);
  const [addedMessage, setAddedMessage] = useState("");
  const [imageError, setImageError] = useState(false);

  const product = PRODUCTS_DATA.find(
    (item) => String(item.id) === String(id)
  );

  const relatedProducts = useMemo(() => {
    if (!product) return [];

    return PRODUCTS_DATA.filter(
      (item) => String(item.id) !== String(product.id)
    ).slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <main className="min-h-[70vh] bg-slate-50 px-4 py-20">
        <div className="mx-auto max-w-xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <Package className="mx-auto mb-4 h-12 w-12 text-sky-600" />

          <h1 className="text-2xl font-bold text-slate-900">
            Product Not Found
          </h1>

          <p className="mt-3 text-slate-600">
            The product you are looking for may have been removed or is
            unavailable.
          </p>

          <Link
            to="/products"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-3 font-semibold text-white transition hover:bg-sky-700"
          >
            <ArrowLeft size={18} />
            Browse Products
          </Link>
        </div>
      </main>
    );
  }

  const productName =
    product.name ||
    `${product.size || "Water Product"}${product.ml ? ` - ${product.ml}` : ""}`;

  const productPrice = Number(product.price);
  const originalPrice = Number(product.originalPrice);

  const hasValidPrice =
    Number.isFinite(productPrice) && productPrice >= 0;

  const hasDiscount =
    hasValidPrice &&
    Number.isFinite(originalPrice) &&
    originalPrice > productPrice;

  const discountPercent = hasDiscount
    ? Math.round(((originalPrice - productPrice) / originalPrice) * 100)
    : 0;

  const savingsPerUnit = hasDiscount
    ? originalPrice - productPrice
    : 0;

  const subtotal = hasValidPrice ? productPrice * quantity : 0;
  const totalSavings = savingsPerUnit * quantity;

  const productImage = product.img || product.image;
  const description =
    product.description ||
    `${productName} is part of the Amrit Jal product range. Review the pack size and product details before ordering. Choose the quantity you need and add the product to your cart.`;

  const isAvailable =
    String(product.availability || "In Stock").toLowerCase() === "in stock";

  const handleAddToCart = () => {
    if (!hasValidPrice) {
      setAddedMessage("Product price is not configured correctly.");
      return;
    }

    if (!isAvailable) {
      setAddedMessage("This product is currently unavailable.");
      return;
    }

    const cartProduct = {
      ...product,
      id: product.id,
      name: productName,
      price: productPrice,
      image: productImage,
    };

    const success = addToCart(cartProduct);

    if (success === false) {
      setAddedMessage("Unable to add this product. Please try again.");
      return;
    }

    // CartContext adds one item first; increase it to the selected quantity.
    for (let i = 1; i < quantity; i += 1) {
      increaseQuantity(product.id);
    }

    setAddedMessage(
      `${quantity} ${quantity === 1 ? "item" : "items"} added to your cart.`
    );
  };

  const changeQuantity = (amount) => {
    setQuantity((current) => Math.max(1, Math.min(99, current + amount)));
    setAddedMessage("");
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 pb-4 pt-6 sm:px-6 lg:px-8">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-sky-700"
        >
          <ArrowLeft size={17} />
          Back to Products
        </Link>

        <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <Link to="/" className="hover:text-sky-700">
            Home
          </Link>
          <span>/</span>
          <Link to="/products" className="hover:text-sky-700">
            Products
          </Link>
          <span>/</span>
          <span className="font-medium text-slate-800">{productName}</span>
        </div>
      </div>

      {/* Main Product Section */}
      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Product Image */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="relative overflow-hidden rounded-3xl border border-sky-100 bg-white p-5 shadow-sm sm:p-8"
          >
            {hasDiscount && (
              <span className="absolute left-5 top-5 z-10 rounded-full bg-rose-600 px-4 py-2 text-sm font-bold text-white shadow-sm">
                {discountPercent}% OFF
              </span>
            )}

            {product.badge && (
              <span className="absolute right-5 top-5 z-10 rounded-full bg-sky-50 px-3 py-2 text-xs font-bold text-sky-800">
                {product.badge}
              </span>
            )}

            <div className="flex min-h-[320px] items-center justify-center sm:min-h-[440px]">
              {productImage && !imageError ? (
                <img
                  src={productImage}
                  alt={`${productName} product`}
                  onError={() => setImageError(true)}
                  className="max-h-[420px] w-full object-contain transition duration-500 hover:scale-[1.03]"
                />
              ) : (
                <div className="flex flex-col items-center gap-4 text-sky-700">
                  <Droplets size={76} strokeWidth={1.3} />
                  <span className="text-lg font-bold">Amrit Jal</span>
                </div>
              )}
            </div>

            <div className="mt-5 flex items-center justify-center gap-2 text-sm text-slate-500">
              <Droplets size={17} className="text-sky-600" />
              <span>Product details and pack size</span>
            </div>
          </motion.div>

          {/* Product Details and Purchase Card */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="space-y-6"
          >
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-700">
                Amrit Jal Collection
              </p>

              <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
                {productName}
              </h1>

              {product.category && (
                <span className="mt-4 inline-flex rounded-full bg-sky-50 px-3 py-1.5 text-sm font-medium text-sky-800">
                  {product.category}
                </span>
              )}

              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                {description}
              </p>
            </div>

            {/* Purchase Card */}
            <div className="rounded-3xl border border-sky-100 bg-white p-5 shadow-sm sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-sm font-semibold text-slate-500">
                  Price per unit
                </span>

                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold ${
                    isAvailable
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-rose-50 text-rose-700"
                  }`}
                >
                  <CircleCheck size={14} />
                  {product.availability || "In Stock"}
                </span>
              </div>

              <div className="mt-3 flex flex-wrap items-baseline gap-3">
                <span className="text-4xl font-extrabold tracking-tight text-slate-900">
                  {hasValidPrice
                    ? `₹${productPrice.toLocaleString("en-IN")}`
                    : "Price unavailable"}
                </span>

                {hasDiscount && (
                  <>
                    <span className="text-lg text-slate-400 line-through">
                      ₹{originalPrice.toLocaleString("en-IN")}
                    </span>

                    <span className="rounded-lg bg-rose-50 px-2.5 py-1 text-sm font-bold text-rose-700">
                      Save {discountPercent}%
                    </span>
                  </>
                )}
              </div>

              {hasDiscount && (
                <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-emerald-700">
                  <CheckCircle2 size={17} />
                  You save ₹
                  {savingsPerUnit.toLocaleString("en-IN")} on each unit.
                </p>
              )}

              <div className="my-6 border-t border-slate-100" />

              {/* Quantity Selector */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 className="font-bold text-slate-900">
                    Select Quantity
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Choose how many you need
                  </p>
                </div>

                <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 p-2">
                  <button
                    type="button"
                    onClick={() => changeQuantity(-1)}
                    disabled={quantity <= 1}
                    aria-label="Decrease quantity"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition hover:border-sky-500 hover:text-sky-700 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <Minus size={17} />
                  </button>

                  <span
                    aria-live="polite"
                    className="min-w-7 text-center text-lg font-bold text-slate-900"
                  >
                    {quantity}
                  </span>

                  <button
                    type="button"
                    onClick={() => changeQuantity(1)}
                    disabled={quantity >= 99}
                    aria-label="Increase quantity"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition hover:border-sky-500 hover:text-sky-700 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <Plus size={17} />
                  </button>
                </div>
              </div>

              {/* Subtotal */}
              <div className="mt-5 rounded-2xl bg-sky-50 p-4">
                <div className="flex items-center justify-between gap-3 text-sm text-slate-600">
                  <span>
                    Subtotal ({quantity} {quantity === 1 ? "unit" : "units"})
                  </span>
                  <span className="font-semibold text-slate-900">
                    ₹{subtotal.toLocaleString("en-IN")}
                  </span>
                </div>

                {hasDiscount && (
                  <div className="mt-2 flex items-center justify-between gap-3 text-sm">
                    <span className="text-emerald-700">Total savings</span>
                    <span className="font-bold text-emerald-700">
                      −₹{totalSavings.toLocaleString("en-IN")}
                    </span>
                  </div>
                )}

                <div className="mt-3 flex items-center justify-between gap-3 border-t border-sky-100 pt-3">
                  <span className="font-bold text-slate-900">
                    Product Total
                  </span>
                  <span className="text-xl font-extrabold text-sky-800">
                    ₹{subtotal.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>

              {/* Add to Cart */}
              <button
                type="button"
                onClick={handleAddToCart}
                disabled={!hasValidPrice || !isAvailable}
                className="mt-5 flex w-full items-center justify-center gap-3 rounded-xl bg-sky-700 px-5 py-4 font-bold text-white shadow-sm transition hover:bg-sky-800 active:scale-[0.99] disabled:cursor-not-allowed disabled:bg-slate-400"
              >
                <ShoppingCart size={20} />
                Add {quantity} {quantity === 1 ? "Item" : "Items"} to Cart
              </button>

              {addedMessage && (
                <div
                  role="status"
                  className={`mt-4 flex items-start gap-2 rounded-xl p-3 text-sm font-medium ${
                    addedMessage.includes("added")
                      ? "bg-emerald-50 text-emerald-800"
                      : "bg-rose-50 text-rose-700"
                  }`}
                >
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
                  <span>{addedMessage}</span>
                </div>
              )}

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="flex items-start gap-2 rounded-xl bg-slate-50 p-3">
                  <Package
                    size={19}
                    className="mt-0.5 shrink-0 text-sky-700"
                  />
                  <div>
                    <p className="text-sm font-bold text-slate-800">
                      Pack Details
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {product.ml || product.size || "See product size"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2 rounded-xl bg-slate-50 p-3">
                  <Truck
                    size={19}
                    className="mt-0.5 shrink-0 text-sky-700"
                  />
                  <div>
                    <p className="text-sm font-bold text-slate-800">
                      Delivery
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Confirm availability for your location
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Product Information */}
      <section className="border-y border-slate-200 bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-700">
              Know Your Product
            </p>

            <h2 className="mt-3 text-2xl font-extrabold text-slate-900 sm:text-3xl">
              Product Description & Details
            </h2>

            <p className="mt-5 whitespace-pre-line text-base leading-8 text-slate-600">
              {description}
            </p>
          </div>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-5">
              <Droplets className="h-7 w-7 text-sky-700" />

              <h3 className="mt-4 font-bold text-slate-900">
                Product Overview
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                {productName} is available in the Amrit Jal product range.
                Check the listed size, quantity and price to select the
                option that suits your requirements.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <Package className="h-7 w-7 text-sky-700" />

              <h3 className="mt-4 font-bold text-slate-900">
                Pack Information
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                Pack size: {product.ml || product.size || "Not specified"}.
                {product.category
                  ? ` Product category: ${product.category}.`
                  : ""}
                {" "}Please review the product listing before placing your order.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <ShieldCheck className="h-7 w-7 text-sky-700" />

              <h3 className="mt-4 font-bold text-slate-900">
                Before You Order
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                Verify the selected size, quantity and displayed price.
                Delivery availability and any applicable delivery charges
                should be confirmed for your location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-700">
                Explore More
              </p>

              <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
                You May Also Like
              </h2>

              <p className="mt-2 text-slate-600">
                Explore other sizes and pack options from Amrit Jal.
              </p>
            </div>

            <Link
              to="/products"
              className="inline-flex items-center gap-2 font-bold text-sky-700 transition hover:text-sky-900"
            >
              View All
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((item) => {
              const itemName =
                item.name ||
                `${item.size || "Water Product"}${
                  item.ml ? ` - ${item.ml}` : ""
                }`;

              const itemHasDiscount =
                Number.isFinite(Number(item.originalPrice)) &&
                Number(item.originalPrice) > Number(item.price);

              const itemDiscount = itemHasDiscount
                ? Math.round(
                    ((Number(item.originalPrice) - Number(item.price)) /
                      Number(item.originalPrice)) *
                      100
                  )
                : 0;

              return (
                <Link
                  key={item.id}
                  to={`/product/${item.id}`}
                  onClick={() => {
                    setQuantity(1);
                    setAddedMessage("");
                    setImageError(false);
                  }}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg"
                >
                  <div className="relative flex h-48 items-center justify-center bg-sky-50/70 p-5">
                    {itemHasDiscount && (
                      <span className="absolute left-3 top-3 rounded-full bg-rose-600 px-2.5 py-1 text-xs font-bold text-white">
                        {itemDiscount}% OFF
                      </span>
                    )}

                    {item.img || item.image ? (
                      <img
                        src={item.img || item.image}
                        alt={itemName}
                        loading="lazy"
                        className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <Droplets
                        size={48}
                        className="text-sky-600"
                        strokeWidth={1.4}
                      />
                    )}
                  </div>

                  <div className="p-4">
                    <h3 className="font-bold text-slate-900 transition group-hover:text-sky-700">
                      {itemName}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {item.ml || item.size}
                    </p>

                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <span className="text-lg font-extrabold text-slate-900">
                        ₹{Number(item.price).toLocaleString("en-IN")}
                      </span>

                      {itemHasDiscount && (
                        <span className="text-sm text-slate-400 line-through">
                          ₹{Number(item.originalPrice).toLocaleString("en-IN")}
                        </span>
                      )}
                    </div>

                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-sky-700">
                      View Details
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}
    </main>
  );
}
