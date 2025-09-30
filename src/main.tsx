import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import './main.css'
import App from './App.tsx'
import { BreadcrumbProvider } from './Contexts/BreadCrumbContext.tsx'
import { FavoritesProvider } from './Contexts/FavoritesContext.tsx'
import { ThemeProvider } from './Contexts/ThemeContext.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ThemeProvider>
      <BreadcrumbProvider>
        <FavoritesProvider>
          <App />
        </FavoritesProvider>
      </BreadcrumbProvider>
    </ThemeProvider>
  </BrowserRouter>
)

