import React from 'react';
import styles from './About.module.css'

import haba from '../../resources/haba.png';
import djeco from '../../resources/djeco.png';
import janod from '../../resources/janod.png';
import lego from '../../resources/lego.png';
import melissa from '../../resources/melissa.png';
import mushie from '../../resources/mushie.png';
import hape from '../../resources/hape.png';
function About() {
  return (
    <section>
      <h2>About Tidy Toys</h2>
      <p> At <span className={styles.logo}>tidytoys</span>, we understand the challenges of managing toy clutter while keeping your little ones entertained. That's why we've created a hassle-free solution to ensure endless fun without the mess.
      </p>
      <h3>Curating Toy Boxes With Premium Brands</h3>
      <div>
      <img src={haba} alt="Haba" className={styles.brand} />
        <img src={djeco} alt="djeco" className={styles.brand} />
      <img src={lego} alt="lego" className={styles.brand} />
      <img src={janod} alt="janod" className={styles.brand} />
      <img src={melissa} alt="Melissa & Doug" className={styles.brand} />
        <img src={mushie} alt="mushie" className={styles.brand} />
        <img src={hape} alt="Hape" className={styles.brand} />
      </div>

    </section>
  );
}

export default About;