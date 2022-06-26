import React, { useRef, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const InputForm = (props) => {
  const focusInput = useRef();

  useEffect(() => {
    if (focusInput.current) focusInput.current.focus();
  }, [focusInput]);

  return (
    <div>
      <Form.Group
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          margin: "5px",
        }}
      >
        <Form.Control
          type="input"
          ref={focusInput}
          placeholder="Enter a todo..."
          value={props.value}
          onChange={props.todoChangeHandler}
          onKeyPress={props.enterListener}
        >

        </Form.Control>
        <Button
          style={{
            width: "25%",
            // flexDirection:"row",
            marginLeft: "15px",
            fontSize: "0.9em",
            fontWeight: "bolder",
          }}
          onClick={props.saveModalHandler}
        >
           <FontAwesomeIcon icon={faPlus} className="fa-lg" />
        </Button>
      </Form.Group>
    </div>
  );
};

export default InputForm;
