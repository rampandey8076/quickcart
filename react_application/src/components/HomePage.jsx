import ProductList from "./ProductList";
import { useCart } from "../context/CartContext";

function HomePage({ products, searchTerm }) {

  const { addToCart } = useCart();

  const filtered = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>

      {filtered.length === 0 ? (
        <p>No products found</p>
      ) : (
        <ProductList
          products={filtered}
          onAddToCart={addToCart}
        />
      )}

    </div>
  );
}

export default HomePage;