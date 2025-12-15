import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
    // Generate pattern styles dynamically
    const getPatternStyle = (pattern) => {
        switch (pattern) {
            case 'Micro Rib':
                return { backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 3px)' };
            case 'Fine Rib':
                return { backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 4px, rgba(0,0,0,0.15) 4px, rgba(0,0,0,0.15) 5px)' };
            case 'Micro Pinstripe':
                return { backgroundImage: 'repeating-linear-gradient(to bottom, transparent, transparent 4px, rgba(255,255,255,0.05) 4px, rgba(255,255,255,0.05) 5px)' };
            case 'Birdseye':
                 return { 
                     backgroundImage: 'radial-gradient(rgba(0,0,0,0.15) 1px, transparent 1px)',
                     backgroundSize: '4px 4px' 
                 };
            default:
                return {};
        }
    };

    const mainColor = product.hex || '#1E2A36';

    return (
        <div className={styles.card}>
            <Link to={`/product/${product.id}`} className={styles.imageLink}>
                <div className={styles.imageWrapper} style={{ backgroundColor: mainColor }}>
                    {/* 1. Base Texture (The Sock Image, Desaturated) */}
                    <img 
                        src={product.image} 
                        alt={product.name} 
                        className={styles.baseImage} 
                        style={{ mixBlendMode: 'multiply', opacity: 0.8 }}
                    />
                    
                    {/* 2. Pattern Layer (CSS Gradients) */}
                    {product.pattern && (
                        <div className={styles.patternLayer} style={getPatternStyle(product.pattern)} />
                    )}
                    
                </div>
            </Link>
            <div className={styles.details}>
                <Link to={`/product/${product.id}`} className={styles.name}>{product.name}</Link>
                <span className={styles.price}>{product.price}</span>
                <div className={styles.meta}>
                    {product.pattern || 'Solid'} • {product.compression}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
