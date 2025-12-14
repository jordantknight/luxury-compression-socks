import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ProductDetail.module.css';
import sockNavy from '../assets/sock-navy.png';
import textureCream from '../assets/texture-cream.png';

const ProductDetail = () => {
    const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                {/* Visuals - Ivory Background */}
                <div className={styles.gallery}>
                    <div className={styles.mainImageWrapper}>
                        <img src={sockNavy} className={styles.mainImage} alt="Sock Detail" />
                    </div>
                </div>

                {/* Details - Parchment/Ink */}
                <div className={styles.info}>
                    <span className="text-eyebrow" style={{ color: 'var(--color-text-secondary)' }}>The Executive Series</span>
                    <h1 className={styles.title}>The Navy Ribbed</h1>
                    <p className={styles.price}>$48.00</p>

                    <p className={styles.description}>
                        Engineered for the demanding traveler. Crafted from a premium merino-silk blend
                        that regulates temperature while providing medical-grade 15-20mmHg graduated compression.
                        Designed to sit comfortably below the knee without slipping.
                    </p>

                    {/* Simpler Selectors */}
                    <div className={styles.selectors}>
                        <div className={styles.selectorGroup}>
                            <label className={styles.label}>Color: <span style={{ fontWeight: 400, textTransform: 'none' }}>Navy</span></label>
                            <div className={styles.colors}>
                                <button className={`${styles.colorSwatch} ${styles.active}`} style={{ background: '#1B2B3A' }} />
                                <button className={styles.colorSwatch} style={{ background: '#4A4A4A' }} />
                                <button className={styles.colorSwatch} style={{ background: '#1A1A1A' }} />
                            </div>
                        </div>

                        <div className={styles.selectorGroup}>
                            <label className={styles.label}>Size</label>
                            <div className={styles.sizes}>
                                <button className={styles.sizeBtn}>M</button>
                                <button className={`${styles.sizeBtn} ${styles.active}`}>L</button>
                                <button className={styles.sizeBtn}>XL</button>
                            </div>
                        </div>
                    </div>

                    <button className={styles.addToCartBtn}>Add to Cart</button>

                    <div className={styles.features}>
                        <div className={styles.featureItem}>
                            <strong>Materials</strong>
                            <p>65% Merino Wool, 25% Nylon, 10% Spandex</p>
                        </div>
                        <div className={styles.featureItem}>
                            <strong>Compression</strong>
                            <p>15-20mmHg (Moderate Graduated)</p>
                        </div>
                        <div className={styles.featureItem}>
                            <strong>Care</strong>
                            <p>Machine wash cold, air dry flat.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
