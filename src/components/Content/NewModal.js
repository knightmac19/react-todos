import React from "react";
import { Modal, Button } from "react-bootstrap";
import TodoForm from "./TodoForm";

const NewModal = (props) => {
  
  
  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TodoForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleClose}>
            Add Todo
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default NewModal;
