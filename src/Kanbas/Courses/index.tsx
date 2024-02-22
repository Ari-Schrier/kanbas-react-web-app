import courses from "../../Kanbas/Database/courses.json";
import { useParams, Navigate, Route, Routes, } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
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
      <div className="row text-danger wd-breadbox h3">
        <span className="col-1 pr-0">
          <span className="float-end pr-0"><HiMiniBars3 /></span>
        </span>
        <span className="col-11">
          <Breadcrumbs />
        </span>
      </div>
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
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