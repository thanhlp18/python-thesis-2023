import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import {
  addNewStudent,
  postDataToServer,
  postDataToServer1,
} from "../service/api/apiLoader";

const AddStudentForm = ({ handleClose, student, handleEdit }) => {
  const [formData, setFormData] = useState(
    student
      ? student
      : {
          student_name: "",
          student_age: "",
          student_email: "",
          student_address: "",
          student_class: "",
          student_gender: "",
        }
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleEdit) {
      handleEdit(formData);
    } else {
      postDataToServer(formData);
    }
    handleClose(true);
    window.location.reload();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formStudentName">
            <Form.Label>Student Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              name="student_name"
              value={formData.student_name}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formStudentAge">
            <Form.Label>Student Age</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter age"
              name="student_age"
              value={formData.student_age}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formStudentEmail">
            <Form.Label>Student Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="student_email"
              value={formData.student_email}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formStudentAddress">
            <Form.Label>Student Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter address"
              name="student_address"
              value={formData.student_address}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formStudentClass">
            <Form.Label>Student Class</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter class"
              name="student_class"
              value={formData.student_class}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formStudentGender">
            <Form.Label>Student Gender</Form.Label>
            <Form.Select
              name="student_gender"
              value={formData.student_gender}
              onChange={handleInputChange}
              required
              className="form-control"
            >
              <option value="">Select gender</option>
              <option value="1">Male</option>
              <option value="0">Female</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Button variant="secondary" onClick={handleClose} className="mr-4">
          Close
        </Button>
        <Button variant="primary" type="submit">
          Add Student
        </Button>
      </Form>
    </Container>
  );
};

export default AddStudentForm;
