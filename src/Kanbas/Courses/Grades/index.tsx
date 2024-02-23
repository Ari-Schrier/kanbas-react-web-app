import assignments from "../../Database/assignments.json"
import enrollments from "../../Database/enrollments.json";
import grades from "../../Database/grades.json";
import users from "../../Database/users.json";
import { useParams } from "react-router-dom";
import { FaCog, FaFileImport, FaFileExport, FaFilter } from "react-icons/fa";


function Grades() {
  const { courseId } = useParams();
  const as = assignments.filter((assignment) => assignment.course === courseId);
  const es = enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div>
      <h1>Grades</h1>

      <div className="row">
        <div className="col-12">
          <button type="button" className="btn btn-light float-end m-1"><FaCog /> </button>
          <button type="button" className="btn btn-light float-end m-1"><FaFileExport /> Export</button>
          <button type="button" className="btn btn-light float-end m-1"><FaFileImport /> Import</button>
        </div>
      </div>
      <div className="row m-2">
        <div className="col-6">
          <label htmlFor="wd-studentname"><h4>Student Names</h4></label>
        </div>
        <div className="col-6">
          <label htmlFor="wd-assignment-name"><h4>Assignment Names</h4></label>
        </div>
      </div>
      <div className="row m-2">
        <div className="col-6">
          <select className="form-control" id="wd-studentname">
            <option disabled selected><i className="fa fa-search"></i> Search Students</option>
            {es.map((enrollment) => {
              const user = users.find((user) => user._id === enrollment.user)
              return (<option>{user?.firstName} {user?.lastName}</option>)
              })}
          </select>
        </div>
        <div className="col-6">
          <select className="form-control" id="wd-wd-assignment-name">
            <option disabled selected><i className="fa fa-search"></i> Search Assignments</option>
            {as.map((assignment) => <option>{assignment.title}</option>)}
          </select>
        </div>
      </div>

      <div className="row m-1">
        <div className="col-12">
          <button type="button" className="btn btn-secondary btn-md"><FaFilter /> Apply Filters </button>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table">
          <thead>
            <th>Student Name</th>
            {as.map((assignment) => (<th>{assignment.title}</th>))}
          </thead>
          <tbody>
            {es.map((enrollment) => {
              const user = users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                   <td>{user?.firstName} {user?.lastName}</td>
                   {as.map((assignment) => {
                      const grade = grades.find(
                      (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                      


                      return (<td>{grade?.grade || 0}</td>);})}
                      
                </tr>);
            })}
          </tbody></table>
      </div></div>);
}
export default Grades;
