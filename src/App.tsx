import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { ProductsItemPage } from "./pages/ProductsItemPage";
import { ProductsPage } from "./pages/ProductsPage";

function App() {
  return (
    <>
      <Header />
      <main>
        {/* Create your routes here. Don't forget to install the router package! */}
        <Routes>
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/store/:itemId" element={<ProductsItemPage />} />
          {/* <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/categories/:itemId" element={<CategoriesItemPage />} />
          <Route path="/basket" element={<BasketPage />} />
          <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
      </main>
    </>
  );
}

export default App;
