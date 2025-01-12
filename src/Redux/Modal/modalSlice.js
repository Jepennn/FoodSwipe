import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarOpen: true,
  isCardFlipped: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    toggleCardFlip: (state) => {
      state.isCardFlipped = !state.isCardFlipped;
    },
  },
});

export const { toggleSidebar, toggleCardFlip } = modalSlice.actions;

export default modalSlice.reducer;
