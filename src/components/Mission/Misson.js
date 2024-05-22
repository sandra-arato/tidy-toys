import React from 'react';
import styles from './Mission.module.css';
import Sustainability from './sustainibility';
import Wellbeing from './wellbeing';
import Convenience from './convenience';

function Mission() {
  return (
    <section className={styles.mission}>
      <h2>Our Mission</h2>
      <ul>
        <li>
          <Sustainability className={styles.icon} />
          <span className={styles.feature}>
            <span>Sustainability</span>
            <span>We prioritize the planet by offering eco-friendly toys made from sustainable materials. Reduce waste and inspire eco-consciousness in your little ones from an early age.
            </span>
          </span>
            
        </li>
        <li>
          <Wellbeing className={styles.icon} />
          <span className={styles.feature}> <span>Family Well-being</span>
          Foster precious moments with your family without the clutter. Our carefully curated toys promote creativity, learning, and imagination, enhancing your child's development and strengthening family bonds.
        </span></li>
         <li>
          <Convenience className={styles.icon} />
          <span className={styles.feature}>
            <span>Convenience</span> Say goodbye to toy shopping stress. With Tidy Toys, simply choose a subscription plan, and we'll handle the rest. Enjoy hassle-free delivery and easy returns, freeing up time for what matters most – quality time with your loved ones.
          </span>
        </li>
      </ul>
        </section>
  );
}

export default Mission;