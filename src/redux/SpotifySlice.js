import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {
    name: null,
    img: null,
    title: null,
    followers: null,
  },
  token: null,
  setColor: null,
  getUserTopTrack: [],
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
    getUserTopTrack: (state, action) => {
      state.getUserTopTrack = action.payload;
    },
  },
});

export const { GetUserInfo, SetBgcolor, getUserTopTrack } =
  SpotifySlice.actions;

export default SpotifySlice.reducer;
