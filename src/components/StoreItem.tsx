import { Link } from "react-router-dom";
import { ProductItem } from "../data/types";

type Props = { product: ProductItem };

export function StoreItem({ product }: Props) {
  return (
    <li>
      <Link to={"/products/" + product.id}>
        <article className="product-item">
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
        </article>
      </Link>
    </li>
  );
}
