import courses from "../../Kanbas/Database/courses.json";
import { useParams, Navigate, Route, Routes, } from "react-router-dom";
import Modules from "./Modules";
import CourseNavigation from "./Navigation";
import Breadcrumbs from "./Breadcrumbs";
import Assignments from "./Assignments";
import Home from "./Home";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import "./index.css";

function Courses() {
  return (
    <div>
      
      <div className="text-danger wd-breadbox h3 px-3">
          <Breadcrumbs />
      </div>
      
      <hr className="m-0" />
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0 p-4"
          style={{ left: "320px", top: "50px" }} >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>}/>
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>

    </div>
  );
}
export default Courses;