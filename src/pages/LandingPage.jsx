import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
//import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';


function LandingPage() {
  return (
    <div>
      <Jumbotron className="bg-transparent jumbotron-fluid p-0">
        <Container fluid={true}>
          <Row className="justify-content-center py-5">
            <Col className="text-center" md={8} sm={12}>
              <h1 className="display-1 font-weight-bolder">Metrics</h1>
              <Button className="" variant="primary" size="lg" href="/login">Login</Button>
              <Button variant="primary" size="lg" href="/register">Register</Button>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Container fluid={true}>
        <Row className="justify-content-center py-5">
          <Col md={8} sm={12}>
            <h2>What is Metrics?</h2>
            <p>This is an in-depth description of what the metrics app does</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default LandingPage;
