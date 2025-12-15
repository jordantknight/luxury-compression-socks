import React from 'react';
import ProductCard from '../components/ProductCard';
import sockNavy from '../assets/sock-navy.png';

// Palette from User Request
const COLORS = {
    MidnightNavy: '#1E2A36',
    Charcoal: '#2B2E34',
    Espresso: '#3A2E29',
    DarkChocolate: '#2A1F1A',
    HeatherGrey: '#6F6F6B',
    Camel: '#B79A6B',
    Taupe: '#8A8178',
    Evergreen: '#2E463A',
    Burgundy: '#5A2A2A',
    DeepOlive: '#3F4A3C'
};

const MOCK_PRODUCTS = [
    // Executive Series (Darks / Formals)
    { id: 1, name: 'The Executive Navy', price: '$48.00', hex: COLORS.MidnightNavy, pattern: 'Fine Rib', compression: '15-20mmHg', image: sockNavy },
    { id: 2, name: 'The Charcoal Rib', price: '$48.00', hex: COLORS.Charcoal, pattern: 'Micro Rib', compression: '15-20mmHg', image: sockNavy },
    { id: 3, name: 'Espresso Pinstripe', price: '$48.00', hex: COLORS.Espresso, pattern: 'Micro Pinstripe', compression: '15-20mmHg', image: sockNavy },
    { id: 4, name: 'Dark Chocolate Solid', price: '$48.00', hex: COLORS.DarkChocolate, pattern: 'Solid', compression: '15-20mmHg', image: sockNavy },

    // Weekend/Travel (Naturals / Textures)
    { id: 5, name: 'Alpine Evergreen', price: '$55.00', hex: COLORS.Evergreen, pattern: 'Birdseye', compression: '20-30mmHg', image: sockNavy },
    { id: 6, name: 'Camel Hair Blend', price: '$65.00', hex: COLORS.Camel, pattern: 'Subtle Mélange', compression: '15-20mmHg', image: sockNavy },
    { id: 7, name: 'Burgundy Travel', price: '$55.00', hex: COLORS.Burgundy, pattern: 'Micro Rib', compression: '20-30mmHg', image: sockNavy },
    { id: 8, name: 'Heather Grey Daily', price: '$48.00', hex: COLORS.HeatherGrey, pattern: 'Solid', compression: '15-20mmHg', image: sockNavy },
    { id: 9, name: 'Deep Olive Texture', price: '$48.00', hex: COLORS.DeepOlive, pattern: 'Birdseye', compression: '15-20mmHg', image: sockNavy },
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
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
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
