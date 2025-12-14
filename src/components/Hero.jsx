import React, { useEffect, useState } from 'react';
import styles from './Hero.module.css';
import heroBg from '../assets/hero-bg.png';

const Hero = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <section className={styles.hero}>
            <div className={styles.bgWrapper}>
                <img
                    src={heroBg}
                    alt="Gentleman relaxing in library"
                    className={`${styles.bgImage} ${loaded ? styles.loaded : ''}`}
                />
                <div className={styles.overlay} />
            </div>

            <div className={styles.content}>
                <h1 className={`${styles.headline} animate-fade-in`}>
                    Compression, Crafted.
                </h1>
                <p className={`${styles.subheadline} animate-fade-in`} style={{ animationDelay: '0.2s' }}>
                    Where modern engineering meets timeless elegance.
                </p>
                <div className={`${styles.actions} animate-fade-in`} style={{ animationDelay: '0.4s' }}>
                    <button className={styles.primaryBtn}>Shop Collection</button>
                    <button className={styles.secondaryBtn}>Discover The Craft</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
