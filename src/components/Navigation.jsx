import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Logic: 
    // Home page starts transparent with Ivory text (Dark Hero). 
    // On scroll OR on other pages, it becomes solid Parchment with Ink text.
    const isTransparent = isHome && !scrolled;

    const navClass = `${styles.nav} ${!isTransparent ? styles.solid : ''}`;
    const textClass = isTransparent ? styles.textInverse : styles.textPrimary;

    return (
        <nav className={navClass}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <Link to="/shop" className={`${styles.link} ${textClass}`}>Shop</Link>
                    <Link to="/brand" className={`${styles.link} ${textClass}`}>Philosophy</Link>
                    <Link to="/craft" className={`${styles.link} ${textClass}`}>Craft</Link>
                    <Link to="/journal" className={`${styles.link} ${textClass}`}>Journal</Link>
                </div>

                <div className={styles.center}>
                    <Link to="/" className={`${styles.logo} ${textClass}`}>
                        COMPRESST<span className={styles.logoAccent}>O</span>
                    </Link>
                </div>

                <div className={styles.right}>
                    <Link to="/account" className={`${styles.link} ${textClass}`}>Account</Link>
                    <button className={`${styles.cartBtn} ${textClass}`}>Cart (0)</button>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
