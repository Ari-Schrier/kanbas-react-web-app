import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import assignments from "../../Database/assignments.json";
function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <>

        <div className="row">
            <div className="col-5">
                <input placeholder="Search for assignments" className="form-control w-50" />
            </div>
            <div className="col-3"></div>
            <div className="col-4">
                <button type="button" className="btn btn-light float-end"><i className="fa fa-ellipsis-v m-1"> </i></button>
                <button type="button" className="btn btn-danger float-end"><i className="fa fa-plus"></i> Assignment</button>
                <button type="button" className="btn btn-light float-end"><i className="fa fa-plus"></i> Group</button>
            </div>
        </div>

        <hr />
      
    <ul className="list-group">
        <li className="list-group-item bg-light rounded-0 px-0 pb-0">
          <div className="wd-assignment-header">
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
            <span className="float-end">
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item rounded-0 bg-white wd-assignment-border py-4">
                <FaEllipsisV className="me-2" />
                <Link className = "link-dark text-decoration-none font-weight-bold"
                   to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                <span className="float-end">
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
              </li>))}
          </ul>
        </li>
      </ul>
    </>
);}
export default Assignments;