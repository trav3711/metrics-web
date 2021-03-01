import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import AccountPage from './pages/AccountPage'
import Header from './components/Header'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.setcredentials = this.setcredentials.bind(this)
    this.state = {
      title: "Metrics",
      subtitle : "quantify your life",
      login : {
        title: "metrics Login"
      },
      user : {
        loggedIn: false,
        username: "",
        email: "",
        password: "",
        key: "",
        refresh : ""
      }
    }
  }

  setcredentials(props) {
    this.setState({
      user:{
        loggedIn: false,
        username: props.username,
        email: props.email,
        password: props.password,
        key: props.accessKey,
        refresh : props.refreshKey
      }
    })
    console.log("Entered credentials function")
  }

  render() {
    return (
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
    )
  }
}

export default App;
