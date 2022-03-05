import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

const ClearAllBtn = (props) => {
  return (
    <Container className="d-flex flex-direction-row justify-content-end mb-2">
      <Row className="pt-0 pb-0 pl-0 p-2">
        <Button color="danger">Clear All</Button>
      </Row>
    </Container>
  );
};

export default ClearAllBtn;
