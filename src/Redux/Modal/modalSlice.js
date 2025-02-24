import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarOpen: true,
  isCardFlipped: false,
  isLoginModalOpen: false,
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
    toggleLoginModal: (state) => {
      state.isLoginModalOpen = !state.isLoginModalOpen;
    },
  },
});

export const { toggleSidebar, toggleCardFlip, toggleLoginModal } =
  modalSlice.actions;

export default modalSlice.reducer;
