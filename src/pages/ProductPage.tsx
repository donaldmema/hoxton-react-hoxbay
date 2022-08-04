import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { BasketItem, ProductItem } from "../data/types";

export function ProductPage() {
  const params = useParams();

  const [product, setProduct] = useState<ProductItem>();
  const [basket, setBasket] = useState<BasketItem[]>([]);

  useEffect(() => {
    fetch(`http://localhost:4000/products/${params.productId}`)
      .then((resp) => resp.json())
      .then((itemFromServer) => setProduct(itemFromServer));
  }, []);

  if (product === undefined)
    return (
      <div>
        <h3>
          Never gonna give you up <br />
          Never gonna let you down <br />
          Never gonna run around and desert you <br />
          Never gonna make you cry <br />
          Never gonna say goodbye <br />
          Never gonna tell a lie and hurt you
        </h3>
      </div>
    );

  if (product.id === undefined) return <Navigate to="/products" />;

  return (
    <section className="product-detail main-wrapper">
      <img src={product.image} alt={product.title} />
      <div className="product-detail__side">
        <h3></h3>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>£{product.price}</p>
        {/* <!-- Once you click in this button, the user should be redirected to the Basket page --> */}
        <Link to="/basket">
          <button
            onClick={() => {
              <Navigate to="/basket" />;
              console.log("Should be redirected to the Basket page");
            }}
          >
            Add to basket
          </button>
        </Link>
      </div>
    </section>
  );
}
