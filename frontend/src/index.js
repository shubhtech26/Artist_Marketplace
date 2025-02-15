import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ShoppingPage from './pages/ShoppingPage';
import Layout from './Layout'; // Ensure this is imported
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart'; // Ensure this is imported
import { CartProvider } from './context/CartContext'; // ✅ Import CartProvider
import Checkout from './pages/Checkout';
// Define Routes
const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="shop" element={<ShoppingPage />} />
    <Route path="contact" element={<Contact />} />
    <Route path="/product/:id" element={<ProductDetail />} />
    <Route path="cart" element={<Cart />} />  {/* ✅ Cart Page Route */}
    <Route path='checkout' element={<Checkout />} />
  </Route>
);

const browserRouter = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <CartProvider>  {/* ✅ Wrap with CartProvider */}
      <RouterProvider router={browserRouter} />
    </CartProvider>
  </React.StrictMode>
);

reportWebVitals();
