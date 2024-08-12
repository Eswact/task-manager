import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import { isAuthenticated } from "./services/authService";

const App: React.FC = () => {
  return (
    <Router>
      <MainRoutes />
    </Router>
  );
};

const ProtectedRoute = ({ element }: { element: React.ReactElement }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

const MainRoutes: React.FC = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isNotFoundPage = !['/login', '/tasks', '/'].includes(location.pathname);
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark');
  }

  return (
    <div className={`w-full flex flex-col gap-[20px] dark:text-white ${!isLoginPage && !isNotFoundPage ? 'w-[calc(100%-80px)] py-[20px] px-[50px] ml-[80px] md:w-full md:ml-0 md:px-[20px]' : ''}`}>
      {
        (!isLoginPage && !isNotFoundPage) ? (
          <>
            <Header />
            <Navbar />
          </>
        ) : null
      }
      <main className={`${!isLoginPage && !isNotFoundPage ? 'mt-[80px]' : ''}`}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedRoute element={<Home />} />} />
          <Route path="/tasks" element={<ProtectedRoute element={<Tasks />} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;