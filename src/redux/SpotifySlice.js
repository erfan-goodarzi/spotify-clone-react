import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: 'null',
  token: null,
};

export const SpotifySlice = createSlice({
  name: "spotify",
  initialState,
  reducers: {
    GetUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { GetUserInfo } = SpotifySlice.actions;

export default SpotifySlice.reducer;
