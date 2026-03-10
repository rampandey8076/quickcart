import ProductCard from "./ProductCard";
import products from "../data/products";
import "../styles/ProductList.css";

function ProductList() {
  return (
    <div className="grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;