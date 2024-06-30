import React, { useState } from 'react';
import styles from './FAQ.module.css'

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqData = [
    {
      question: `1. How does Tidy Toys Co's rental service work?`,
      answer: `Tidy Toys Co offers toy rental subscriptions on weekly, fortnightly, and monthly bases. We deliver curated toy boxes to your specified address and collect them at the end of each rental period.`,
    },
    {
      question: `2. What are the subscription options available?`,
      answer: `You can choose from weekly, fortnightly, or monthly subscription plans, each including a selection of high-quality toys delivered to your door.`,
    },
    {
      question: `3. When are subscription fees charged?`,
      answer: `Subscription fees are charged in advance shortly after our weekly cut-off time, which is every Tuesday at 12:00pm AEST (Brisbane time).`,
    },
    {
      question: `4. When will my toy box be delivered?`,
      answer: `Toy boxes are typically delivered at the beginning of your rental term, either Friday evening or Saturday morning, depending on your delivery address. Please note that delivery schedules may occasionally vary.`,
    },
    {
      question: `5. What happens if I miss the collection of my toy box?`,
      answer: `If you miss the scheduled collection, a weekly surcharge of $25 will be applied for each week the box is not returned.`,
    },
    {
      question: `6. How should I care for the toys?`,
      answer: `Upon delivery, please inspect all toys for safety. Only toys suitable for your child's age and ability should be used independently. Follow manufacturer guidelines to ensure proper care and prevent damage.`,
    },
    {
      question: `7. What if a toy gets damaged?`,
      answer: `Customers are responsible for any damage beyond normal wear and tear. Charges for damaged toys will be assessed based on the extent of damage and the cost of repair or replacement.`,
    },
    {
      question: `8. What if a toy goes missing?`,
      answer: `You are responsible for the loss of toys. If a full box goes missing, you will be charged the replacement cost based on the retail price of the toys included. Occasional missing toys should be returned as soon as they are found to avoid additional charges.`,
    },
    {
      question: `9. Can I cancel my subscription?`,
      answer: `Yes, you can cancel your subscription at any time. To avoid charges for the upcoming term, cancellations must be made before the next billing cycle.`,
    },
    {
      question: `10. Do you offer refunds?`,
      answer: `Refunds are only provided if toys are found to be defective upon delivery and reported within 48 hours.`,
    },
    {
      question: `11. Who is responsible for the safety of the toys?`,
      answer: `Parents or guardians are responsible for ensuring the safety of children using our toys. Please inspect each toy for safety and suitability before allowing independent play.`,
    },
    {
      question: `12. What is Tidy Toys Co's liability for toy usage?`,
      answer: `Tidy Toys Co is not liable for any injuries, damages, or losses resulting from the use of rented toys. By using our service, you acknowledge and accept these terms.`,
    },
    {
      question: `13. How can I stay updated on changes to the Terms and Conditions?`,
      answer: `We reserve the right to amend these terms without prior notice. It is your responsibility to review them periodically for any updates. Continued use of our services after changes constitutes acceptance of the revised terms.`,
    },
    {
      question: `14. Can I change my subscription plan?`,
      answer: `Yes, you can change your subscription plan at any time. Please contact our customer support for assistance.`,
    },
    {
      question: `15. How do I return the toy box?`,
      answer: `To return the toy box, simply place all toys back in the box and place the box in the collection spot at your specified address. Our team will collect it at the end of the rental term.`,
    },
    {
      question: `16. Will I see the same toys again?`,
      answer: `We rotate our toy inventory regularly to ensure variety in each box. While you may see some toys again, we strive to provide new and exciting toys with each delivery.`,
    },
    {
      question: `17. What if I want to keep a toy from my rental box?`,
      answer: `If you wish to keep a toy, you can purchase it at a discounted price. Please contact our customer support for more information.`,
    },
    {
      question: `18. How do I update my delivery address?`,
      answer: `To update your delivery address, please message us on Facebook and Instagram.`,
    },
    {
      question: `19. Can I pause my subscription temporarily?`,
      answer: `Yes, you can pause your subscription temporarily. Please contact our customer support to arrange the suspension period.`,
    },
    {
      question: `20. How do I contact customer support?`,
      answer: `You can contact our customer support by messaging us on our Facebook page at Tidy Toys Co or via our Instagram account @tidytoysco. Our support team is available during business hours.`,
    }
    // Add more FAQ items here
  ];

  return (
    <section>
      <h2>Frequently Asked Questions</h2>
      <div>
        {faqData.map((item, index) => {
          const current = activeIndex === index;
          return (
            <div key={index} className={current ? styles.faqCurrent : styles.faqQuestion }>
            <div
              onClick={() => handleClick(index)}
              style={{ cursor: 'pointer' }}
            >
              {item.question}
            </div>
            {current&& <div className={styles.faqItem} >{item.answer}</div>}
          </div>)
        }
          
      )}
        </div>
      </section>
  );
};

export default FAQ;