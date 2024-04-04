import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const hiddenArticlesSlice = createSlice({
  name: "hiddenArticles",
  initialState,
  reducers: {
    addHiddenArticle: (state, action) => {
      state.value.push(action.payload);
    },
    removeAllHiddenArticle: (state) => {
      state.value = [];
    },
  },
});

export const { addHiddenArticle, removeHiddenArticle, removeAllHiddenArticle } =
  hiddenArticlesSlice.actions;
export default hiddenArticlesSlice.reducer;
