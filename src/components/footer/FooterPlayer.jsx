import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";

const audioList1 = [
  {
    name: "Test",
    singer: "Luis Fonsi",
    cover:
      "http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg",
    musicSrc:
      "https://p.scdn.co/mp3-preview/6be8eb12ff18ae09b7a6d38ff1e5327fd128a74e?cid=162b7dc01f3a4a2ca32ed3cec83d1e02",
  },
  {
    name: "Dorost Nemisham",
    singer: "Sirvan Khosravi",
    cover:
      "https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg",
    musicSrc:
      "https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3",
  },
];

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
