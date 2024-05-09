import React from 'react';
import styles from './HowTo.module.css';

const Plan = ({ title, description, price }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      <p  className={styles.cardFooter}>{price}</p>
    </div>
  );

}

function HowTo() {
  return (
    <section className={styles.plans}>
      <h2>How It Works</h2>
      <p>Choose the plan that fits your family's needs and schedule:</p>
      <ul>
        {/* <li>
          <Plan title="Starter" description="Perfect for trying out our service. Receive a curated selection of toys every month." price="$19.99/month" /> </li>
        <li>
          <Plan title="Essential" description="Ideal for ongoing toy rotation. Enjoy a variety of toys delivered bi-weekly." price="$29.99/month" /></li>
        <li>
          <Plan title="Premium" description="For ultimate convenience and variety. Receive weekly toy deliveries tailored to your preferences." price="$49.99/month" />
        </li> */}
        <li>
          <Plan title="Subscribe" description="Sign up for our Toy Rotation service." price="" /> </li>
        <li>
          <Plan title="Receive" description="Receive a curated selection of high-quality toys tailored to your child's age and interests.
" price="" />
        </li>
        <li><Plan title="Play" description="Enjoy weeks of fun with the toys delivered to your doorstep." price="" /></li>
        <li><Plan title="Return" description="Return: When it's time for a change, simply return the toys in the provided box." /></li>  
      
      </ul>
      </section>
  );
}

export default HowTo;