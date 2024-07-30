import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Login from "./pages/Login";

const App: React.FC = () => {
  return (
    <Router>
      <MainRoutes />
    </Router>
  );
};

const MainRoutes: React.FC = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <div className={`w-full flex flex-col gap-[20px] ${!isLoginPage ? 'max-w-[1720px] p-[20px]' : ''}`}>
      {(!isLoginPage) ? <Navbar/>: null}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </div>
  );
};

export default App;
