import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { CategoriesPage } from "./pages/CategoriesPage";
import { CategorizedPage } from "./pages/CategorizedPage";
import { ProductPage } from "./pages/ProductPage";
import { ProductsPage } from "./pages/ProductsPage";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route index element={<Navigate to="/products" />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:productId" element={<ProductPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/categories/:itemId" element={<CategorizedPage />} />
          {/* 
          <Route path="/basket" element={<BasketPage />} />
          <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
      </main>
    </>
  );
}

export default App;
