import React from 'react';
import ProductCard from '../components/ProductCard';
import sockNavy from '../assets/sock-navy.png';

const MOCK_PRODUCTS = [
    { id: 1, name: 'The Executive', price: '$48.00', colors: ['Navy', 'Charcoal', 'Black'], compression: '15-20mmHg', image: sockNavy },
    { id: 2, name: 'The Traveler', price: '$48.00', colors: ['Espresso', 'Sand'], compression: '15-20mmHg', image: sockNavy },
    { id: 3, name: 'Merino Everyday', price: '$55.00', colors: ['Grey', 'Navy'], compression: '20-30mmHg', image: sockNavy },
    { id: 4, name: 'Silk Blend No. 1', price: '$65.00', colors: ['Cream'], compression: '15-20mmHg', image: sockNavy },
];

const Shop = () => {
    return (
        <div style={{ backgroundColor: 'var(--color-bg-secondary)', minHeight: '100vh', paddingTop: '120px', paddingBottom: 'var(--space-xl)' }}>
            <div className="container">
                <header style={{ marginBottom: 'var(--space-xl)', textAlign: 'center' }}>
                    <h1 className="text-heading-lg" style={{ color: 'var(--color-text-primary)' }}>The Collection</h1>
                    <p style={{ marginTop: 'var(--space-sm)', color: 'var(--color-text-secondary)', fontFamily: 'var(--font-serif)', fontSize: '1.25rem' }}>
                        Engineered for longevity. Crafted for comfort.
                    </p>
                </header>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                    gap: 'var(--space-lg)'
                }}>
                    {MOCK_PRODUCTS.map(p => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Shop;
