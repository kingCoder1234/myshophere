import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/actions/userActions";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const UserForm = ({ showForm, setshowForm }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { name, email, mobile };
    dispatch(addUser(userData));
    setshowForm(!showForm);
    setName("");
    setEmail("");
    setMobile("");
  };

  return (
    <div
      style={{
        position: "absolute",
        top: 80,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: "9999",
        backgroundColor: "rgba(52, 52, 52, 0.9)",
        width: "80%",
        boxShadow:"3px 3px 5px 2px black"
      }}
    >
      <h3 className="text-center text-light py-3">
        Fill this form to continue
      </h3>
      <Form
        className="container py-5 text-light"
        onSubmit={handleSubmit}
        // style={{ width: "70%" }}
      >
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicMobile">
          <Form.Label>Your Mobile Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Your mobile number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default UserForm;
