import "../styles/ProductCard.css";

function ProductCard({ product, onAddToCart }) {

  return (
    <div className="card">

      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>

      <p>{product.description}</p>

      <p className="price">${product.price}</p>

      <span>{product.category}</span>

      <button
        className="add-btn"
        onClick={() => onAddToCart(product)}
      >
        Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;