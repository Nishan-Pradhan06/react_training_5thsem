import React from 'react'
import HeroSection from '../component/HeroSection'
import ProductCard from '../component/ProductCard'

export default function LandingPage() {
    return (
        <>
            <div className='HeroSection'>
                <div className='container'>
                    <HeroSection />
                    <ProductCard/>
                </div>
            </div>
        </>
    )
}