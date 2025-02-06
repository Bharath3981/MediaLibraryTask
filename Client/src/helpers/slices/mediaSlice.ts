import { createSlice } from "@reduxjs/toolkit";

const mediaSlice = createSlice({
  name: "media",
  initialState: null,
  reducers: {
    addMedia: (state, action) => action.payload,
    removeMedia: () => null,
  },
});

export const { addMedia, removeMedia } = mediaSlice.actions;
export default mediaSlice.reducer;
