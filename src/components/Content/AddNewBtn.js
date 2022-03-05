import React from "react";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AddNewBtn = (props) => {
  return (
    <Button style={{ backgroundColor: "#BF7515" }} className="mt-2 ">
      <strong>
        NEW <FontAwesomeIcon icon={faPlus} className="fa-lg " />
      </strong>
    </Button>
  );
};

export default AddNewBtn;
