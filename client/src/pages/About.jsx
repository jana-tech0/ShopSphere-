import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <Layout title={"About us -Ecommerce"}>
        <div className="about-container">
        <h1>About Us</h1>
        <p>Welcome to Trendora, your one-stop shop for the latest fashion trends and high-quality products.</p>
        <p>We are dedicated to providing the best shopping experience with secure transactions and fast delivery.</p>
        <h3>Why Choose Us?</h3>
        <ul>
          <li>✔ High-Quality Products</li>
          <li>✔ Fast & Secure Delivery</li>
          <li>✔ 24/7 Customer Support</li>
          <li>✔ Easy Returns & Refunds</li>
        </ul>
      </div>
    </Layout>
  )
}

export default About