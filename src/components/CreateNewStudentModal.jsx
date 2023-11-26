import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AddStudentForm from "./AddStudentForm";

function Example({ buttonText, student, handleEdit }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {buttonText ? buttonText : "Create a new student"}
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddStudentForm
            handleClose={handleClose}
            student={student}
            handleEdit={handleEdit}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;
