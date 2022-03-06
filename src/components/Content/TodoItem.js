import React from "react";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const TodoItem = (props) => {
  console.log("in TodoItem");
  console.log(props);

  

  return (
    <li className="list-group-item " style={{ overflow: "hidden" }}>
      {/* <input
        className="my-checkbox"
        type="checkbox"
        checked={props.completed}
        onChange={""}
      />{" "} */}
      {props.text}{" "}
      <Button type="button" color="danger" className="clear-this-btn float-end">
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
