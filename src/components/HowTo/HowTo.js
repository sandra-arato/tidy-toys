import React from 'react';
import styles from './HowTo.module.css';

const Plan = ({ title, description, price, link, sale }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      <span>Get 30% off from your subscription during the first two months* with the promo code EARLYBIRD! * Limited to the first 100 customers.</span>
      <p className={styles.cardFooter}>
        <a href={link+'?prefilled_promo_code=EARLYBIRD'}>Get my box for <span>{price}</span> <b>{sale}</b></a>
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
          <Plan
            title="Weekly"
            description="For ultimate convenience and variety. Receive weekly 4-5 toys deliveries tailored to your preferences."
            price="$34.99/month"
            sale="$24.49/month"
            link="https://buy.stripe.com/bIY02Od527SE5B67sy" />
        </li>
        <li>
          <Plan
            title="Fortnightly"
            description="Ideal for ongoing toy rotation. Enjoy a variety of 8-10 toys delivered fortnightly."
            price="$49.99/month"
            sale="$34.99/month"
            link="https://buy.stripe.com/14kaHs2qodcYd3ydQX" />
        </li>
        <li>
          <Plan
            title="Monthly"
            description="Perfect for trying out our service. Receive a curated selection of 8-10 toys every month."
            price="$84.99/month"
            sale="$59.49/month"
            link="https://buy.stripe.com/28obLw8OMb4Q8NiaEM" />
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