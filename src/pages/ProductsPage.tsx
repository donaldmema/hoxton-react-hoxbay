export function ProductsPage() {
  return (
    <section className="products-container main-wrapper">
      <ul className="products-container__list">
        <li>
          <a href="/products/1">
            <article className="product-item">
              <img
                src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                alt="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
              />
              <h3>Fjallraven - Foldsack...</h3>
            </article>
          </a>
        </li>

        <li>
          <a href="/products/2">
            <article className="product-item">
              <img
                src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                alt="Mens Casual Premium Slim Fit T-Shirts "
              />
              <h3>Mens Casual Premium S...</h3>
            </article>
          </a>
        </li>
      </ul>
    </section>
  );
}
