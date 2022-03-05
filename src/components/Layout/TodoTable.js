import React from "react";
import { Container, Row, Col } from "reactstrap";

const TodoTable = (props) => {
  return (
    <Container className="mycont">
      <Row className="mb-2 justify-content-center">
        <Col className="col-lg-9 col-md-9 col-sm-12 col-12">
          <ul className="list-group">
            <li className="list-group-item bg-secondary text-light">
              <input type="checkbox" disabled="disabled" checked /> Add Todos
              here...
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default TodoTable;
