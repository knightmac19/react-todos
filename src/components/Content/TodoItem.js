import React from "react";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const TodoItem = (props) => {
  return (
    <li className="list-group-item " style={{ overflow: "hidden" }}>
      <input className="my-checkbox" type="checkbox" /> Make coffee{" "}
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
