import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";

function StudentTable({ handleSearch, studentList, handleRowClick }) {
  console.log(useSelector((state) => state));

  return (
    <div className="container">
      <h2>Student Information</h2>
      <SearchBar handleSearch={handleSearch} />

      <table className="table table-hover">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Student Class</th>
            <th>Student Name</th>
            <th>Student Email</th>
            <th>Student Address</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(studentList)
            ? studentList.map((student, idx) => (
                <tr key={idx} onClick={() => handleRowClick(student)}>
                  <td>
                    <Link to={`student/${student.student_id?.toString()}`}>
                      {student.student_id}
                    </Link>
                  </td>
                  <td>{student.student_class}</td>
                  <td>{student.student_name}</td>
                  <td>{student.student_email}</td>
                  <td>{student.student_address}</td>
                </tr>
              ))
            : ""}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;
