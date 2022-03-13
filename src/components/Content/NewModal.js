import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import TodoForm from "./TodoForm";

const NewModal = (props) => {
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
      priority: "green",
    };

    console.log(newTodo);

    props.addTodoDataHandler(newTodo);

    // props.handleClose();
  };

  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TodoForm
            todoChangeHandler={todoChangeHandler}
            enterListener={enterListener}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveModalHandler}>
            Add Todo
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default NewModal;
