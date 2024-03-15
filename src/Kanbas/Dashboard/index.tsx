import React, {useState} from "react";
import { Link } from "react-router-dom";
import  courseDB  from "../Database/courses.json";
function Dashboard() {
  const [courses, setCourses] = useState(courseDB);
  const [draftCourse, updateNewCourse] = useState({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/images/reactjs.jpg"
  });
  const addNewCourse = () => {
    const newCourse = { ...draftCourse,
                        _id: new Date().getTime().toString() };
    setCourses([...courses, { ...draftCourse, ...newCourse }]);
  };
  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };


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
            value={draftCourse.name}
            onChange={(e) => updateNewCourse({...draftCourse, name:e.target.value})}
          />
        </div>
        <div className="col-6">
        <label htmlFor="courseNumEntry">Course Number</label>
          <input
            id="courseNumEntry"
            className="form-control"
            value={draftCourse.number}
            onChange={(e) => updateNewCourse({...draftCourse, number:e.target.value})}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <label htmlFor="courseImgEntry">Image</label>
          <input
            id="courseImgEntry"
            className="form-control"
            value={draftCourse.image}
            onChange={(e) => updateNewCourse({...draftCourse, image:e.target.value})}
          />
        </div>
        <div className="col-3">
        <label htmlFor="courseSDentry">Start Date</label>
          <input
            id="courseSDentry"
            className="form-control"
            type="date"
            value={draftCourse.startDate}
            onChange={(e) => updateNewCourse({...draftCourse, startDate:e.target.value})}
          />
        </div>
        <div className="col-3">
        <label htmlFor="courseEDentry">End Date</label>
          <input
            id="courseEDentry"
            className="form-control"
            type="date"
            value={draftCourse.endDate}
            onChange={(e) => updateNewCourse({...draftCourse, endDate:e.target.value})}
          />
        </div>
      </div>
      <div className="row">
      <button onClick={addNewCourse} className="btn btn-success" >
        Add
      </button>
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
                    <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-success float-end">
                    Edit </Link>
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

