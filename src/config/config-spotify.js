export const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const CLIENT_ID = "8fd5520eb42045058d625433f33d4221";
const REDIRECT_UIL = "http://localhost:3000/profile";

const scopes = [
  "streaming",
  "app-remote-control", 
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-top-read",
  "user-read-email",
  "user-read-private",
  "user-library-modify",
  "user-library-read",
];

export const getTokenFromResponse = () => {
  return window.location.hash
    .substring(1)
    .split("&")   
    .reduce((acc, cur) => {
      const [key, value] = cur.split("=");
      acc[key] = decodeURIComponent(value);
      return acc;
    }, {});
};

export const accessUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_UIL}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

// accessUrl = "https://accounts.spotify.com/authorize?client_id=8fd5520eb42045058d625433f33d4221&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"
