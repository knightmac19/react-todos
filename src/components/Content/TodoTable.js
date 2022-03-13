import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import AddNewBtn from "./AddNewBtn";
import TodoItem from "./TodoItem";

const TodoTable = (props) => {
  // console.log('in TodoTable')
  // console.log(props);
  return (
    <Container className="">
      <Row className="mb-2 justify-content-center">
        <Col className="col-lg-9 col-md-9 col-sm-12 col-12">
          <ul className="list-group">
            <li className="list-group-item bg-secondary text-light">
              <h3>Add Todos here...</h3>
              
              
            </li>
            <div className="list-header">
              {/* {dynamic li's go here} */}
              
              {props.items.map((todo) => (
                <TodoItem 
                  key={todo.id}
                  text={todo.text}
                  completed={todo.completed}
                  priority={todo.priority}
                />
              ))}
            </div>

            <AddNewBtn openModalHandler={props.openModalHandler} />
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default TodoTable;
