import { configureStore } from '@reduxjs/toolkit';
import SpotifySlice from '../redux/SpotifySlice';

export const store = configureStore({
  reducer: {
    Spotify: SpotifySlice,
  },
});