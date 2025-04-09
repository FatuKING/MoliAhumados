import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '@fontsource/lobster'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './index.css'
import { CartProvider } from './context/cartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
    <App />
  </CartProvider>
)
