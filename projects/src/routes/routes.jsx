import React from 'react'
import { Routes, Route, Outlet } from 'react-router'
import LandingPage from '../pages/landing_page'
import NavBar from '../component/NavBar'
import NotFound from '../component/not_found'
import Footer from '../component/Footer'
import ShopPage from '../pages/ShopPage'
import CategoriesPage from '../pages/CategoriesPage'
import CartPage from '../pages/CartPage'

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={
                <>
                    <NavBar />
                    <Outlet />
                    <Footer />
                </>
            } >
                < Route index element={<LandingPage />} />
                < Route path='shop' element={<ShopPage />} />
                < Route path='categories' element={<CategoriesPage />} />
                < Route path='cart' element={<CartPage />} />
                <Route path='*' element={<NotFound />} />
            </Route>
        </Routes>

    )
}