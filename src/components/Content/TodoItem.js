import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

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
    if (priority === "Low") {
      setPriority("Medium");
    }
    if (priority === "Medium") {
      setPriority("High");
    }
    if (priority === "High") {
      setPriority("Low");
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
    if (val === "Low") {
      setItemBackground("linear-gradient(to right, gray, #b0bac2)");
    } else if (val === "Medium") {
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
      }}
    >
      <Button
        type="button"
        variant="danger"
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
