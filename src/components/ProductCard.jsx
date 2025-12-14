import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
    return (
        <div className={styles.card}>
            <Link to={`/product/${product.id}`} className={styles.imageLink}>
                <div className={styles.imageWrapper}>
                    <img src={product.image} alt={product.name} className={styles.image} />
                    <div className={styles.hoverOverlay}>
                        <span>Quick View</span>
                    </div>
                </div>
            </Link>
            <div className={styles.details}>
                <Link to={`/product/${product.id}`} className={styles.name}>{product.name}</Link>
                <span className={styles.price}>{product.price}</span>
                <div className={styles.meta}>
                    {product.colors.length} Colors • {product.compression}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
