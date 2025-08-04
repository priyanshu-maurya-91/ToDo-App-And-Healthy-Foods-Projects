import { createSlice } from "@reduxjs/toolkit";

const reactSlicer = createSlice({
  name: "userSlice",
  initialState: { user: null },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = reactSlicer.actions;
export default reactSlicer.reducer;
