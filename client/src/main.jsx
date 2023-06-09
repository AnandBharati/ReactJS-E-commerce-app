import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ProductProvider from './ContextApi/ProductProvider.jsx'
import CartProvider from './ContextApi/CartProvider.jsx'
import { ThemeProvider } from '@mui/material'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <ProductProvider>
      <CartProvider>
        <ThemeProvider theme={{}}>
          <App />
        </ThemeProvider>
      </CartProvider>
    </ProductProvider>
  </BrowserRouter>
  // </React.StrictMode>,
)
