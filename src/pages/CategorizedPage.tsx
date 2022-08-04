import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Store } from "../components/Store";
import { ProductItem } from "../data/types";

export function CategorizedPage() {
  const params = useParams();
  const [products, setProducts] = useState<ProductItem[]>([]);

  useEffect(() => {
    fetch(`http://localhost:4000/products/?categoryId=${params.itemId}`)
      .then((resp) => resp.json())
      .then((itemsFromServer) => setProducts(itemsFromServer));
  }, []);

  // function getCategorizedProducts(products: ProductItem[]) {
  //   return products.filter(
  //     (product) => product.categoryId === Number(params.itemId)
  //   );
  // }
  return <Store products={products} />;
}
