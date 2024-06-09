import React from 'react';
import styles from './Terms.module.css'

const Terms = () => {
  return (
    <main className={styles.terms}>
      <div>
        <h2><strong>Terms and Conditions</strong></h2>

        <p>These terms and conditions ("Terms") govern your use of the Tidy Toys provided by Tidy Toys Co. By accessing this website and using our services, you agree to be bound by these Terms. If you disagree with any part of these terms, please do not use our services.</p>

        <h3>1. Service Description</h3>

        <p>Tidy Toys Co provides a toy rental service where customers can choose from weekly, fortnightly, and monthly toy boxes. These boxes are delivered to the customer's address and collected at the end of the rental term. Our aim is to provide a variety of high-quality toys that foster learning and play.</p>

        <h3>2. Subscription and Fees</h3>

        <ul>
          <li><strong>Subscription Plans</strong>: Customers can subscribe to weekly, fortnightly, or monthly plans. Each plan includes a curated selection of toys delivered to the customer's address.</li>
          <li><strong>Fees</strong>: Subscription fees vary based on the chosen plan and are charged in advance. Fees are non-refundable except as specified in our cancellation policy.</li>
          <li><strong>Payment</strong>: Payments are processed securely via <a href="https://stripe.com/au" target="_blank" rel="noreferrer">Stripe</a>. By subscribing, you authorize us to charge your selected payment method for recurring fees.</li>
        </ul>

        <h3>3. Delivery and Collection</h3>

        <ul>
          <li><strong>Delivery</strong>: Toy boxes will be delivered to the customer's specified address at the beginning of each rental term.</li>
          <li><strong>Collection</strong>: Toy boxes will be collected at the end of the rental term. Customers must ensure that all toys and packaging are returned in good condition.</li>
          <li><strong>Missed Collections</strong>: If a collection is missed, the customer may incur additional fees.</li>
        </ul>

        <h3>4. Use and Care of Toys</h3>

        <ul>
          <li><strong>Inspection</strong>: Parents/guardians are responsible for inspecting all toys upon delivery. Only toys deemed safe and suitable for the child’s age and ability should be given for independent play.</li>
          <li><strong>Care</strong>: Toys should be used according to the manufacturer's guidelines. Do not allow children to misuse toys in a way that may cause damage or pose a safety risk.</li>
        </ul>

        <h3>5. Damage</h3>

        <ul>
          <li><strong>Responsibility</strong>: Customers are responsible for any damage beyond normal wear and tear to the toys.</li>
          <li><strong>Assessment and Charges</strong>: Fees for damaged toys will be assessed and charged based on each situation with the intent that the customer and company shall continue their agreement.</li>
        </ul>

        <h3>6. Loss</h3>

        <ul>
          <li><strong>Responsibility</strong>: Customers are responsible for the loss of toys.</li>
          <li><strong>Charges for Missing Toys</strong>: If a full box goes missing, the renter shall pay the replacement cost based on RRP prices of the toys included, and will be charged the full amount of the toys. Occasional missing toys are an acceptable risk as long as they are returned in a future box as soon as they are found. If up to 3 toys go missing during the loan period and are not returned in a reasonable time to the company, the company reserves the right to charge for the toys and cancel the agreement between the renter and the company.</li>
        </ul>

        <h3>7. Cancellation and Refund Policy</h3>

        <ul>
          <li><strong>Cancellation</strong>: Customers can cancel their subscription at any time. Cancellations must be made before the next billing cycle to avoid charges for the upcoming term.</li>
          <li><strong>Refunds</strong>: Refunds are only provided if toys are found to be defective upon delivery and reported within 48 hours.</li>
        </ul>

        <h3>8. Liability and Safety</h3>

        <ul>
          <li><strong>Parental Responsibility</strong>: The safety of children using our toys is the responsibility of the parent/guardian. Parents/guardians must inspect each toy for safety and suitability before allowing independent play. Any toy that poses a potential risk should be removed from the child's access.</li>
          <li><strong>Limitation of Liability</strong>: Tidy Toys Co is not liable for any injuries, damages, or losses resulting from the use of rented toys. By accepting our terms, you acknowledge that the use of rented toys is at your own risk and discretion.</li>
        </ul>

        <p>By using our service, you agree to abide by these Terms and Conditions. We reserve the right to amend these terms at any time without prior notice. It is your responsibility to review these terms periodically for changes. If you continue to use our services after any modifications to these terms, it constitutes your acceptance of those changes.</p>
      </div>
    </main>
  );
};

export default Terms;