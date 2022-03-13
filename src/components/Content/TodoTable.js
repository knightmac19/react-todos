import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AddNewBtn from "./AddNewBtn";
import TodoItem from "./TodoItem";

const TodoTable = (props) => {
  // console.log('in TodoTable')
  // console.log(props);
  return (
    <Container style={{ marginBottom: "80px" }} className="">
      <Row className="mb-2 justify-content-center">
        <Col className="col-lg-9 col-md-9 col-sm-12 col-12">
          <ul className="list-group">
            <li style={{
              backgroundColor: '#434656',
              borderRadius: '5px',
              borderStyle: 'hidden'
            }} className="list-group-item text-light">
              <h3>Add Todos here...</h3>
            </li>
            <div className="list-header">
              {/* {dynamic li's go here} */}

              {props.items.map((todo) => (
                <TodoItem
                  key={todo.id}
                  id={todo.id}
                  text={todo.text}
                  completed={todo.completed}
                  priority={todo.priority}
                  clearOneHandler={props.clearOneHandler}
                  updateOneChecked={props.updateOneChecked}
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
