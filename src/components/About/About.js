import React from 'react';
import styles from './About.module.css'
function About() {
  return (
    <section>
      <h2>About Tidy Toys</h2>
      <p> At <span className={styles.logo}>tidytoys</span>, we understand the challenges of managing toy clutter while keeping your little ones entertained. That's why we've created a hassle-free solution to ensure endless fun without the mess.
      </p> </section>
  );
}

export default About;