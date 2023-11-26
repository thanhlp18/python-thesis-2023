import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateNewStudentModal from "./CreateNewStudentModal";
import { useNavigate } from "react-router";
import { updateStudent } from "../service/api/apiLoader";

function StudentDetail() {
  const navigate = useNavigate();
  const student = useSelector((state) => state.studentDetail.student);
  const handleBack = () => {
    navigate("/");
  };
  const handleEdit = (formData) => {
    updateStudent(formData);
  };
  const dispatch = useDispatch();
  // const student = useLoaderData().data;
  return (
    <div className="container-sm mt-4">
      <div className="card-body text-start">
        <div className="d-flex justify-content-between mb-3">
          <h5 className="card-title">Student Information</h5>
          <span>
            <button onClick={handleBack} className="mr-4">
              Back
            </button>
            <CreateNewStudentModal
              buttonText={"edit"}
              student={student}
              handleEdit={handleEdit}
            />
          </span>
        </div>

        <ul className="list-group text-left">
          <li className="list-group-item ">
            <strong>Student ID:</strong>{" "}
            <span className="text-muted">{student.student_id}</span>
          </li>
          <li className="list-group-item">
            <strong>Student Class:</strong>{" "}
            <span className="text-muted">{student.student_class}</span>
          </li>
          <li className="list-group-item">
            <strong>Student Name:</strong>{" "}
            <span className="text-muted">{student.student_name}</span>
          </li>
          <li className="list-group-item">
            <strong>Student Age:</strong>{" "}
            <span className="text-muted">{student.student_age}</span>
          </li>
          <li className="list-group-item">
            <strong>Student Gender:</strong>{" "}
            <span className="text-muted">
              {student.student_gender == 1 ? "Male" : "Female"}
            </span>
          </li>
          <li className="list-group-item">
            <strong>Student Email:</strong>{" "}
            <span className="text-muted">{student.student_email}</span>
          </li>
          <li className="list-group-item">
            <strong>Student Address:</strong>{" "}
            <span className="text-muted">{student.student_address}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default StudentDetail;
