import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import ClipLoader from "react-spinners/ClipLoader";
import Navbar from "../components/NavBar";
import StudentTable from "../components/StudentTable";
import { postStudentDetail } from "../service/redux/detailStudent";
import {
  fetchAllStudent,
  getAllStudents,
  getFetchAllStudentStatus,
} from "../service/redux/loader/allStudentsLoaderSlice";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
  position: "fixed",
  top: "calc(50% - 75px)",
  left: "calc(50% - 75px)",
  transform: "translate(-50%, -50%)",
};

function StudentList() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  const studentsList = useSelector(getAllStudents);
  const fetchStudentStatus = useSelector(getFetchAllStudentStatus);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchAllStudent());
  }, []);

  useEffect(() => {
    setFilteredStudents(studentsList);
    if (fetchStudentStatus === "success") {
      setLoading(false);
    }
  }, [studentsList]);

  const handleSearch = (strSearch) => {
    const filterStudent = studentsList.filter((ele) => {
      if (ele.student_id) {
        console.log(ele.student_id);
      }
      return (
        ele.student_id
          .toString()
          .includes(strSearch.toString().toLowerCase()) ||
        ele.student_class
          .toString()
          .toLowerCase()
          .includes(strSearch.toString().toLowerCase())
      );
    });
    setFilteredStudents(filterStudent);
  };

  function handleRowClick(student) {
    dispatch(postStudentDetail(student));
    navigate("/student/" + student.student_id);
  }
  return (
    <div>
      <Navbar />
      {loading ? (
        <ClipLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <StudentTable
          studentList={filteredStudents}
          handleSearch={handleSearch}
          handleRowClick={handleRowClick}
        />
      )}
    </div>
  );
}

export default StudentList;
