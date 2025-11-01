import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { BreadcrumbProvider } from './Contexts/BreadCrumbContext.tsx'
import { FavoritesProvider } from './Contexts/FavoritesContext.tsx'
import { ThemeProvider } from './Contexts/ThemeContext.tsx'
import { CartProvider } from './Contexts/CartContext.tsx'

createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <ThemeProvider>
      <BreadcrumbProvider>
        <FavoritesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FavoritesProvider>
      </BreadcrumbProvider>
    </ThemeProvider>
  </HashRouter>
);
