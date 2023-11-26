import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
function StudentTable() {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  useEffect(() => {
    fetch("https://t9wij3y8zl.execute-api.us-east-1.amazonaws.com/Prod/getAll")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setStudents(res.data);
        setFilteredStudents(res.data);
      });
  }, []);

  const handleSearch = (strSearch) => {
    const filterStudent = students.filter((ele) => {
      console.log(ele);
      if (ele?.student_id) {
        console.log(ele.student_id);
      }
      return (
        ele.student_id.toString().includes(strSearch) ||
        ele.student_class.toString().toLowerCase().includes(strSearch)
      );
    });
    setFilteredStudents(filterStudent);
  };

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
          {filteredStudents.map((student, idx) => (
            <tr key={idx}>
              <td>{student.student_id}</td>
              <td>{student.student_class}</td>
              <td>{student.student_name}</td>
              <td>{student.student_email}</td>
              <td>{student.student_address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;
