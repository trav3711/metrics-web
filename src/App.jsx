import React, { useEffect, useState, useContext } from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import AccountPage from './pages/AccountPage'
import Header from './components/Header'
import { SessionContext, getSessionCookie, setSessionCookie } from "./components/session.ts";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Metrics",
      subtitle : "quantify your life",
      login : {
        title: "metrics Login"
      }
    }
  }

  render() {
    const [session, setSession] = useState(getSessionCookie());
    useEffect(
      () => {
        setSession(getSessionCookie);
      }
    )
    return (
      <SessionContext.Provider value={session}>
        <Router >
          <Header />
          <Container>
            <Route path="/" exact render={() => <LandingPage />} />
            <Route exact path="/login">
              {this.state.user.loggedIn ? <Redirect
                to={{
                  pathname: "/dashboard/:userName",
                  state: this.state.user
                }}
              /> : <LoginPage onClick={this.setcredentials}/>}
            </Route>
            <Route path="/register" render={() => <RegisterPage />} />
          </Container>
        </Router>
      </SessionContext.Provider>
    )
  }
}

export default App;
