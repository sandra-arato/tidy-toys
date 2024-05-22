import React from 'react';
import styles from './HowTo.module.css';

const Plan = ({ title, description, price, link }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      <p className={styles.cardFooter}>
        <a href={link}>Get my box for {price}!</a>
      </p>
      
    </div>
  );

}

function HowTo() {
  return (
    <section className={styles.plans} id="plans">
      <h2>How It Works</h2>
      <p>Choose the plan that fits your family's needs and schedule:</p>
      <ul>
        <li>
          <Plan title="Monthly" description="Perfect for trying out our service. Receive a curated selection of 8-10 toys every month." price="$20.90/month" link="https://buy.stripe.com/aEU9Doe963CobZuaEH" />
        </li>
        <li>
          <Plan title="Fortnightly" description="Ideal for ongoing toy rotation. Enjoy a variety of 8-10 toys delivered fortnightly." price="$34.90/fortnight" link="https://buy.stripe.com/aEUcPAaWUeh2aVq3cg" /></li>
        <li>
          <Plan title="Weekly" description="For ultimate convenience and variety. Receive weekly 8-10 toy deliveries tailored to your preferences." price="$54.90/month" link="https://buy.stripe.com/7sIg1M4ywgpa5B64gl" />
        </li>
        {/* <li>
          <Plan title="Subscribe" description="Sign up for our Toy Rotation service." price="" /> </li>
        <li>
          <Plan title="Receive" description="Receive a curated selection of high-quality toys tailored to your child's age and interests.
" price="" />
        </li>
        <li><Plan title="Play" description="Enjoy weeks of fun with the toys delivered to your doorstep." price="" /></li>
        <li><Plan title="Return" description="Return: When it's time for a change, simply return the toys in the provided box." /></li>  
       */}
      </ul>
      </section>
  );
}

export default HowTo;