import { Routes, Route } from "react-router-dom";
import Auth from "./components/auth/Auth";
import SideBar from "./components/menu/SideBar";
import GlobalStyles from "./container/material/Global-Style";

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <SideBar/>
      <Routes>
        <Route path="/" element={<Auth/>} />
      </Routes>
    </div>
  );
}

export default App;
