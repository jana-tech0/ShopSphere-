import React from "react";
import Layout from "./../components/Layout/Layout";

const Contact = () => {
  return (
    <Layout title="Contact Us">
      <div className="container mt-5 py-4">
        <div className="row align-items-center contactus">
          <div className="col-md-6">
            <img
              src="/images/contactus.jpeg"
              alt="Contact Us"
              className="img-fluid rounded shadow-lg"
            />
          </div>
          <div className="col-md-6">
            <h2 className="bg-dark p-3 text-white text-center rounded">Get in Touch</h2>
            <p className="text-muted mt-3">
              Have any questions about our products or services? We’re here to help 24/7.
              Reach out to us through any of the channels below.
            </p>
            <div className="mt-4">
              <p><strong>Email:</strong> support@ecommerceapp.com</p>
              <p><strong>Phone:</strong> +1 234 567 890</p>
              <p><strong>Support:</strong> 1800-000-0000 (Toll-Free)</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;