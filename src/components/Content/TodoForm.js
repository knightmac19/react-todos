import React, { useRef, useEffect } from "react";
import { Form } from "react-bootstrap";

const TodoForm = (props) => {
  const focusInput = useRef();

  useEffect(() => {
    if (focusInput.current) focusInput.current.focus();
  }, [focusInput]);

  return (
    <div>
      <Form.Group>
        <Form.Label>Todo Text</Form.Label>
        <Form.Control
          type="input"
          ref={focusInput}
          placeholder="Enter a todo..."
          onChange={props.todoChangeHandler}
          onKeyPress={props.enterListener}
        />
      </Form.Group>
    </div>
  );
};

export default TodoForm;
