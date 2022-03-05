import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import AddNewBtn from "./AddNewBtn";
import TodoItem from "./TodoItem";


const TodoTable = (props) => {
  return (
    <Container className="">
      <Row className="mb-2 justify-content-center">
        <Col className="col-lg-9 col-md-9 col-sm-12 col-12">
          <ul className="list-group">
            <li className="list-group-item bg-secondary text-light">
              <input type="checkbox" disabled="disabled" checked /> Add Todos
              here...
            </li>
            <div className="list-header">
              {/* {dynamic li's go here} */}
              <TodoItem />

            </div>

            <AddNewBtn />
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default TodoTable;
