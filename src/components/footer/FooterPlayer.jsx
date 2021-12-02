import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";

const options = {
  defaultPlayIndex: 1,

  theme: "dark",

  bounds: "body",

  quietUpdate: false,

  clearPriorAudioLists: true,

  autoPlayInitLoadPlayList: false,

  preload: true,

  glassBg: false,

  remember: false,

  remove: true,

  defaultPosition: {
    right: 100,
    bottom: 120,
  },

  defaultPlayMode: "order",

  mode: "full",

  once: false,

  autoPlay: true,

  toggleMode: true,

  showMiniModeCover: true,

  showMiniProcessBar: false,

  drag: true,

  seeked: true,

  showMediaSession: true,

  showProgressLoadBar: true,

  showPlay: true,

  showReload: true,

  showDownload: true,

  showPlayMode: true,

  showThemeSwitch: false,

  showLyric: true,

  showDestroy: false,

  extendsContent: null,

  defaultVolume: 1,

  playModeShowTime: 600,

  loadAudioErrorPlayNext: true,

  autoHiddenCover: false,

  spaceBar: true,

  responsive: true,

  mobileMediaQuery: "(max-width: 1024px)",

  volumeFade: {
    fadeIn: 1000,
    fadeOut: 1000,
  },

  restartCurrentOnPrev: false,

  // https://github.com/SortableJS/Sortable#options
  sortableOptions: {},

  // custom music player root node
  getContainer() {
    return document.body;
  },

  onBeforeDestroy(currentPlayId, audioLists, audioInfo) {
    return new Promise((resolve, reject) => {
      // your custom validate
      // eslint-disable-next-line no-alert
      if (window.confirm("Are you confirm destroy the player?")) {
        // if resolve, player destroyed
        resolve();
      } else {
        // if reject, skip.
        reject();
      }
    });
  },
};

const Footerplayer = () => {
  const song = useSelector((state) => state.spotify.playSong);

  return (
    <>
      <Box>
        <ReactJkMusicPlayer {...options} audioLists={song} />
      </Box>
    </>
  );
};

export default Footerplayer;
