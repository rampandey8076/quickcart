import { useCart } from "../context/CartContext";

function CartPage() {

  const { cart, updateQuantity, removeFromCart, getTotalPrice } = useCart();

  return (
    <div>

      <h2>Shopping Cart</h2>

      {cart.map(item => (

        <div key={item.id}>

          <h3>{item.name}</h3>

          <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
            -
          </button>

          {item.quantity}

          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
            +
          </button>

          <button onClick={() => removeFromCart(item.id)}>
            Remove
          </button>

        </div>

      ))}

      <h3>Total: ${getTotalPrice()}</h3>

    </div>
  );
}

export default CartPage;