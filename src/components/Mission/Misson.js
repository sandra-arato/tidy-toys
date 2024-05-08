import React from 'react';
import styles from './Mission.module.css';

function Mission() {
  return (
    <section className={styles.mission}>
      <h2>Our Mission</h2>
      <ul>
        <li><span>Sustainability</span> We prioritize the planet by offering eco-friendly toys made from sustainable materials. Reduce waste and inspire eco-consciousness in your little ones from an early age.</li>
        <li><span>Family Well-being</span> Foster precious moments with your family without the clutter. Our carefully curated toys promote creativity, learning, and imagination, enhancing your child's development and strengthening family bonds.</li>
        <li><span>Convenience</span> Say goodbye to toy shopping stress. With Tidy Toys, simply choose a subscription plan, and we'll handle the rest. Enjoy hassle-free delivery and easy returns, freeing up time for what matters most – quality time with your loved ones.</li>
      </ul>
        </section>
  );
}

export default Mission;