import React from 'react';
import styles from './Features.module.css';
import spinner from '../../resources/luis-arias-unsplash.jpg'
import birthday from '../../resources/nathan-dumlao-unsplash.jpg';
function Features() {
  return (
    <section>
      <h2>More Ways To Play...</h2>
      <p>Explore other ways to enjoy the subscription boxes at a lower price to you.</p>
      <div className={styles.alternatives}>
        <h3>Trade in your toys</h3>
        <div>
          <img src={spinner} alt="Trade in your toys" className={styles.grayish} />
          <p>Once you've been us for at least 2 months, you'll be able to trade in your existing toys for a subscription credit. Each qualifying toy means $10 off from your monthly subscription fee, and non-qualifying toys will either be donated to charity or returned to you.</p>
        </div>
       
      </div>
      <div className={styles.alternatives}>
        <h3>Gift a subscription</h3>
        <div>
          <p>Whether there is an upcoming birthday party, or a baby shower of a friend expecting their second or third baby, the a TidyToys subscription is a great gift for eco-conscious families! Contact us to for a unique payment link for store credit so that friends & family can chip in for store credit.
            <a href="https://buy.stripe.com/14k7vg8OMc8Ud3ydR2">Weekly Rotation Box for 10 weeks for <span> $149.95</span></a>
            <a href="https://buy.stripe.com/7sIcPA5CA0qc8NidR3">Fortnightly Rotation Box for 10 weeks for <span> $149.95</span></a>
          </p>
          <img src={birthday} alt="Gift a subscription" className={styles.light} />
        </div>

      </div>
      <h2>Why Choose Tidy Toys</h2>
      <ol>
        <li>Lighten Your Mental Load: Let us handle the toy rotation so you can focus on what truly matters – your family's well-being.</li>
        <li>Quality Assurance: Rest easy knowing that each toy is thoroughly cleaned, sanitized, and inspected before delivery.</li>
        <li>Community Support: Join our community of like-minded moms who understand the challenges of modern parenting. Share tips, advice, and support on your journey.</li>
        <li>Dedicated Customer Service: Our friendly support team is here to assist you with any questions or concerns, ensuring a seamless experience every step of the way.</li>
      </ol>


      </section>
  );
}

export default Features;