import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './context/userContext.jsx'
import { ProductsProvider } from './context/productsContext.jsx'
import { CartProvider } from './context/cartContext.jsx'
import { SearchProvider } from './context/searchContext.jsx'

import GlobalStyles from './styles/global'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
            <SearchProvider>
              <App />
            </SearchProvider>
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
