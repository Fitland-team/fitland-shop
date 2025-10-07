import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { BreadcrumbProvider } from "./Contexts/BreadCrumbContext.tsx";
import { FavoritesProvider } from "./Contexts/FavoritesContext.tsx";
import { CartProvider } from "./Contexts/CartContext.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <BreadcrumbProvider>
      <FavoritesProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FavoritesProvider>
    </BreadcrumbProvider>
  </BrowserRouter>
);
