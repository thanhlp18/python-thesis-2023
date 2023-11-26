import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import counterSlice from "../service/redux/counter/counterSlice";
import allStudentsLoaderSlice from "../service/redux/loader/allStudentsLoaderSlice";
import studentDetailSlice from "../service/redux/detailStudent";

export default configureStore({
  reducer: {
    counter: counterSlice,
    allStudentsLoader: allStudentsLoaderSlice,
    studentDetail: studentDetailSlice,
  },
});
