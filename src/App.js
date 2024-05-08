import logo from './hero.jpg';
import styles from './App.module.css';

function App() {
  return (
    <div className="App">
      <div className={styles.logo}>Tidy Toys</div>
      <header className={styles.appHeader}>
        <div  className={styles.hero}><img src={logo} alt="Child playing on his own with montessori toys" /></div>

        <h1>The Eco-Friendly Toy Rotation Service for Busy Moms</h1>
      </header>
      <main>
        <section>
          <h2>About Tidy Toys</h2>
        Tidy Toys is more than just a toy rotation service – it's a lifeline for busy moms like you. We understand the mental load of juggling family, work, and household responsibilities. That's why we're here to lighten your load by providing a sustainable, convenient, and family-centric toy delivery service.
      </section>
          <section>
            <h2>Our Mission</h2>
        Sustainability: We prioritize the planet by offering eco-friendly toys made from sustainable materials. Reduce waste and inspire eco-consciousness in your little ones from an early age.
Family Well-being: Foster precious moments with your family without the clutter. Our carefully curated toys promote creativity, learning, and imagination, enhancing your child's development and strengthening family bonds.
Convenience: Say goodbye to toy shopping stress. With Tidy Toys, simply choose a subscription plan, and we'll handle the rest. Enjoy hassle-free delivery and easy returns, freeing up time for what matters most – quality time with your loved ones.
      </section>
          <section>
            <h2>How It Works</h2>
        Choose the plan that fits your family's needs and schedule:

Starter: Perfect for trying out our service. Receive a curated selection of toys every month.
Essential: Ideal for ongoing toy rotation. Enjoy a variety of toys delivered bi-weekly.
Premium: For ultimate convenience and variety. Receive weekly toy deliveries tailored to your preferences.
      </section>
          <section>
            <h2>Why Choose Tidy Toys</h2>
        Lighten Your Mental Load: Let us handle the toy rotation so you can focus on what truly matters – your family's well-being.
Quality Assurance: Rest easy knowing that each toy is thoroughly cleaned, sanitized, and inspected before delivery.
Community Support: Join our community of like-minded moms who understand the challenges of modern parenting. Share tips, advice, and support on your journey.
Dedicated Customer Service: Our friendly support team is here to assist you with any questions or concerns, ensuring a seamless experience every step of the way.
      </section>
      <section><h2>Join the Tidy Toys Community Today!</h2>
        Simplify playtime, prioritize sustainability, and reclaim precious moments with your family. Subscribe to Tidy Toys now and experience the joy of hassle-free, eco-friendly playtime delivered straight to your doorstep.
      </section>
      </main>
    </div>
  );
}

export default App;
