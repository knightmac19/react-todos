import React from "react";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AddNewBtn = (props) => {
  // const []

  return (
    <Button style={{ backgroundColor: "#BF7515" }} className="mt-2 ">
      <h5>
        NEW <FontAwesomeIcon icon={faPlus} className="fa-lg " />
      </h5>
    </Button>
  );
};

export default AddNewBtn;
