
import small250 from "../assets/250ml_bottlePack.png";
import small250X24 from "../assets/250ml_bottlePack24.png";
import family1000 from "../assets/1000ml_bottlePack.png";
import family1000X12 from "../assets/1000ml_bottlePack12.png";
import onGo500 from "../assets/500ml_bottlePack.png";
import onGo500X12 from "../assets/500ml_bottlePack12.png";
import jar20l from "../assets/jar_20l.png";

/**
 * Amrit Jal Product Catalogue
 *
 * price        = Current selling price
 * originalPrice = Original/MRP price, if verified; otherwise null
 * discount is calculated automatically on the Product Detail Page.
 *
 * Keep product IDs stable because the cart and product routes use them.
 */

export const PRODUCTS_DATA = [
  {
    id: 1,
    name: "Amrit Jal Pocket Pack",
    size: "Pocket Pack",
    ml: "250 ml",
    price: 10,
    originalPrice: null,
    img: small250,
    category: "Single Bottles",
    description:
      "Amrit Jal Pocket Pack is a compact 250 ml water bottle designed for individual servings. Its small size makes it convenient to carry for short outings, travel, meetings, school activities and small gatherings. Choose this pack when you need a smaller serving rather than a full-size bottle. Check the product availability and quantity before placing your order.",
    shortDescription:
      "A compact 250 ml bottle for individual servings, outings and small gatherings.",
    badge: "Best Seller",
    availability: "In Stock",
    features: [
      "250 ml bottle size",
      "Compact and portable format",
      "Suitable for individual servings",
      "Convenient for travel and gatherings",
    ],
    suitableFor: [
      "Individual servings",
      "Short outings",
      "Meetings and gatherings",
    ],
  },

  {
    id: 10,
    name: "Amrit Jal Pocket Pack Case",
    size: "Case",
    ml: "24 x 250 ml (6 L)",
    price: 220,
    originalPrice: null,
    img: small250X24,
    category: "Multipacks",
    description:
      "Amrit Jal Pocket Pack Case includes 24 bottles of 250 ml each, providing a combined volume of 6 litres. The multipack format is useful when several individual bottles are needed together. Consider it for office meetings, family gatherings, small events and planned group requirements. Confirm the pack quantity, current price and availability before ordering.",
    shortDescription:
      "A 24-bottle multipack of 250 ml bottles, with 6 litres of total volume.",
    badge: "Value Pack",
    availability: "In Stock",
    features: [
      "24 bottles per case",
      "250 ml per bottle",
      "6 litres total volume",
      "Convenient for group requirements",
    ],
    suitableFor: [
      "Office meetings",
      "Family gatherings",
      "Small events",
      "Group servings",
    ],
  },

  {
    id: 2,
    name: "Amrit Jal On-the-Go Bottle",
    size: "On-the-Go",
    ml: "500 ml",
    price: 15,
    originalPrice: null,
    img: onGo500,
    category: "Single Bottles",
    description:
      "Amrit Jal On-the-Go is a 500 ml bottle designed for individual use throughout the day. Its portable size makes it a practical option for commutes, outings, office breaks, travel and everyday activities. It offers a larger serving than the 250 ml Pocket Pack while remaining easy to carry. Review the listed price and availability before adding it to your cart.",
    shortDescription:
      "A portable 500 ml bottle for daily activities, commuting and travel.",
    availability: "In Stock",
    features: [
      "500 ml bottle size",
      "Portable single-bottle format",
      "Suitable for individual use",
      "Useful for outings and daily activities",
    ],
    suitableFor: [
      "Daily commuting",
      "Office use",
      "Travel and outings",
      "Individual servings",
    ],
  },

  {
    id: 11,
    name: "Amrit Jal On-the-Go 12-Pack",
    size: "12-Pack",
    ml: "12 x 500 ml (6 L)",
    price: 165,
    originalPrice: null,
    img: onGo500X12,
    category: "Multipacks",
    description:
      "Amrit Jal On-the-Go 12-Pack contains 12 bottles of 500 ml each, giving you a combined volume of 6 litres. Buying a multipack can help organise bottled-water requirements for a household, workplace, planned outing or group activity. The bottles can be distributed individually as needed. Please check the pack contents and current availability before placing your order.",
    shortDescription:
      "A 12-bottle multipack of 500 ml bottles, with 6 litres of total volume.",
    badge: "Popular",
    availability: "In Stock",
    features: [
      "12 bottles per pack",
      "500 ml per bottle",
      "6 litres total volume",
      "Suitable for planned group requirements",
    ],
    suitableFor: [
      "Workplaces",
      "Family outings",
      "Group activities",
      "Regular bottled-water requirements",
    ],
  },

  {
    id: 3,
    name: "Amrit Jal Family Bottle",
    size: "Family",
    ml: "1 L",
    price: 20,
    originalPrice: null,
    img: family1000,
    category: "Single Bottles",
    description:
      "Amrit Jal Family Bottle is a 1 litre option for customers who prefer a larger individual bottle. It can be considered for meals, travel, office use, family outings and other everyday occasions. Its larger capacity compared with the 250 ml and 500 ml options allows you to select a size based on your requirements. Check the displayed price and availability before ordering.",
    shortDescription:
      "A 1 litre bottle for meals, outings, office use and everyday occasions.",
    availability: "In Stock",
    features: [
      "1 litre bottle size",
      "Larger individual serving format",
      "Suitable for everyday occasions",
      "Alternative to smaller bottle sizes",
    ],
    suitableFor: [
      "Meals",
      "Family outings",
      "Office use",
      "Travel",
    ],
  },

  {
    id: 12,
    name: "Amrit Jal Family Bulk Case",
    size: "Bulk Case",
    ml: "12 x 1 L (12 L)",
    price: 225,
    originalPrice: null,
    img: family1000X12,
    category: "Multipacks",
    description:
      "Amrit Jal Family Bulk Case contains 12 bottles of 1 litre each, providing a combined volume of 12 litres. This pack is intended for customers who need several larger bottles together for household use, office requirements, gatherings or planned events. Review the total quantity and price to decide whether this pack suits your needs. Availability should be confirmed before placing an order.",
    shortDescription:
      "A case of 12 one-litre bottles, providing 12 litres in total.",
    badge: "Best Value",
    availability: "In Stock",
    features: [
      "12 bottles per case",
      "1 litre per bottle",
      "12 litres total volume",
      "Convenient for bulk requirements",
    ],
    suitableFor: [
      "Households",
      "Office requirements",
      "Gatherings",
      "Planned events",
    ],
  },

  {
    id: 4,
    name: "Amrit Jal 20 L Water Jar",
    size: "Jar",
    ml: "20 L",
    price: 80,
    originalPrice: null,
    img: jar20l,
    category: "Water Jars",
    description:
      "Amrit Jal 20 L Water Jar is the large-format option in the product range, designed for regular water requirements at homes, offices and other suitable locations. Its 20 litre capacity makes it different from the smaller individual bottles and multipacks. Before ordering, confirm delivery availability for your location and whether the listed price applies to a filled jar, a refill or another applicable arrangement.",
    shortDescription:
      "A 20 litre water jar for regular household and workplace water requirements.",
    badge: "Corporate",
    availability: "In Stock",
    features: [
      "20 litre listed capacity",
      "Large-format water option",
      "Suitable for household or workplace requirements",
      "Confirm refill and jar terms before ordering",
    ],
    suitableFor: [
      "Homes",
      "Offices",
      "Workplaces",
      "Regular water requirements",
    ],
  },
];

/**
 * Product badges
 * Used by ProductCard and other catalogue components.
 */
export const badgeColors = {
  "Best Seller": "bg-blue-600",
  Popular: "bg-green-600",
  "Value Pack": "bg-purple-600",
  "Best Value": "bg-emerald-600",
  Corporate: "bg-orange-600",
};

/**
 * Shared price/discount helper.
 * Reuse this in product cards or other product UI where needed.
 */
export function getProductPricing(product) {
  const price = Number(product?.price);
  const originalPrice = Number(product?.originalPrice);

  const validPrice = Number.isFinite(price) && price >= 0;

  const hasDiscount =
    validPrice &&
    product?.originalPrice !== null &&
    product?.originalPrice !== undefined &&
    product?.originalPrice !== "" &&
    Number.isFinite(originalPrice) &&
    originalPrice > price;

  const savingsPerUnit = hasDiscount ? originalPrice - price : 0;

  const discountPercent = hasDiscount
    ? Math.round((savingsPerUnit / originalPrice) * 100)
    : 0;

  return {
    price: validPrice ? price : null,
    originalPrice: hasDiscount ? originalPrice : null,
    hasDiscount,
    discountPercent,
    savingsPerUnit,
  };
}
