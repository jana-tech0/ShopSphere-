import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About Ecom"}>
      <div className="container mt-5 py-4">
        <div className="row contactus">
          <div className="col-md-12">
            <h2 className="mb-3 text-primary">About Our Store</h2>
            <p className="text-dark fw-light">
              Welcome to <strong>ShopNova</strong>, your trusted destination for premium products
              at unbeatable prices. We believe shopping should be effortless, exciting,
              and rewarding. That's why we bring you a seamless online shopping experience
              with a diverse collection of high-quality products.
            </p>
            <h4 className="mt-4 text-secondary">Why Shop With Us?</h4>
            <ul className="list-unstyled text-muted">
              <li>✔ Curated selection of top-quality products.</li>
              <li>✔ Fast and secure checkout process.</li>
              <li>✔ Excellent customer service and easy returns.</li>
              <li>✔ Regular discounts and exclusive deals.</li>
            </ul>
            <p className="text-muted mt-3">
              Whether you're shopping for fashion, electronics, or home essentials,
              we've got you covered. Enjoy a hassle-free shopping experience today!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
