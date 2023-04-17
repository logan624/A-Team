import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemList from "./components/ItemList";
import AddItem from "./components/AddItem";
import HomePage from "./components/HomePage";
import ProfitEst from "./components/ProfitEst";
import LoginForm from "./components/LoginForm";
import SignUp from "./components/SignUp";
import AuthContext from "./components/AuthContext";
import AccountDetails from "./components/AcountDetails";
import EditAccountDetails from "./components/EditAccountDetails";
import Auction from "./components/Auction";
import ViewHistory from './components/ViewHistory';
import CurrentBids from './components/CurrentBids';
import History from './components/History';


function App() {
  const [username, setUsername] = useState(localStorage.getItem("username") || "");
  const [password, setPassword] = useState(localStorage.getItem("password") || "");

  useEffect(() => {
    if (username) {
      localStorage.setItem("username", username);
    } else {
      localStorage.removeItem("username");
    }
  }, [username]);

  useEffect(() => {
    if (password) {
      localStorage.setItem("password", password);
    } else {
      localStorage.removeItem("password");
    }
  }, [password]);
  const logout = () => {
    setUsername("");
    setPassword("");
  };
  
  return (
    <AuthContext.Provider value={{ username, setUsername, password, setPassword, logout }}>
      <BrowserRouter>
        <div className={"container"}>
          <Routes>
            <Route path="/" element={<HomePage key={username} />} />
            <Route path="/Login" element={<LoginForm key={username} />} />
            <Route path="/List" element={<ItemList key={username} />} />
            <Route path="/Add" element={<AddItem key={username} />} />
            <Route path="/Profits" element={<ProfitEst key={username} />} />
            <Route path="/Account" element={<AccountDetails key={username} />} />
            <Route path="/edit-account-details" element={<EditAccountDetails key={username} />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/auction" element={<Auction />} />
            <Route path="/view-history" element={<ViewHistory />} />
            <Route path="/transaction-history" element={<History />} />
            <Route path="/view-bids" element={<CurrentBids />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
