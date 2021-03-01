import React, { useState } from "react";
//import {Recirect} from 'react-router-dom'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/form.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [registered, setRegistered] = useState(false);

  function validateForm() {
    //console.log("validated!")
    return (email.length > 0 && password.length > 0);
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:8000/auth/register/', {
     method: 'post',
     headers: {'Content-Type':'application/json'},
     body: JSON.stringify({
      "username": userName,
      "first_name": firstName,
      "last_name": lastName,
      "email": email,
      "password": password,
      "password2": password2
      })
    })
    .then((response) => response.json())
     .then((responseJson) => {
      if(responseJson) {
        setRegistered(true);
      }
     })
     .catch((error) => {
       console.error(error);
     });
  }

  return (
    <div className="Register">
      <h1>Sign Up!</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlid="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            autoFocus
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlid="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            autoFocus
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="password2">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Sign Up!
        </Button>
      </Form>
    </div>
  );
}
