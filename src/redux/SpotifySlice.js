import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {
    name: null,
    img: null,
    title: null,
    followers: null
  },
  token: null,
  setColor: null,
};

export const SpotifySlice = createSlice({
  name: "spotify",
  initialState,
  reducers: {
    GetUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    SetBgcolor: (state, action) => {
      state.setColor = action.payload;
    },
  },
});

export const { GetUserInfo,SetBgcolor } = SpotifySlice.actions;

export default SpotifySlice.reducer;
