import React, {useState} from "react";
import { Link } from "react-router-dom";
import  courseDB  from "../Database/courses.json";
function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void; }) {
      return (
    <div className="p-4">
      <h1>Dashboard</h1>              <hr />
      <h2>Course Constructor</h2> <hr />
      <div className="row">
        <div className="col-6">
          <label htmlFor="courseNameEntry">Course Name</label>
          <input
            id="courseNameEntry"
            className="form-control"
            value={course.name}
            onChange={(e) => setCourse({...course, name:e.target.value})}
          />
        </div>
        <div className="col-6">
        <label htmlFor="courseNumEntry">Course Number</label>
          <input
            id="courseNumEntry"
            className="form-control"
            value={course.number}
            onChange={(e) => setCourse({...course, number:e.target.value})}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <label htmlFor="courseImgEntry">Image</label>
          <input
            id="courseImgEntry"
            className="form-control"
            value={course.image}
            onChange={(e) => setCourse({...course, image:e.target.value})}
          />
        </div>
        <div className="col-3">
        <label htmlFor="courseSDentry">Start Date</label>
          <input
            id="courseSDentry"
            className="form-control"
            type="date"
            value={course.startDate}
            onChange={(e) => setCourse({...course, startDate:e.target.value})}
          />
        </div>
        <div className="col-3">
        <label htmlFor="courseEDentry">End Date</label>
          <input
            id="courseEDentry"
            className="form-control"
            type="date"
            value={course.endDate}
            onChange={(e) => setCourse({...course, endDate:e.target.value})}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-6">
      <button onClick={addNewCourse} className="btn btn-success w-100" >
        Add
      </button>
        </div>
        <div className="col-6">
      <button onClick={updateCourse} className="btn btn-secondary w-100" >
        Update
      </button>
      </div>
      </div>
      <h2>Published Courses (12)</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img src={`/images/${course.image}`} className="card-img-top"
                     style={{ height: 150 }}/>
                <div className="card-body">
                  <div style={{height:100}}>
                    <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                      style={{ textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                      {course.name} </Link>
                    <p className="card-text">{course.number}</p>
                  </div>
                  <div className="flex">
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                    Go </Link>
                    <button onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }} className="btn btn-danger float-end">
                      Delete
                    </button>
                    <button onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                    }} className="btn btn-success float-end">
              Edit
            </button>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;

