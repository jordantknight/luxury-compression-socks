import React from 'react';
import styles from './Brand.module.css'; // Reusing similar text styles
import textureCream from '../assets/texture-cream.png';

const Craft = () => {
    return (
        <div className={styles.container}>
            <section className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <span className="text-eyebrow">Materials & Engineering</span>
                    <h1 className="text-heading-lg">15-20mmHg, Disguised.</h1>
                </div>
            </section>

            <section className={styles.storySection}>
                <img src={textureCream} alt="Fiber details" style={{ width: '100%', marginBottom: 'var(--space-lg)' }} />

                <div className={styles.storyGrid}>
                    <div className={styles.colLeft}>
                        <h2 className="text-heading-md">The Fiber</h2>
                        <p>
                            We use a proprietary blend of extra-fine Merino wool and silk.
                            Wool provides temperature regulation and odor resistance, while silk
                            adds sheen and tensile strength.
                        </p>
                    </div>
                    <div className={styles.colRight}>
                        <h2 className="text-heading-md">The Compression</h2>
                        <p>
                            Graduated compression improves circulation by applying maximum pressure
                            at the ankle that gradually decreases up the leg. This reduces fatigue
                            and swelling during travel.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Craft;
