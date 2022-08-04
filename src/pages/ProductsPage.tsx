import { useEffect, useState } from "react";
import { StoreItem } from "../components/StoreItem";
import { ProductItem } from "../data/types";

export function ProductsPage() {
  const [products, setProducts] = useState<ProductItem[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section className="products-container main-wrapper">
      <ul className="products-container__list">
        {products.map((product: ProductItem) => (
          <StoreItem key={product.id} product={product} />
        ))}
      </ul>
    </section>
  );
}
