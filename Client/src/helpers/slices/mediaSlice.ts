import { createSlice } from "@reduxjs/toolkit";

const mediaSlice = createSlice({
  name: "media",
  initialState: [] as any[],
  reducers: {
    addMedia: (state, action) => action.payload,
    pushMedia: (state, action) => {
      if (state) {
        state.push(action.payload);
      }
    },
    updatedMediaById: (state, action) => {
      const index = state.findIndex((media) => media.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    removeMedia: () => [],
  },
});

export const { addMedia, pushMedia, removeMedia, updatedMediaById } =
  mediaSlice.actions;
export default mediaSlice.reducer;
