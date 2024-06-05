import React, { useState } from 'react';
import oneYearWeekly from '../../resources/1.png';
import twoYearWeekly from '../../resources/2yoweekly.png';
import threeYearWeekly from '../../resources/3yoweekly.png';
import fourYearWeekly from '../../resources/4yoweekly.png';
import oneYearFortnightly from '../../resources/1yofortnighly.png';
import twoYearFortnightly from '../../resources/2yofortnightly.png';
import threeYearFortnightly from '../../resources/3yofortnightly.png';
import fourYearFortnightly from '../../resources/4yofortnighyl.png';
import styles from './Products.module.css'

const Product = ({ image, title, period }) => {
  return (<div className={styles.product}>
    <span className={styles.period}>{period}</span>
    <img className={styles.img} src={image} alt={title} />
    <span className={styles.age}>{title}</span>
  </div>);
}

const Products = () => {
  // const [currentImage, setCurrentImage] = useState(0);
  return (
    <section>
      <h2>Example Boxes</h2>
      <p>Choose the box that suits your child's age and your family's needs.</p>
      <div className={styles.products}>
            <Product image={oneYearWeekly} title="1 year old +" period="weekly" />
            <Product image={twoYearWeekly} title="2 year old +" period="weekly" />
            <Product image={threeYearWeekly} title="3 year old +" period="weekly" />
            <Product image={fourYearWeekly} title="4 year old +" period="weekly" />
            <Product image={oneYearFortnightly} title="1 year old +" period="fortnightly/monthly"  />
            <Product image={twoYearFortnightly} title="2 year old +" period="fortnightly/monthly"  />
            <Product image={threeYearFortnightly} title="3 year old +" period="fortnightly/monthly" />
            <Product image={fourYearFortnightly} title="4 year old +" period="fortnightly/monthly" />

      </div>
    </section>
  );
};

export default Products;