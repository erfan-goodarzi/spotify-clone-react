import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {
    name: null,
    img: null,
    title: null,
    followers: null
  },
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
