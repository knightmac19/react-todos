import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import AddNewBtn from "./AddNewBtn";
import TodoItem from "./TodoItem";
import InputForm from "./InputForm";

const TodoTable = (props) => {
  const [enteredTodo, setEnteredTodo] = useState("");

  const todoChangeHandler = (e) => {
    setEnteredTodo(e.target.value);
  };

  const enterListener = (e) => {
    if (e.key === "Enter") {
      setEnteredTodo(e.target.value);
      saveModalHandler();
    }
  };

  const saveModalHandler = (e) => {
    const newTodo = {
      id: Math.random().toString(),
      text: enteredTodo,
      completed: false,
      priority: "Low",
    };

    props.addTodoDataHandler(newTodo);
  };

  return (
    <Container style={{ marginBottom: "80px" }} className="">
      <Row className="mb-2 justify-content-center">
        <Col className="col-lg-9 col-md-9 col-sm-12 col-12">
          <ul className="list-group">
            <li
              style={{
                backgroundColor: "#434656",
                borderRadius: "5px",
                borderStyle: "hidden",
              }}
              className="list-group-item text-light"
            >
              {/* <h3>Add Todos here...</h3> */}
              <InputForm
                todoChangeHandler={todoChangeHandler}
                enterListener={enterListener}
                saveModalHandler={saveModalHandler}
              />
            </li>
            <div className="list-header">
              {props.items.map((todo) => (
                <TodoItem
                  key={todo.id}
                  id={todo.id}
                  text={todo.text}
                  completed={todo.completed}
                  priority={todo.priority}
                  clearOneHandler={props.clearOneHandler}
                  updateOneChecked={props.updateOneChecked}
                  togglePriority={props.togglePriority}
                />
              ))}
            </div>

            {/* <AddNewBtn openModalHandler={props.openModalHandler} /> */}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default TodoTable;
