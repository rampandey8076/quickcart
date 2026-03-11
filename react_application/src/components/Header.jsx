import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/Header.css";

function Header({ searchTerm, onSearchChange }) {

  const { getTotalItems } = useCart();

  return (
    <header className="header">

      <Link to="/">
        <h1>QuickCart</h1>
      </Link>

      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <Link to="/cart" className="cart-icon">
        🛒 {getTotalItems()}
      </Link>

    </header>
  );
}

export default Header;