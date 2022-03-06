import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import "./TodoItem.css";

const TodoItem = (props) => {
  const [checkbox, setCheckbox] = useState(props.completed);
  const [textDecoration, setTextDecoration] = useState("");
  const [displayTrashBtn, setDisplayTrashBtn] = useState("none");

  // const

  // console.log("in TodoItem");
  // console.log(props);

  const checkboxChangeHandler = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.parentNode.id);

    if (!checkbox) {
      setCheckbox(true);
      setTextDecoration("line-through");
      setDisplayTrashBtn("");
    } else {
      setCheckbox(false);
      setTextDecoration("");
      setDisplayTrashBtn("none");
    }
  };

  useEffect(() => {
    if (checkbox) {
      setTextDecoration("line-through");
      setDisplayTrashBtn("");
    }
  }, []);

  return (
    <li
      id={props.id}
      className="list-group-item "
      style={{ overflow: "hidden" }}
    >
      <input
        className="my-checkbox"
        type="checkbox"
        checked={checkbox}
        onChange={checkboxChangeHandler}
      />{" "}
      <label
        style={{
          textDecorationLine: textDecoration,
          textDecorationStyle: "solid",
        }}
      >
        {props.text}{" "}
      </label>
      <Button
        type="button"
        color="danger"
        className="clear-this-btn float-end"
        style={{ display: displayTrashBtn }}
      >
        <FontAwesomeIcon
          className="clear-this-icon fa-lg"
          aria-hidden="true"
          icon={faTrashCan}
        />
      </Button>
    </li>
  );
};

export default TodoItem;
