import React from 'react';
import styles from './Brand.module.css';
import heroBg from '../assets/hero-bg.png'; // Reusing for atmosphere

const Brand = () => {
    return (
        <div className={styles.container}>
            <section className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <span className="text-eyebrow">The Origin</span>
                    <h1 className="text-display">Intentional Living.</h1>
                    <p className={styles.heroText}>
                        Born from the belief that the objects we carry through life should serve us,
                        not distract us. We set out to bridge the gap between high-performance
                        engineering and heritage menswear.
                    </p>
                </div>
            </section>

            <section className={styles.storySection}>
                <div className={styles.storyGrid}>
                    <div className={styles.colLeft}>
                        <h2 className="text-heading-md">The Gap</h2>
                        <p>
                            For too long, the choice was binary: beautiful dress socks that slipped and
                            sagged, or medical-grade compression that looked like medical equipment.
                            There was no middle ground for the discerning traveler.
                        </p>
                    </div>
                    <div className={styles.colRight}>
                        <h2 className="text-heading-md">The Solution</h2>
                        <p>
                            We traveled to Northern Italy to find mills that understood luxury, and
                            partnered with vascular engineers to understand flow. The result is a
                            garment that looks at home in a boardroom but performs like athletic gear.
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.quoteSection}>
                <blockquote className={styles.quote}>
                    “Crafted for those who move with intention. Our compression socks blend
                    modern engineering with timeless materials.”
                </blockquote>
            </section>
        </div>
    );
};

export default Brand;
