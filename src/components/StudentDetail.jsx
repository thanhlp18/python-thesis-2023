import React from "react";

function StudentDetail({ student }) {
  return (
    <div className="container-sm mt-4">
      <div className="card-body text-start">
        <h5 className="card-title">Student Information</h5>
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
