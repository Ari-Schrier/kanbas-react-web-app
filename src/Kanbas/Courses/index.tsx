import { useParams, Navigate, Route, Routes, } from "react-router-dom";
import Modules from "./Modules";
import CourseNavigation from "./Navigation";
import Breadcrumbs from "./Breadcrumbs";
import Assignments from "./Assignments";
import Home from "./Home";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import "./index.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Courses() {
  const { courseId } = useParams();
  const COURSES_API = "https://kanbas-node-server-app-dvdv.onrender.com/api/courses";
  const [course, setCourse] = useState();
  const findCourseById = async (courseId?: string) => {
    const response = await axios.get(
      `${COURSES_API}/${courseId}`
    );
    console.log(response.data);
    setCourse(response.data);
  };
  useEffect(() => {
    console.log(courseId);
    findCourseById(courseId);
  }, [courseId]);

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