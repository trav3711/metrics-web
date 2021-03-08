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
  const [loading, setLoading] = usState(false);


  function validateForm() {
    //console.log("validated!")
    return username.length > 0 && password.length > 0;
  }

  function handleSubmit() {
    event.preventDefault();
    setLoading(true);

    fetch('http://localhost:8000/auth/login/', {
     method: 'post',
     headers: {'Content-Type':'application/json'},
     body: JSON.stringify({
      "username": username,
      "password": password
      })
    })
    .then((response) => response.json())
     .then((responseJson) => {
       setAccessKey(responseJson.access);
       setRefreshKey(responseJson.refresh);
     })
     .catch((error) => {
       console.error(error);
     });

     setSessionCookie({ username, password, accessKey, refreshKey })
     setLoading(false);

  }

  return (
    <div className="Login">
      <h1>Sign In!</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
        <Button block size="lg"
                type="submit"
                disabled={!validateForm()}
                onClick={props.onClick(username, password, accessKey, refreshKey)}
                >
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
