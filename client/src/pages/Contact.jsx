import React from 'react'
import Layout from '../components/Layout/Layout'

const Contact = () => {
  return (
    <Layout title={'Contact us'}>
       <div className="contact-container">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Reach out to us for any queries or support.</p>

        <div className="contact-info">
          <p><strong>Email:</strong> support@trendora.com</p>
          <p><strong>Phone:</strong> +123 456 7890</p>
          <p><strong>Address:</strong> 123 Fashion Street, New York, USA</p>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </Layout>
  )
}

export default Contact