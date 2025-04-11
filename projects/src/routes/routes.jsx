import React from 'react'
import { Routes, Route, Outlet } from 'react-router'
import LandingPage from '../pages/landing_page'
import HeaderComponent from '../component/header_component'
import NotFound from '../component/not_found'
import FooterComponent from '../component/footer_component'

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={
                <>
                    <HeaderComponent />
                    <Outlet />
                    <FooterComponent/>
                </>
            } >
                < Route index element={<LandingPage />} />
                <Route path='*' element={<NotFound />} />
            </Route>
        </Routes>

    )
}

