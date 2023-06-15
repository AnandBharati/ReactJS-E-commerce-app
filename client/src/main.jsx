import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ProductProvider from './ContextApi/ProductProvider.jsx'
import CartProvider from './ContextApi/CartProvider.jsx'
import UserProvider from './ContextApi/UserProvider.jsx'
import ModelProvider from './ContextApi/ModelProvider.jsx'
import { ThemeProvider } from '@mui/material'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <UserProvider>
      <ProductProvider>
        <CartProvider>
          <ModelProvider>
            <ThemeProvider theme={{}}>
              <App />
            </ThemeProvider>
          </ModelProvider>
        </CartProvider>
      </ProductProvider>
    </UserProvider>
  </BrowserRouter >
  // </React.StrictMode>,
)
