import React from 'react'
import { Outlet, Route, Routes } from 'react-router'
import Footer from '../component/Footer'
import NavBar from '../component/NavBar'
import NotFound from '../component/not_found'
import LoginPage from '../pages/auth/LoginPage'
import RegisterFormPage from '../pages/auth/SignUpPage'
import CartPage from '../pages/CartPage'
import LandingPage from '../pages/landing_page'
import ProductPage from '../pages/ProductPage'
import UserProfile from '../pages/ProfilePage'
import SingleProductPage from '../pages/SingleProductPage'
import SearchProducts from '../pages/SearchProduct'
import CheckoutPage from '../pages/CheckOutPage'

export default function AppRoutes() {
    return (
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterFormPage />} />
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Outlet />
              <Footer />
            </>
          }
        >
          <Route index element={<LandingPage />} />
          <Route path="shop" element={<ProductPage />} />
          <Route path="products">
            <Route element={<ProductPage />} index />
            <Route path=":productId" element={<SingleProductPage />} />
          </Route>
          <Route path="search" element={<SearchProducts />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="checkout" element={<CheckoutPage />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    );
}