import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import textureCream from '../assets/texture-cream.png';
import lifestyleTravel from '../assets/lifestyle-travel.png';
import sockNavy from '../assets/sock-navy.png'; // Using as placeholder

const Home = () => {
    return (
        <div className={styles.home}>
            {/* 1. Hero (Seasonal, Cinematic) */}
            <Hero />

            {/* 2. Philosophy */}
            <section className={styles.philosophy}>
                <div className="container" style={{ textAlign: 'center', maxWidth: '700px' }}>
                    <span className="text-eyebrow" style={{ color: 'var(--color-text-secondary)' }}>The Philosophy</span>
                    <h2 className="text-heading-md" style={{ margin: 'var(--space-sm) 0 var(--space-md)' }}>
                        15–20mmHg, Disguised.
                    </h2>
                    <p className={styles.leadText}>
                        The gap between fine dress socks and medical compression has existed for too long.
                        We bridge heritage menswear with modern vascular engineering. Intentional living
                        starts from the ground up.
                    </p>
                </div>
            </section>

            {/* 3. The Collection (Ivory BG) */}
            <section className={styles.collection}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <h2 className="text-heading-md">The Collection</h2>
                        <Link to="/shop" className="text-eyebrow" style={{ borderBottom: '1px solid currentColor' }}>View All</Link>
                    </div>

                    <div className={styles.productGrid}>
                        {/* Mocking 3 products for the homepage */}
                        {[1, 2, 3].map((i) => (
                            <div key={i} className={styles.productCard}>
                                <div className={styles.productImageWrapper}>
                                    <img src={sockNavy} alt="Sock" />
                                </div>
                                <div className={styles.productInfo}>
                                    <h4>The Executive</h4>
                                    <span className={styles.price}>$48.00</span>
                                    <span className={styles.meta}>15-20mmHg</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Craft & Materials */}
            <section className={styles.craft}>
                <div className={styles.craftContent}>
                    <span className="text-eyebrow">The Craft</span>
                    <h2 className="text-heading-lg" style={{ marginTop: '0.5rem' }}>Engineered Comfort.</h2>
                    <p className={styles.bodyText}>
                        Sourced from the finest Italian mills, our Merino-Silk blend regulates temperature
                        while providing the exact elasticity needed for medical-grade graduation.
                    </p>
                    <Link to="/craft" className={styles.btnOutline}>Discover The Craft</Link>
                </div>
                <div className={styles.craftVisual}>
                    <img src={textureCream} alt="Fabric texture" />
                </div>
            </section>

            {/* 5. The Journal (Warmer) */}
            <section className={styles.journalPreview}>
                <div className="container">
                    <div className={styles.journalGrid}>
                        <div className={styles.journalText}>
                            <span className="text-eyebrow" style={{ color: 'var(--color-accent-warm)' }}>The Journal</span>
                            <h2 className="text-heading-md">The Art of Arrival</h2>
                            <p className={styles.bodyText}>
                                Why the journey matters as much as the destination. exploring the rituals of travel
                                and the science of arriving restored.
                            </p>
                            <Link to="/journal" className={styles.linkWarm}>Read The Journal &rarr;</Link>
                        </div>
                        <div className={styles.journalImage}>
                            <img src={lifestyleTravel} alt="Travel lifestyle" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Closing */}
            <section className={styles.closing}>
                <h3 className="text-heading-md" style={{ marginBottom: 'var(--space-sm)' }}>
                    Objects that serve you — not distract you.
                </h3>
                <Link to="/shop" className={styles.linkUnderline}>Shop The Collection</Link>
            </section>
        </div>
    );
};

export default Home;
