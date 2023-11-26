import { createSlice } from "@reduxjs/toolkit";

const studentDetailSlice = createSlice({
  name: "studentDetail",
  initialState: {
    student: {},
  },
  reducers: {
    postStudentDetail: (state, action) => {
      return { student: action.payload };
    },
    deleteStudentDetail: (state) => {
      return {};
    },
  },
});

// Action creators are generated for each case reducer function
export const { postStudentDetail, deleteStudentDetail } =
  studentDetailSlice.actions;

export default studentDetailSlice.reducer;
