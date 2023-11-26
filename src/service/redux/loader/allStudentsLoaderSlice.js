import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { allStudentsLoader } from "../../api/apiLoader";
import counterSlice from "../counter/counterSlice";
// omit imports and state

const initialState = {
  students: [],
  status: "idle",
  error: null,
};

export const fetchAllStudent = createAsyncThunk(
  "allStudentsLoader/fetchAllStudent",
  async () => {
    const response = await fetch(
      "https://t9wij3y8zl.execute-api.us-east-1.amazonaws.com/Prod/getAll"
    );
    return response.json();
  }
);

const allStudentsLoaderSlice = createSlice({
  name: "allStudentsLoader",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllStudent.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAllStudent.fulfilled, (state, action) => {
        state.students = action.payload.data;
        state.status = "success";
      });
  },
});
export const getAllStudents = (state) => state.allStudentsLoader.students;
export const getFetchAllStudentStatus = (state) =>
  state.allStudentsLoader.status;
export default allStudentsLoaderSlice.reducer;
export const { getStudentById } = allStudentsLoaderSlice.actions;
