import React from 'react'

// components
import Header from '../../components/Header/Header';
import Shirts from '../../components/Shirts/Shirts';


export default function LandingPage() {
    return (
        <div>
            <Header />
                <section id="landingPage-main">
                    <div className="container">
                        <h1 className="text-center py-5">Shopping</h1>
                    </div>
                </section>
                {/* Shirts section */}
                <section id="shirt-section">
                    <Shirts />
                </section>
                {/* Shopping Cart section */}
                <section id='shoppingCart-section'>
                    <h2 className="text-center">Shopping list</h2>
                </section>      
        </div>
    )
}
