import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { BreadcrumbProvider } from './Contexts/BreadCrumbContext.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <BreadcrumbProvider>
      <App />
    </BreadcrumbProvider>
  </BrowserRouter>,
)
