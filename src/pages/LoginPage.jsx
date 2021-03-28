import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { setSessionCookie, getSessionCookie } from "../components/session.ts"
import "../styles/form.css";

function Login(props, { onClick }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [accessKey, setAccessKey] = useState("");
  const [refreshKey, setRefreshKey] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);


  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  function handleSubmit() {
    setLoading(true);

    fetch('http://mymetrics.app/auth/login/', {
     method: 'post',
     headers: {'Content-Type':'application/json'},
     body: JSON.stringify({
      "username": username,
      "password": password
      })
    })
    .then((response) => response.json())
     .then((responseJson) => {
       console.log(username);
       setAccessKey(responseJson.access);
       setRefreshKey(responseJson.refresh);
     })
     .catch((error) => {
       console.error(error);
     });

     setSessionCookie({ username, password, accessKey, refreshKey })
     setLoggedIn(true);
     setLoading(false);

  }

  return (
    <div className="Login">
      <h1>Sign In!</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg"
                type="submit"
                disabled={!validateForm()}
                >
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
