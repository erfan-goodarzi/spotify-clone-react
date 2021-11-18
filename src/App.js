import { Routes, Route } from "react-router-dom";
import Auth from "./components/auth/Auth";
import Header from "./components/Header/Header";
import GlobalStyles from "./container/material/Global-Style";
import { getTokenFromResponse } from "./container/config-spotify";
function App() {
  return (
    <div className="App">
      <GlobalStyles />
      {getTokenFromResponse().access_token ? (
        <Header />
      ) : (
        <Routes>
          <Route path="/" element={<Auth />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
