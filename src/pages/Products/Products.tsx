import ProductCard from "../../components/ProductCard/ProductCard";
import { products } from "../../api/products";
import type { product } from "../../api/products"

import "./Products.css";

function Products() {
  return (
    <div>
      {products.map((products: product) => (
        <ProductCard
          key={products.id}
          title={products.title}
          image={products.image}
          price={products.price}
          color={products.color}
          rating={products.rating}
        />
      ))}
    </div>
  );
}

export default Products;
