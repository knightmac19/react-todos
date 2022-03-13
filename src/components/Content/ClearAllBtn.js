import React from "react";
import { Container, Row, Button } from "react-bootstrap";

const ClearAllBtn = (props) => {
  return (
    <Container className="d-flex flex-direction-row justify-content-end mb-2">
      <Row className="pt-0 pb-0 pl-0 p-2">
        <Button variant="danger" onClick={props.clearAllHandler}>
          <h5>Clear All</h5>
        </Button>
      </Row>
    </Container>
  );
};

export default ClearAllBtn;
