import { Routes, Route } from "react-router-dom";
import Auth from "./components/auth/Auth";
import GlobalStyles from "./container/material/Global-Style";

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <p>hi</p>
      <Routes>
        <Route path="/" element={<Auth/>} />
      </Routes>
    </div>
  );
}

export default App;
