import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { FaCheckCircle, FaEllipsisV} from "react-icons/fa";
import assignments from "../../../Database/assignments.json";
function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = assignments.find(
    (assignment) => assignment._id === assignmentId);
  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
      <div>
        <span className="float-end text-success">Published <FaCheckCircle /><button type="button" className="btn btn-light border mx-2"><FaEllipsisV /></button></span>
        <br /><br />
        <hr />
      </div>
      <h4>Assignment Name</h4>
      <input value={assignment?.title}
             className="form-control mb-2" />
      <button onClick={handleSave} className="btn btn-success ms-2 float-end">
        Save
      </button>
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-danger float-end">
        Cancel
      </Link>
    </div>
  );
}
export default AssignmentEditor;