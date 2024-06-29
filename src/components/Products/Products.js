import React, { useState } from 'react';
import oneYearWeekly from '../../resources/1weekly.png';
import twoYearWeekly from '../../resources/2weekly.png';
import threeYearWeekly from '../../resources/3weekly.png';
import fourYearWeekly from '../../resources/4weekly.png';
import oneYearFortnightly from '../../resources/1fortnightly.png';
import twoYearFortnightly from '../../resources/2fortnightly.png';
import threeYearFortnightly from '../../resources/3fortnightly.png';
import fourYearFortnightly from '../../resources/4fortnightly.png';
import styles from './Products.module.css'

const Features = ({ features }) => {
  console.log(features)
  return (
    <ul className={styles.features}>
    {features.map((feature, index) => (
      < li key = { index } > { feature }</li>
    ))}
  </ul>)
}


const weeklyFeatures = [
  "4-5 diverse toys",
  "At least 1 premium brand toy",
  "Flat-rate delivery fee",
  "Option for free local pick up in Buderim (4556)",
]

const fortnightlyFeatures = [
  "8-10 diverse toys",
  "At least 2 premium brand toys",
  "Flat-rate delivery fee",
  "Option for free local pick up in Buderim (4556)",
]

const Plan = ({ title, description, price, link, sale, images, isWeekly }) => {
  return (
    <div className={styles.card}>
      <div className={isWeekly ? styles.productHeader : styles.productHeader+ ' ' + styles.green}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <span>package</span>
      </div>
      <Product images={images} />
      <p className={styles.cardDescription}>{description}</p>
      <Features features={isWeekly ? weeklyFeatures: fortnightlyFeatures} />
      <p className={styles.cardFooter}>
        <a href={link+'?prefilled_promo_code=EARLYBIRD'}>Get my box for <span>{price}</span> <b>{sale}</b></a>
      </p>
    </div>
  );

}

const Product = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const handleNext = () => {
    if (current === images.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current+1);
    }
  }

    const handlePrev = () => {
    if (current === 0) {
      setCurrent(images.length - 1);      
    } else {
      setCurrent(current-1);
    }
  }
  return (
    <div className={styles.product}>

      <button type="button" className={styles.prevButton} onClick={handlePrev}>ᐊ</button>
      {images.map((image, index) => {
        return (
          <img key={index} src={image} className={styles.image} alt="product" style={{ display: index === current ? 'block' : 'none' }} />
        )
      })}
      <button type="button" className={styles.nextButton} onClick={handleNext}>ᐅ</button>
      <span className={styles.caption}>{`${current+1}yo+ box example`}</span>
  </div>);
}


const Products = () => {
  return (
    <section>
      <h2>How It Works</h2>
      <p>Choose the box that suits your child's age and your family's needs.</p>
      <span>Get 30% off from your subscription during the first two months* with the promo code EARLYBIRD! * Limited to the first 100 customers.</span>
      <div className={styles.products}>
        <ul>
          <li>
            <Plan
              title="Weekly"
              description="Explore endless play with a curated mix of fun and learning for kids aged 1 and up delivered weekly!"
              price="$34.99/month"
              sale="$24.49/month"
              isWeekly
              images={[oneYearWeekly, twoYearWeekly, threeYearWeekly, fourYearWeekly]}
              link="https://buy.stripe.com/bIY02Od527SE5B67sy" />
          </li>
          <li>
            <Plan
              title="Fortnightly"
              description="Explore endless play with a curated mix of fun and learning for kids aged 1 and up delivered fortnightly!"
              price="$49.99/month"
              sale="$34.99/month"
              images={[oneYearFortnightly, twoYearFortnightly, threeYearFortnightly, fourYearFortnightly]}
              link="https://buy.stripe.com/14kaHs2qodcYd3ydQX" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Products;