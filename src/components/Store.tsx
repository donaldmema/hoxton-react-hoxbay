import { ProductItem } from "../data/types";
import { StoreItem } from "./StoreItem";

type Props = { products: ProductItem[] };

export function Store({ products }: Props) {
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
