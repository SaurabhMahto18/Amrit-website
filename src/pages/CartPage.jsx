
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Tag,
  ChevronDown,
  ChevronUp,
  Trash2,
  Plus,
  Minus,
  ArrowLeft,
  MessageCircle,
  ShieldCheck,
  TicketPercent,
} from "lucide-react";
import { useCart } from "../context/CartContext";

const WHATSAPP_NUMBER = "917366973933";
const FREE_DELIVERY_THRESHOLD = 299;
const STANDARD_DELIVERY_CHARGE = 40;

// Offers are configured here. First-order eligibility needs order-history
// verification before FIRSTORDER can be restricted to new customers.
const AVAILABLE_COUPONS = [
  {
    code: "FIRSTORDER",
    type: "percentage",
    value: 20,
    minOrder: 0,
    description: "20% off your order",
  },
  {
    code: "EVENT25",
    type: "percentage",
    value: 25,
    minOrder: 1599,
    description: "25% off orders of ₹1,599 or more",
  },
  {
    code: "PREMIUM100",
    type: "fixed",
    value: 100,
    minOrder: 500,
    description: "₹100 off orders of ₹500 or more",
  },
  {
    code: "FLAT10",
    type: "percentage",
    value: 10,
    minOrder: 500,
    description: "10% off orders of ₹500 or more",
  },
  {
    code: "FREEDEL",
    type: "free_delivery",
    value: 0,
    minOrder: 299,
    description: "Free delivery on orders of ₹299 or more",
  },
  {
    code: "AMRIT50",
    type: "fixed",
    value: 50,
    minOrder: 300,
    description: "₹50 off orders of ₹300 or more",
  },
];

const formatPrice = (amount) =>
  `₹${Number(amount || 0).toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

export default function CartPage() {
  const {
    cartItems = [],
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useCart();

  const [isCouponFormVisible, setIsCouponFormVisible] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponError, setCouponError] = useState("");
  const [checkoutError, setCheckoutError] = useState("");

  const subTotal = useMemo(
    () =>
      cartItems.reduce(
        (total, item) =>
          total + Number(item.price || 0) * Number(item.quantity || 0),
        0
      ),
    [cartItems]
  );

  const deliveryCharge =
    subTotal > 0 && subTotal < FREE_DELIVERY_THRESHOLD
      ? STANDARD_DELIVERY_CHARGE
      : 0;

  // Keep coupon calculations in one place so the UI and WhatsApp
  // order summary use the same values.
  const pricing = useMemo(() => {
    let discount = 0;
    let finalDeliveryCharge = deliveryCharge;

    if (appliedCoupon && subTotal >= appliedCoupon.minOrder) {
      if (appliedCoupon.type === "percentage") {
        discount = (subTotal * appliedCoupon.value) / 100;
      } else if (appliedCoupon.type === "fixed") {
        discount = appliedCoupon.value;
      } else if (appliedCoupon.type === "free_delivery") {
        finalDeliveryCharge = 0;
      }
    }

    discount = Math.min(Math.max(discount, 0), subTotal);

    const finalSubTotal = subTotal - discount;
    const totalPrice = finalSubTotal + finalDeliveryCharge;
    const totalSavings =
      discount + (deliveryCharge - finalDeliveryCharge);

    return {
      discount,
      finalSubTotal,
      finalDeliveryCharge,
      totalPrice,
      totalSavings,
    };
  }, [subTotal, deliveryCharge, appliedCoupon]);

  const handleApplyCoupon = () => {
    setCouponError("");

    const normalizedCode = couponCode.trim().toUpperCase();

    if (!normalizedCode) {
      setCouponError("Please enter a coupon code.");
      return;
    }

    const coupon = AVAILABLE_COUPONS.find(
      (item) => item.code === normalizedCode
    );

    if (!coupon) {
      setAppliedCoupon(null);
      setCouponError("Invalid coupon code. Please check and try again.");
      return;
    }

    if (subTotal < coupon.minOrder) {
      setAppliedCoupon(null);
      setCouponError(
        `This coupon requires a minimum order of ${formatPrice(
          coupon.minOrder
        )}.`
      );
      return;
    }

    setAppliedCoupon(coupon);
    setCouponCode(coupon.code);
    setIsCouponFormVisible(true);
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode("");
    setCouponError("");
  };

  const generateWhatsAppMessage = () => {
    const lines = [
      "Hello Amrit Jal! I would like to place an order.",
      "",
      "ORDER DETAILS",
      "------------------------------",
    ];

    cartItems.forEach((item, index) => {
      const itemName =
        item.name || item.size || item.title || "Water product";
      const quantity = Number(item.quantity || 0);
      const price = Number(item.price || 0);

      lines.push(
        `${index + 1}. ${itemName}`,
        `   Quantity: ${quantity}`,
        `   Unit price: ${formatPrice(price)}`,
        `   Item total: ${formatPrice(price * quantity)}`
      );

      if (item.description) {
        lines.push(`   Details: ${item.description}`);
      }

      lines.push("");
    });

    lines.push(
      "------------------------------",
      `Subtotal: ${formatPrice(subTotal)}`
    );

    if (appliedCoupon) {
      lines.push(
        `Coupon: ${appliedCoupon.code}`,
        `Discount: -${formatPrice(pricing.discount)}`
      );
    }

    lines.push(
      `Delivery charge: ${
        pricing.finalDeliveryCharge === 0
          ? "FREE"
          : formatPrice(pricing.finalDeliveryCharge)
      }`
    );

    if (pricing.totalSavings > 0) {
      lines.push(`Total savings: ${formatPrice(pricing.totalSavings)}`);
    }

    lines.push(
      "------------------------------",
      `TOTAL PAYABLE: ${formatPrice(pricing.totalPrice)}`,
      "",
      "Please confirm product availability, delivery address and final order details.",
      "Thank you!"
    );

    return lines.join("\n");
  };

  const handleCheckout = () => {
    setCheckoutError("");

    if (cartItems.length === 0) {
      setCheckoutError("Your cart is empty. Add a product first.");
      return;
    }

    const hasInvalidItem = cartItems.some(
      (item) =>
        !Number.isFinite(Number(item.price)) ||
        Number(item.price) < 0 ||
        !Number.isInteger(Number(item.quantity)) ||
        Number(item.quantity) < 1
    );

    if (hasInvalidItem) {
      setCheckoutError(
        "One or more cart items have invalid details. Please refresh and try again."
      );
      return;
    }

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      generateWhatsAppMessage()
    )}`;

    // Open directly from the click event to reduce popup-blocking issues.
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-sky-50/70 px-4 py-10 sm:px-6 lg:py-16">
      <div className="mx-auto max-w-6xl">
        <Link
          to="/products"
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-cyan-700"
        >
          <ArrowLeft size={17} />
          Continue shopping
        </Link>

        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
              Amrit Jal
            </p>
            <h1 className="text-3xl font-extrabold tracking-tight text-blue-950 sm:text-4xl">
              Your Shopping Cart
            </h1>
            <p className="mt-2 text-sm text-slate-600">
              Review your items before placing your order.
            </p>
          </div>

          {cartItems.length > 0 && (
            <span className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-blue-800 shadow-sm">
              {cartItems.reduce(
                (total, item) => total + Number(item.quantity || 0),
                0
              )}{" "}
              items
            </span>
          )}
        </div>

        {cartItems.length === 0 ? (
          <section className="flex flex-col items-center rounded-3xl border border-slate-200 bg-white px-5 py-16 text-center shadow-sm sm:py-20">
            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-sky-50 text-blue-600">
              <ShoppingCart size={38} />
            </div>

            <h2 className="text-2xl font-bold text-blue-950">
              Your cart is empty
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
              Explore our products and add the items you need to your cart.
            </p>

            <Link
              to="/products"
              className="mt-7 inline-flex items-center justify-center rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Browse Products
            </Link>
          </section>
        ) : (
          <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_350px]">
            {/* Cart items */}
            <section className="space-y-4" aria-label="Cart items">
              {cartItems.map((item) => {
                const name =
                  item.name || item.size || item.title || "Water product";
                const image = item.image || item.img;

                return (
                  <article
                    key={item.id}
                    className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md sm:p-5"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                      <div className="flex min-w-0 flex-1 items-center gap-4">
                        <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-100 bg-sky-50">
                          {image ? (
                            <img
                              src={image}
                              alt={name}
                              loading="lazy"
                              className="h-full w-full object-contain p-2"
                              onError={(event) => {
                                event.currentTarget.style.display = "none";
                              }}
                            />
                          ) : (
                            <ShoppingCart
                              size={30}
                              className="text-blue-300"
                              aria-hidden="true"
                            />
                          )}
                        </div>

                        <div className="min-w-0">
                          <h2 className="break-words text-lg font-bold text-blue-950">
                            {name}
                          </h2>

                          {item.description && (
                            <p className="mt-1 line-clamp-2 text-sm text-slate-500">
                              {item.description}
                            </p>
                          )}

                          <p className="mt-2 font-semibold text-blue-700">
                            {formatPrice(item.price)}
                            <span className="ml-1 text-xs font-normal text-slate-500">
                              / item
                            </span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-4 sm:flex-col sm:items-end sm:border-0 sm:pt-0">
                        <div
                          className="inline-flex items-center rounded-xl border border-slate-200 bg-white"
                          aria-label={`Quantity for ${name}`}
                        >
                          <button
                            type="button"
                            onClick={() => decreaseQuantity(item.id)}
                            disabled={Number(item.quantity) <= 1}
                            aria-label={`Decrease ${name} quantity`}
                            className="rounded-l-xl p-2.5 text-slate-600 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
                          >
                            <Minus size={16} />
                          </button>

                          <span
                            className="min-w-10 text-center text-sm font-bold text-slate-800"
                            aria-live="polite"
                          >
                            {item.quantity}
                          </span>

                          <button
                            type="button"
                            onClick={() => increaseQuantity(item.id)}
                            aria-label={`Increase ${name} quantity`}
                            className="rounded-r-xl p-2.5 text-slate-600 transition hover:bg-slate-100"
                          >
                            <Plus size={16} />
                          </button>
                        </div>

                        <div className="text-right">
                          <p className="font-bold text-blue-950">
                            {formatPrice(
                              Number(item.price) * Number(item.quantity)
                            )}
                          </p>

                          <button
                            type="button"
                            onClick={() => removeFromCart(item.id)}
                            className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-red-600 transition hover:text-red-800"
                          >
                            <Trash2 size={14} />
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}

              <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-sky-100 bg-sky-50/70 p-4">
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <ShieldCheck size={19} className="shrink-0 text-blue-700" />
                  <span>Confirm availability and delivery details on WhatsApp.</span>
                </div>

                {typeof clearCart === "function" && (
                  <button
                    type="button"
                    onClick={() => {
                      if (
                        window.confirm(
                          "Remove all products from your cart?"
                        )
                      ) {
                        clearCart();
                        setAppliedCoupon(null);
                        setCouponCode("");
                        setCouponError("");
                      }
                    }}
                    className="text-sm font-semibold text-red-600 hover:text-red-800"
                  >
                    Clear cart
                  </button>
                )}
              </div>
            </section>

            {/* Order summary */}
            <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 lg:sticky lg:top-24">
              <button
                type="button"
                onClick={() => setIsCouponFormVisible((visible) => !visible)}
                aria-expanded={isCouponFormVisible}
                className="flex w-full items-center justify-between gap-3 border-b border-dashed border-slate-200 pb-4 text-left"
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-700">
                    <TicketPercent size={21} />
                  </span>

                  <span>
                    <span className="block font-bold text-slate-900">
                      {appliedCoupon
                        ? `${appliedCoupon.code} applied`
                        : "Apply a coupon"}
                    </span>
                    <span className="mt-1 block text-xs text-slate-500">
                      Check available offers
                    </span>
                  </span>
                </span>

                {isCouponFormVisible ? (
                  <ChevronUp size={20} className="text-slate-500" />
                ) : (
                  <ChevronDown size={20} className="text-slate-500" />
                )}
              </button>

              {isCouponFormVisible && (
                <div className="space-y-3 border-b border-slate-100 py-4">
                  {!appliedCoupon ? (
                    <>
                      <form
                        onSubmit={(event) => {
                          event.preventDefault();
                          handleApplyCoupon();
                        }}
                        className="flex gap-2"
                      >
                        <label htmlFor="coupon-code" className="sr-only">
                          Coupon code
                        </label>

                        <input
                          id="coupon-code"
                          type="text"
                          autoComplete="off"
                          placeholder="Enter coupon code"
                          value={couponCode}
                          onChange={(event) => {
                            setCouponCode(event.target.value.toUpperCase());
                            setCouponError("");
                          }}
                          className="min-w-0 flex-1 rounded-xl border border-slate-300 px-3 py-3 text-sm uppercase outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />

                        <button
                          type="submit"
                          disabled={!couponCode.trim()}
                          className="rounded-xl bg-purple-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-purple-800 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          Apply
                        </button>
                      </form>

                      {couponError && (
                        <p role="alert" className="text-sm text-red-600">
                          {couponError}
                        </p>
                      )}

                      <div className="space-y-3 pt-1">
                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                          Available configured offers
                        </p>

                        {AVAILABLE_COUPONS.map((coupon) => (
                          <button
                            type="button"
                            key={coupon.code}
                            onClick={() => {
                              setCouponCode(coupon.code);
                              setCouponError("");

                              if (subTotal < coupon.minOrder) {
                                setCouponError(
                                  `${coupon.code} requires a minimum order of ${formatPrice(
                                    coupon.minOrder
                                  )}.`
                                );
                                return;
                              }

                              setAppliedCoupon(coupon);
                            }}
                            className="w-full rounded-xl border border-dashed border-purple-200 bg-purple-50/60 p-3 text-left transition hover:border-purple-400 hover:bg-purple-50"
                          >
                            <span className="flex items-center justify-between gap-2">
                              <span className="font-bold text-purple-800">
                                {coupon.code}
                              </span>
                              <span className="text-xs font-semibold text-purple-700">
                                {subTotal >= coupon.minOrder
                                  ? "Apply offer"
                                  : `Min. ${formatPrice(coupon.minOrder)}`}
                              </span>
                            </span>
                            <span className="mt-1 block text-xs text-slate-600">
                              {coupon.description}
                            </span>
                          </button>
                        ))}
                      </div>
                    </>
                  ) : (
                    <div className="rounded-xl border border-green-200 bg-green-50 p-3">
                      <p className="font-semibold text-green-800">
                        {appliedCoupon.code} applied successfully
                      </p>
                      <p className="mt-1 text-sm text-green-700">
                        You save {formatPrice(pricing.totalSavings)}.
                      </p>
                      <button
                        type="button"
                        onClick={handleRemoveCoupon}
                        className="mt-2 text-sm font-semibold text-red-600 hover:text-red-800"
                      >
                        Remove coupon
                      </button>
                    </div>
                  )}
                </div>
              )}

              <h2 className="mb-5 mt-5 text-xl font-extrabold text-blue-950">
                Order Summary
              </h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between gap-3 text-slate-600">
                  <span>Subtotal</span>
                  <span className="font-medium text-slate-900">
                    {formatPrice(subTotal)}
                  </span>
                </div>

                {pricing.discount > 0 && (
                  <div className="flex justify-between gap-3 text-green-700">
                    <span>Discount ({appliedCoupon?.code})</span>
                    <span className="font-semibold">
                      −{formatPrice(pricing.discount)}
                    </span>
                  </div>
                )}

                <div className="flex justify-between gap-3 text-slate-600">
                  <span>Delivery charge</span>
                  <span
                    className={
                      pricing.finalDeliveryCharge === 0
                        ? "font-semibold text-green-700"
                        : "font-medium text-slate-900"
                    }
                  >
                    {pricing.finalDeliveryCharge === 0
                      ? "FREE"
                      : formatPrice(pricing.finalDeliveryCharge)}
                  </span>
                </div>

                {pricing.totalSavings > 0 && (
                  <div className="flex justify-between gap-3 rounded-lg bg-green-50 px-3 py-2 text-green-800">
                    <span>Total savings</span>
                    <span className="font-bold">
                      {formatPrice(pricing.totalSavings)}
                    </span>
                  </div>
                )}

                <div className="flex justify-between gap-3 border-t border-dashed border-slate-200 pt-4 text-lg font-extrabold text-blue-950">
                  <span>Total</span>
                  <span className="text-blue-700">
                    {formatPrice(pricing.totalPrice)}
                  </span>
                </div>
              </div>

              {subTotal > 0 && subTotal < FREE_DELIVERY_THRESHOLD && (
                <p className="mt-4 rounded-xl bg-amber-50 p-3 text-xs leading-5 text-amber-800">
                  Add {formatPrice(FREE_DELIVERY_THRESHOLD - subTotal)} more
                  to qualify for standard free delivery.
                </p>
              )}

              {checkoutError && (
                <p role="alert" className="mt-4 text-sm text-red-600">
                  {checkoutError}
                </p>
              )}

              <button
                type="button"
                onClick={handleCheckout}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3.5 font-bold text-white shadow-sm transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                <MessageCircle size={20} />
                Order on WhatsApp
              </button>

              <p className="mt-3 text-center text-xs leading-5 text-slate-500">
                Your order request will open in WhatsApp. The order is not
                confirmed until availability and delivery details are agreed.
              </p>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}
