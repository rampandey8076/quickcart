import { useCart } from "../context/CartContext";
import "../styles/CartSidebar.css";

function CartSidebar() {

  const { cart, getTotalPrice } = useCart();

  return (
    <div className="cart-sidebar">

      <h2>Your Cart</h2>

      {cart.map(item => (
        <div key={item.id}>
          {item.name} x {item.quantity}
        </div>
      ))}

      <h3>Total: ${getTotalPrice()}</h3>

    </div>
  );
}

export default CartSidebar;