import ProductCard from "./ProductCard";
import products  from "../data/products";

function ProductList({ addToCart }) {
  return (
    <div className="grid">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={addToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;
