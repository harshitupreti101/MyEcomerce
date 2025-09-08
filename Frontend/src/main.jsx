import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ShopContextProvider from './Context/ShopContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ShopContextProvider> <App /></ShopContextProvider>
  </StrictMode>,
)
