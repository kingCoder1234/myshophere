import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  const imgUrl =
    "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <Container className="py-5">
      <Row>
        <Col md={6}>
          <h2>About Us</h2>
          <p>
            Welcome to our online store! We are passionate about providing
            high-quality products and excellent customer service to our valued
            customers. Our mission is to offer a seamless shopping experience
            and ensure customer satisfaction with every purchase.
          </p>
          <p>
            At our store, you'll find a wide range of products including
            clothing, accessories, electronics, home goods, and much more. We
            carefully curate our selection to ensure that we offer the latest
            trends and best quality items at competitive prices.
          </p>
          <p>
            Customer satisfaction is our top priority, and we strive to exceed
            expectations with fast shipping, easy returns, and responsive
            customer support. Whether you're shopping for yourself or searching
            for the perfect gift, we're here to help you find exactly what you
            need.
          </p>
        </Col>
        <Col md={6}>
          <img src={imgUrl} alt="About Us" className="img-fluid p-5" />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
