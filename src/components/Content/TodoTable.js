import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import AddNewBtn from "./AddNewBtn";
import TodoItem from "./TodoItem";

const TodoTable = (props) => {
  console.log('in TodoTable')
  console.log(props);
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
              {/* <TodoItem
                key={props.items[0].id}
                text={props.items[0].text}
                completed={props.items[0].completed}
              />
              <TodoItem
                key={props.items[1].id}
                text={props.items[1].text}
                completed={props.items[1].completed}
              />
              <TodoItem
                key={props.items[2].id}
                text={props.items[2].text}
                completed={props.items[2].completed}
              />
              <TodoItem
                key={props.items[3].id}
                text={props.items[3].text}
                completed={props.items[3].completed}
              /> */}
              
              {props.items.map((todo) => (
                <TodoItem 
                  key={todo.id}
                  text={todo.text}
                  completed={todo.completed}
                />
              ))}
            </div>

            <AddNewBtn />
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default TodoTable;
