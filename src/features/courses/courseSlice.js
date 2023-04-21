import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 0,
  size: 0,
  enrolled: {
    student_id: "",
  },
  queryText: "",
  categories: [],
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    coursePagination: (state, action) => {
      state.page = action.payload.page;
      state.size = action.payload.size;
    },
    courseFilter: (state, action) => {
      if (!state.enrolled.student_id) {
        state.enrolled.student_id = action.payload.enrolled;
      } else {
        state.enrolled.student_id = "";
      }
    },
    categorySearch: (state, action) => {
      const category = action.payload.category;
      if (state.categories.indexOf(category) === -1) {
        state.categories = [...state.categories, category];
      } else {
        state.categories = state.categories.filter((c) => c !== category);
      }
    },
    courseSearch: (state, action) => {
      state.queryText = action.payload.queryText;
    },
  },
});
export default courseSlice.reducer;
export const { coursePagination, courseFilter, courseSearch, categorySearch } =
  courseSlice.actions;
