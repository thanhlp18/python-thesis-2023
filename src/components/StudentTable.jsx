import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateNewStudentModal from "./CreateNewStudentModal";
import SearchBar from "./SearchBar";
import { deleteStudent } from "../service/api/apiLoader";

function StudentTable({ handleSearch, studentList, handleRowClick }) {
  const dispatch = useDispatch();
  console.log(useSelector((state) => state));
  const handleDeleteStudent = (id) => {
    deleteStudent(id);
  };
  return (
    <div className="container">
      <h2 className="mt-4 mb-2">Student List</h2>
      <div class="d-flex justify-content-center align-items-center mb-3">
        <SearchBar handleSearch={handleSearch} className="flex-grow-1 mr-2" />
        <CreateNewStudentModal />
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Student Class</th>
            <th>Student Name</th>
            <th>Student Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(studentList)
            ? studentList.map((student, idx) => (
                <tr key={idx}>
                  <td onClick={() => handleRowClick(student)}>
                    {student.student_id}
                  </td>
                  <td onClick={() => handleRowClick(student)}>
                    {student.student_class}
                  </td>
                  <td onClick={() => handleRowClick(student)}>
                    {student.student_name}
                  </td>
                  <td onClick={() => handleRowClick(student)}>
                    {student.student_email}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteStudent(student.student_id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-person-x-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))
            : ""}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;
