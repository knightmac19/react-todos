import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const ClearAllBtn = (props) => {
  return (
    <Container className="d-flex flex-direction-row justify-content-end mb-2">
      <Row className="pt-0 pb-0 pl-0 p-2">
        <Button variant="danger" onClick={props.clearAllHandler}>
          <h5>
            Clear All{" "}
            <FontAwesomeIcon
              className="clear-this-icon fa-lg"
              aria-hidden="true"
              icon={faTrashCan}
            />
          </h5>
        </Button>
      </Row>
    </Container>
  );
};

export default ClearAllBtn;
