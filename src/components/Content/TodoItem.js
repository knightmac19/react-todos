import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

import "./TodoItem.css";

const TodoItem = (props) => {
  const [checkbox, setCheckbox] = useState(props.completed);
  const [textDecoration, setTextDecoration] = useState("");
  const [displayTrashBtn, setDisplayTrashBtn] = useState("hidden");
  const [itemBackground, setItemBackground] = useState("");
  const [priority, setPriority] = useState(props.priority);

  const checkboxChangeHandler = (e) => {
    if (!checkbox) {
      setCheckbox(true);
      props.updateOneChecked(props.id);
      setTextDecoration("line-through");
      setDisplayTrashBtn("");
    } else {
      setCheckbox(false);
      props.updateOneChecked(props.id);
      setTextDecoration("");
      setDisplayTrashBtn("hidden");
    }
  };

  const priorityChangeHandler = (e) => {
    if (priority === "Lo") {
      setPriority("Med");
    }
    if (priority === "Med") {
      setPriority("Hi");
    }
    if (priority === "Hi") {
      setPriority("Lo");
    }
    props.togglePriority(props.id);
  };

  useEffect(() => {
    if (checkbox) {
      setTextDecoration("line-through");
      setDisplayTrashBtn("");
    }
    updatePriority(props.priority);
  }, [priority]);

  const trashCanClicked = (e) => {
    props.clearOneHandler(props.id);
  };

  const updatePriority = (val) => {
    if (val === "Lo") {
      setItemBackground("linear-gradient(to right, gray, #b0bac2)");
    } else if (val === "Med") {
      setItemBackground("linear-gradient(to right, #155fbf, #b0bac2)");
    } else {
      setItemBackground("linear-gradient(to right, #BF7515, #b0bac2)");
    }
  };

  return (
    <li
      id={props.id}
      className="list-group-item "
      style={{
        overflow: "hidden",
        margin: "10px",
        background: itemBackground,
        borderRadius: "5px",
        border: "0.5px solid black",
        boxShadow: "-5px 5px 5px black",
        paddingRight:'5px',
        paddingLeft:'5px',
      }}
    >
      <Button
        type="button"
        variant="secondary"
        className="clear-this-btn float-start m-1"
        style={{
          padding:'5px'
        }}
        // style={{ visibility: displayTrashBtn }}
        // onClick={trashCanClicked}
      >
        <FontAwesomeIcon
          className="clear-this-icon fa-lg"
          aria-hidden="true"
          icon={faPencil}
        />
      </Button>
      <Button
        type="button"
        variant="danger"
        className="clear-this-btn float-start m-1"
        style={{
          padding:'5px',
          visibility: displayTrashBtn
        }}
        
        onClick={trashCanClicked}
      >
        <FontAwesomeIcon
          className="clear-this-icon fa-lg"
          aria-hidden="true"
          icon={faTrashCan}
        />
      </Button>
      {/* <input
        className="my-checkbox m-1"
        type="checkbox"
        checked={checkbox}
        onChange={checkboxChangeHandler}
      />{" "} */}
      <label
        style={{
          textDecorationLine: textDecoration,
          textDecorationStyle: "solid",
          textDecorationColor: "#BF7515",
          textDecorationThickness: "4px",
          paddingTop: '10px',
          paddingRight: '95px'
        }}
        onClick={checkboxChangeHandler}
      >
        <h5
          style={{
            fontWeight: "bold",
            color: "#000000",
            opacity: "1",
            
          }}
          
        >
          {props.text}
        </h5>
      </label>
      <Button
        variant="dark"
        style={{
          backgroundColor: "#434656",
          borderStyle: "solid",
          borderColor: "#434656",
          marginTop:'5px',
          padding:'5px'
        }}
        className="float-end"
        onClick={priorityChangeHandler}
      >
        {priority}
      </Button>
    </li>
  );
};

export default TodoItem;
