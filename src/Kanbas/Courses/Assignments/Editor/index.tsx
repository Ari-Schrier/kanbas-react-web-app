import {useParams, Link } from "react-router-dom";
import { FaCheckCircle, FaEllipsisV} from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  updateAssignment,
  setAssignment,
  } from "../assignmentsReducer";
import { KanbasState } from "../../../Store";
function AssignmentEditor() {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const assignment = useSelector((state:KanbasState)=>state.assignmentsReducer.assignment);

  return (
    <div>
      <div>
        <span className="float-end text-success">Published <FaCheckCircle /><button type="button" className="btn btn-light border mx-2"><FaEllipsisV /></button></span>
        <br /><br />
        <hr />
      </div>
      <label htmlFor="wd-assignment-title">Assignment Name:</label>
      <input value={assignment.title}
            id="wd-assignment-title"
            onChange={(e)=>dispatch(setAssignment({...assignment, title:e.target.value }))}
             className="form-control mb-2" />
      <label htmlFor="wd-assignment-description">Assignment Description:</label>
      <textarea value={assignment.description}
            rows={4}
            cols={6}
            placeholder="No description provided yet. Why not write one?"
            id="wd-assignment-description"
            onChange={(e)=>dispatch(setAssignment({...assignment, description:e.target.value }))}
            className="form-control mb-2" />

      <div className="row">
        <div className="col-4"><label htmlFor="wd-assignment-pts">Points:</label></div>
        <div className="col-8">
            <input value={assignment.points}
            placeholder="How many points is this assignment worth?"
            id="wd-assignment-pts"
            onChange={(e)=>dispatch(setAssignment({...assignment, points:e.target.value }))}
             className="form-control mb-2" />
        </div>
        <div className="col-4">Assign:</div>
        <div className="col-8">
          <div className="border rounded">
            <label htmlFor="wd-duedate">Due:</label><br />
            <input value={assignment.due}
            placeholder="When is this assignment due?"
            type="date"
            id="wd-duedate"
            onChange={(e)=>dispatch(setAssignment({...assignment, due:e.target.value }))}
             className="form-control mb-2" />
            <div className="row">
             <div className="col-6">
              <label htmlFor="wd-available">Available On:</label><br />
              <input value={assignment.due}
              type="date"
              id="wd-available"
              onChange={(e)=>dispatch(setAssignment({...assignment, availablefrom:e.target.value }))}
              className="form-control mb-2" />
             </div>

             <div className="col-6">
              <label htmlFor="wd-until">Available Until:</label><br />
              <input value={assignment.availableuntil}
              type="date"
              id="wd-until"
              onChange={(e)=>dispatch(setAssignment({...assignment, availableuntil:e.target.value }))}
              className="form-control mb-2" />
              </div>
             </div>
          </div>
        </div>
      </div>

      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-success ms-2 float-end"
            onClick={assignment.course!=courseId? ()=>dispatch(addAssignment({...assignment, course:courseId})):()=>dispatch(updateAssignment(assignment))}>
        Save
      </Link>
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-danger float-end">
        Cancel
      </Link>
    </div>
  );
}
export default AssignmentEditor;