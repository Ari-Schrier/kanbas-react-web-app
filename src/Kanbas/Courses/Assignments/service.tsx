import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
const ASSIGNMENTS_API = `${API_BASE}/api/assignments`;
const COURSES_API = `${API_BASE}/api/courses`;

export const updateAssignmentAsync = async (assignment:any) => {
  const response = await axios.
    put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
  return response.data;
};

export const findAssignmentsForCourse = async (courseId:any) => {
  const response = await axios
    .get(`${COURSES_API}/${courseId}/assignments`);
  return response.data;
};

export const deleteAssignmentAsync = async (aid:any) => {
    const response = await axios
      .delete(`${ASSIGNMENTS_API}/${aid}`);
    return response.data;
  };

export const createAssignment = async (courseId:any, module:any) => {
    // console.log("Debugging assignment creation");
    // console.log(`Course Id: ${courseId} Module:`);
    // console.log(module)
    const response = await axios.post(
      `${COURSES_API}/${courseId}/assignments`,
      module
    );
    return response.data;
    
  };