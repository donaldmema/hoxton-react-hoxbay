import { useState } from "react";
import { ProductItem } from "../data/types";

type Props = { product: ProductItem; quantity: number };

export function BasketItem({ product, quantity }: Props) {
  return (
    <li>
      <article className="basket-container__item">
        <img src={product.image} alt={product.title} width="90" />
        <p>{product.title}</p>
        <p>
          Qty:
          <select onChange={(e) => (quantity = Number(e.target.value))}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </p>
        {/* <!-- The item total is calculated using the Qty selected value --> */}
        <p>Item total: £{product.price * quantity}</p>
      </article>
    </li>
  );
}
