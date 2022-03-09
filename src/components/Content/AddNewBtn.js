import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AddNewBtn = (props) => {
  return (
    <Button
      onClick={props.openModalHandler}
      style={{
        backgroundColor: "#BF7515",
        fontSize: "1.17em",
        fontWeight: "bolder",
      }}
      className="mt-2 new-btn"
    >
      NEW <FontAwesomeIcon icon={faPlus} className="fa-lg " />
    </Button>
  );
};

export default AddNewBtn;
