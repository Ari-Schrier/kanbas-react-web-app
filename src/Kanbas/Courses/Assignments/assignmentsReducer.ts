import { createSlice } from "@reduxjs/toolkit";
import assignments from "../../Database/assignments.json";

const initialState = {
    assignments: assignments,
    assignment: { title: "New Assignment 123", description: "New Description", course:"NULL", "points":100, "due":"2020-06-06", "availablefrom":"2020-01-01", "availableuntil":"2020-12-12", "_id":"000"},
  };

  const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
      addAssignment: (state, action) => {
        state.assignments = [
          { ...action.payload, _id: new Date().getTime().toString() },
            ...state.assignments,
        ];
      },
      deleteAssignment: (state, action) => {
        if (window.confirm("Are you sure you want to do that, Dave?")===true){
        state.assignments = state.assignments.filter(
          (assigmnent:any) => assigmnent._id !== action.payload
        );}
      },
      setDefaultAssignment: (state) =>{state.assignment = initialState.assignment},
      updateAssignment: (state, action) => {
        state.assignments = state.assignments.map((assignment:any) => {
          if (assignment._id === action.payload._id) {
            return action.payload;
          } else {
            return assignment;
          }
        });
      },
      setAssignment: (state, action) => {
        state.assignment = action.payload;
      },
    },
  });
  
  
  export const { addAssignment, deleteAssignment,
    updateAssignment, setAssignment, setDefaultAssignment } = assignmentsSlice.actions;
  export default assignmentsSlice.reducer;