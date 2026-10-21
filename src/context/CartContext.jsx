
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const CartContext = createContext(null);

const STORAGE_KEY = "amrit-jal-cart-v1";

function getInitialCart() {
  if (typeof window === "undefined") return [];

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);

    if (!stored) return [];

    const parsed = JSON.parse(stored);

    if (!Array.isArray(parsed)) return [];

    return parsed
      .filter(
        (item) =>
          item &&
          item.id !== undefined &&
          item.id !== null &&
          Number.isFinite(Number(item.price)) &&
          Number(item.price) >= 0 &&
          Number.isInteger(Number(item.quantity)) &&
          Number(item.quantity) > 0
      )
      .map((item) => ({
        ...item,
        price: Number(item.price),
        quantity: Number(item.quantity),
      }));
  } catch {
    return [];
  }
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(getInitialCart);

  // Persist cart between page refreshes.
  useEffect(() => {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(cartItems)
      );
    } catch (error) {
      console.error("Unable to save Amrit Jal cart:", error);
    }
  }, [cartItems]);

  // Add a product or increment its existing quantity.
  const addToCart = useCallback((item) => {
    if (
      !item ||
      item.id === undefined ||
      item.id === null ||
      !Number.isFinite(Number(item.price)) ||
      Number(item.price) < 0
    ) {
      console.warn("Cannot add invalid product to cart.", item);
      return false;
    }

    const normalizedItem = {
      ...item,
      price: Number(item.price),
    };

    setCartItems((previous) => {
      const existing = previous.find(
        (product) => String(product.id) === String(item.id)
      );

      if (existing) {
        return previous.map((product) =>
          String(product.id) === String(item.id)
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      }

      return [...previous, { ...normalizedItem, quantity: 1 }];
    });

    return true;
  }, []);

  const removeFromCart = useCallback((id) => {
    setCartItems((previous) =>
      previous.filter((item) => String(item.id) !== String(id))
    );
  }, []);

  const increaseQuantity = useCallback((id) => {
    setCartItems((previous) =>
      previous.map((item) =>
        String(item.id) === String(id)
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }, []);

  const decreaseQuantity = useCallback((id) => {
    setCartItems((previous) =>
      previous
        .map((item) =>
          String(item.id) === String(id)
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }, []);

  const updateQuantity = useCallback((id, quantity) => {
    const nextQuantity = Number(quantity);

    if (!Number.isInteger(nextQuantity) || nextQuantity < 0) {
      return;
    }

    setCartItems((previous) => {
      if (nextQuantity === 0) {
        return previous.filter(
          (item) => String(item.id) !== String(id)
        );
      }

      return previous.map((item) =>
        String(item.id) === String(id)
          ? { ...item, quantity: nextQuantity }
          : item
      );
    });
  }, []);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const cartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems]
  );

  const cartTotal = useMemo(
    () =>
      cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),
    [cartItems]
  );

  const totalQuantity = cartCount;

  const value = useMemo(
    () => ({
      cartItems,
      addToCart,
      removeFromCart,
      increaseQuantity,
      decreaseQuantity,
      updateQuantity,
      clearCart,
      cartCount,
      totalQuantity,
      cartTotal,
    }),
    [
      cartItems,
      addToCart,
      removeFromCart,
      increaseQuantity,
      decreaseQuantity,
      updateQuantity,
      clearCart,
      cartCount,
      totalQuantity,
      cartTotal,
    ]
  );

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}
