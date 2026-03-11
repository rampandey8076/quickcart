import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {

    const existing = cart.find(item => item.id === product.id);

    if (existing) {
      setCart(
        cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateQuantity = (id, qty) => {

    if (qty <= 0) {
      removeFromCart(id);
      return;
    }

    setCart(
      cart.map(item =>
        item.id === id
          ? { ...item, quantity: qty }
          : item
      )
    );
  };

  const getTotalItems = () =>
    cart.reduce((sum, item) => sum + item.quantity, 0);

  const getTotalPrice = () =>
    cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        getTotalItems,
        getTotalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
}