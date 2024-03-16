import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import img from "./myPic.JPG";

const Contact = () => {
  const googleLink =
    "https://www.google.com/search?sca_esv=cc7d94c02e4b9cbf&rlz=1C1VDKB_enIN990IN990&sxsrf=ACQVn091mUSs9HrayqyLlsGBEzexFzXoOQ:1710313037503&q=Sahiram+Dukiya&stick=H4sIAAAAAAAAAOOwesSozi3w8sc9YSm5SWtOXmOU4BLzSsxLLEl0LkpNLEkNTk0sSs5wTixK4VnEyhecmJFZlJir4FKanVmZCAAdHMb2PQAAAA&sa=X&ved=2ahUKEwi197fI1PCEAxX7cGwGHTr6CDgQnJoFegQIHRAG&biw=1536&bih=695&dpr=1.25";
  return (
    <Container className="py-5">
      <Row>
        <Col md={6}>
          <h2>Contact Us</h2>
          <p>
            Have a question or need assistance? Please don't hesitate to contact
            us using the form below. We're here to help!
          </p>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                required={true}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                required={true}
              />
            </Form.Group>

            <Form.Group controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter your message"
              />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={true}>
              Submit
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          <img src={img} alt="Contact Us" className="img-fluid" />
          <div>
            <h3 className="text-center">Sahiram Dukiya </h3>
            <p className="text-center">
              <i className="fa fa-envelope pr-2"></i> sahiramdukiya76@gmail.com
            </p>
            <p className="text-center">
              <i className="fa fa-phone pr-2"></i> +919876543210
            </p>
          </div>
          <div
            className="d-flex justify-content-between"
            style={{ fontSize: "30px" }}
          >
            <a href={googleLink} target="_blank" rel="noopener noreferrer">
              <i className="text-dark fa fa-google"></i>
            </a>
            <a
              href={"https://www.facebook.com/sahiram.dukiya.547"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="text-dark fa fa-facebook"></i>
            </a>
            <a
              href={"https://www.youtube.com/@sahiram2087"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="text-dark fa fa-youtube"></i>
            </a>
            <a
              href={"https://www.linkedin.com/in/sahiram-dukiya-b62992214"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="text-dark fa fa-linkedin"></i>
            </a>
            <a
              href={"https://www.instagram.com/the_blue_spects_guy_23"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="text-dark fa fa-instagram"></i>
            </a>
            <a
              href={
                "https://x.com/SahiramDu14155?t=hjJ6_NtUDFxiC3IcQy0VrA&s=09"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="text-dark fa fa-twitter"></i>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
