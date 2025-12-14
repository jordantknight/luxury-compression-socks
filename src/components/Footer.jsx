import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.brandCol}>
                        <Link to="/" className={styles.logo}>COMPRESS<span className={styles.logoAccent}>O</span></Link>
                        <p className={styles.tagline}>Performance. Crafted.</p>
                    </div>

                    <div className={styles.linksCol}>
                        <h4 className={styles.colHeader}>Shop</h4>
                        <Link to="/shop">Collection</Link>
                        <Link to="/shop">New Arrivals</Link>
                        <Link to="/shop">Gift Cards</Link>
                    </div>

                    <div className={styles.linksCol}>
                        <h4 className={styles.colHeader}>Brand</h4>
                        <Link to="/brand">Our Story</Link>
                        <Link to="/craft">Craftsmanship</Link>
                        <Link to="/journal">Journal</Link>
                    </div>

                    <div className={styles.linksCol}>
                        <h4 className={styles.colHeader}>Support</h4>
                        <Link to="/faq">FAQ</Link>
                        <Link to="/shipping">Shipping & Returns</Link>
                        <Link to="/contact">Contact Us</Link>
                    </div>

                    <div className={styles.newsletterCol}>
                        <h4 className={styles.colHeader}>Stay in Motion</h4>
                        <p className={styles.newsletterText}>Join our list for early access to new colorways.</p>
                        <div className={styles.inputGroup}>
                            <input type="email" placeholder="Email Address" className={styles.input} />
                            <button className={styles.submitBtn}>Join</button>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; 2025 Compresso. All rights reserved.</p>
                    <div className={styles.legalLinks}>
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
