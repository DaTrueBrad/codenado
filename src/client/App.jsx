import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Menu from "./components/Menu";
import { Navigate, Route, Routes } from "react-router-dom";
import Newsfeed from "./screens/Newsfeed";
import Leaderboard from "./screens/Leaderboard";
import Search from "./screens/Search";
import Create from "./screens/Create";
import Profile from "./screens/Profile";
import Auth from "./screens/Auth";
import { useContext } from "react";
import GlobalState from "./state/GlobalState";

function App() {
  const [count, setCount] = useState(0);

  const {state: {userId, token}} = useContext(GlobalState)
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Newsfeed />}/>
        <Route path="/leaderboard" element={<Leaderboard />}/>
        <Route path="/search" element={<Search />}/>
        <Route path="/create" element={token ? <Create /> : <Navigate to="/auth" />}/>
        <Route path="/profile" element={token ? <Profile /> : <Navigate to="/auth" />}/>
        <Route path="/auth" element={!token ? <Auth /> : <Navigate to="/" />} />
      </Routes>
      <Menu />
    </div>
  );
}

export default App;
