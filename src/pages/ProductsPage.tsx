import { useEffect, useState } from "react";
import { Store } from "../components/Store";
import { ProductItem } from "../data/types";

export function ProductsPage() {
  const [products, setProducts] = useState<ProductItem[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return <Store products={products} />;
}
