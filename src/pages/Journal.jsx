import React from 'react';
import styles from './Journal.module.css';
import journalHero from '../assets/journal-hero.png';
import textureCream from '../assets/texture-cream.png';

const Journal = () => {
    return (
        <div className={styles.container}>
            {/* Journal Listing Hero (Magazine Style) */}
            <div className={styles.journalHeader}>
                <span className="text-eyebrow" style={{ color: 'var(--color-seasonal)' }}>Winter 2025</span>
                <h1 className="text-display" style={{ marginTop: '0.5rem' }}>The Journal</h1>
            </div>

            <article className={styles.featuredEntry}>
                <div className={styles.entryHeader}>
                    <span className="text-eyebrow">Wellness & Travel</span>
                    <h2 className="text-heading-lg" style={{ maxWidth: '800px', margin: '1rem auto' }}>
                        The Art of Arrival
                    </h2>
                    <p className={styles.date}>December 14, 2025</p>
                </div>

                <div className={styles.heroWrapper}>
                    <img src={journalHero} alt="Gentleman on train" className={styles.heroImage} />
                </div>

                <div className={styles.content}>
                    <p className={styles.leads}>
                        In a world that celebrates speed, we often overlook the toll of the journey itself.
                        True luxury isn't just about the destination—it's about arriving with the same
                        vitality with which you departed.
                    </p>

                    <p>
                        For the modern professional, travel is a constant. The red-eye to London, the
                        train to Zurich, the long hours in the boardroom. These moments of stillness are,
                        paradoxically, when our bodies are under the most stress. Gravity takes its toll.
                        Circulation slows. The result is a subtle, creeping fatigue that follows us out of
                        the airport and into the hotel.
                    </p>

                    <div className={styles.pullQuote}>
                        “We view compression not as medical necessity, but as a foundational ritual of energetic travel.”
                    </div>

                    <h3 className="text-heading-md">The Science of Flow</h3>
                    <p>
                        The concept is simple, yet the engineering is precise. Graduated compression reduces
                        the diameter of the veins in the lower leg, increasing the velocity of blood flow
                        back to the heart. It is, in essence, an energy return system.
                    </p>

                    <img src={textureCream} alt="Fabric texture" className={styles.inlineImage} />
                    <span className={styles.caption}>Our Merino-Silk blend ensures breathability during long transits.</span>

                    <p>
                        Clinical studies have long shown that this "assisted circulation" significantly reduces
                        leg swelling (edema) and lowers the risk of Deep Vein Thrombosis (DVT) during long-haul
                        flights. But beyond the clinical, the feeling is undeniable: a lightness, a readiness,
                        an absence of the heavy "lead leg" sensation that plagues frequent flyers.
                    </p>

                    <div className={styles.footer}>
                        <p className="text-eyebrow" style={{ marginBottom: '1rem' }}>Featured In This Story</p>
                        <a href="/shop" className={styles.shopLink}>The Executive Collection &rarr;</a>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default Journal;
