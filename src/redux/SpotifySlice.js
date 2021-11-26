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
  playSong: [],
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
    playSong: (state, action) => {
      state.playSong.splice(0, 0, action.payload);
    },
  },
});

export const { GetUserInfo, SetBgcolor, getUserTopTrack, playSong } =
  SpotifySlice.actions;

export default SpotifySlice.reducer;
