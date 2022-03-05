import React from "react";
import "./App.css";

import Jumbotron from "./components/Layout/Jumbotron";
import Footer from "./components/Layout/Footer";
import { Container, Row, Col, Button } from "reactstrap";

const App = () => {

  const DUMMY_DATA =[
    { id: Math.random().toString(), text: 'organize office', completed: false, },
    { id: Math.random().toString(), text: 'pickup milk', completed: false, },
    { id: Math.random().toString(), text: 'go to gym', completed: false, },
    { id: Math.random().toString(), text: 'cook dinner', completed: false, },
  ];
  console.log(DUMMY_DATA);

  return (
    <div className="content-wrap">
      <Jumbotron />
      <Container className="d-flex flex-direction-row justify-content-end">
        <Row className="pt-0 pb-0 pl-0 p-2">
          <Button color="danger">Clear All</Button>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default App;
