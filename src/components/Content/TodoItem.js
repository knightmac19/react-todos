import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import "./TodoItem.css";

const TodoItem = (props) => {
  const [checkbox, setCheckbox] = useState(props.completed);
  const [textDecoration, setTextDecoration] = useState("");
  const [displayTrashBtn, setDisplayTrashBtn] = useState("hidden");

  const checkboxChangeHandler = (e) => {
    if (!checkbox) {
      setCheckbox(true);
      setTextDecoration("line-through");
      setDisplayTrashBtn("");
    } else {
      setCheckbox(false);
      setTextDecoration("");
      setDisplayTrashBtn("hidden");
    }
  };

  useEffect(() => {
    if (checkbox) {
      setTextDecoration("line-through");
      setDisplayTrashBtn("");
    }
  }, []);

  const trashCanClicked = (e) => {
    // console.log(props.id)
    props.clearOneHandler(props.id);
  };

  return (
    <li
      id={props.id}
      className="list-group-item "
      style={{
        overflow: "hidden",
        // backgroundColor: props.priority
      }}
    >
      <Button
        type="button"
        variant="secondary"
        className="clear-this-btn float-start m-1"
        style={{ visibility: displayTrashBtn }}
        onClick={trashCanClicked}
      >
        <FontAwesomeIcon
          className="clear-this-icon fa-lg"
          aria-hidden="true"
          icon={faTrashCan}
        />
      </Button>
      <input
        className="my-checkbox m-1"
        type="checkbox"
        checked={checkbox}
        onChange={checkboxChangeHandler}
      />{" "}
      <label
        style={{
          textDecorationLine: textDecoration,
          textDecorationStyle: "solid",
          textDecorationColor: "#BF7515",
          textDecorationThickness: "4px",
        }}
      >
        <h5>{props.text}</h5>
      </label>
    </li>
  );
};

export default TodoItem;
