import "./App.css";
import Navbar from "./components/NavBar";
import StudentTable from "./components/StudentTable";
// eslint-disable-next-line no-unused-vars
import StudentDetail from "./components/StudentDetail";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <StudentDetail
        student={{
          student_id: 2,
          student_class: "CD456",
          student_name: "Jane Smith",
          student_email: "jane@example.com",
          student_address: "456 Avenue",
        }}
      /> */}
      <StudentTable />
    </div>
  );
}

export default App;
