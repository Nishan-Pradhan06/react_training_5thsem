import React from 'react';
import HeroSection from '../component/HeroSection';
import ProductCard from '../component/ProductCard';
import { useGetDecodedToken } from '../Hook/useGetDecodedToken';

export default function LandingPage() {
    useGetDecodedToken();
    return (
        <>
            <div className='HeroSection'>
                <div className='container'>
                    <HeroSection />
                    <ProductCard />
                </div>
            </div>
        </>
    )
}