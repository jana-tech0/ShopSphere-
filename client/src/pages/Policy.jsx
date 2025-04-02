import React from 'react'
import Layout from '../components/Layout/Layout'

const Policy = () => {
  return (
    <Layout title={'privacy policy'}>
        <div className="privacy-container">
        <h1>Privacy Policy</h1>
        <p>At Trendora, we are committed to protecting your privacy and ensuring that your personal data is handled securely.</p>

        <h2>1. Information We Collect</h2>
        <p>We collect information such as your name, email, phone number, and address when you register or make a purchase.</p>

        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>✔ To process your orders and transactions.</li>
          <li>✔ To improve our services and user experience.</li>
          <li>✔ To send updates and promotional emails (you can opt-out anytime).</li>
        </ul>

        <h2>3. Data Protection</h2>
        <p>We implement security measures to protect your personal data from unauthorized access.</p>

        <h2>4. Third-Party Services</h2>
        <p>We may share your data with trusted third-party services for payment processing and delivery.</p>

        <h2>5. Your Rights</h2>
        <p>You have the right to request access, correction, or deletion of your personal data.</p>

        <h2>6. Contact Us</h2>
        <p>If you have any questions about our Privacy Policy, feel free to contact us at <strong>support@trendora.com</strong>.</p>
      </div>
    </Layout>
  )
}

export default Policy