import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import { isAuthenticated } from "./services/authService";
import { closeNavbar } from "./scripts/common";

const App: React.FC = () => {
  return (
    <Router>
      <MainRoutes />
    </Router>
  );
};

const ProtectedRoute: React.FC<{ element: React.ReactElement }> = ({ element }) => {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const authenticated = await isAuthenticated();
      setIsAuth(authenticated);
    };

    checkAuth();
  }, []);

  if (isAuth === null) {
    return <div>Loading...</div>;
  }

  return isAuth ? element : <Navigate to="/login" />;
};

const MainRoutes: React.FC = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isNotFoundPage = !['/login', '/tasks', '/'].includes(location.pathname);
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark');
  }

  return (
    <div className={`w-full border-box flex flex-col gap-[20px] dark:text-white`}>
      {
        (!isLoginPage && !isNotFoundPage) ? (
          <>
            <Header />
            <Navbar />
          </>
        ) : null
      }
      <main className={`${!isLoginPage && !isNotFoundPage ? 'w-[calc(100%-80px)] py-[20px] px-[50px] mt-[80px] ml-[80px] md:w-full md:ml-0 md:px-[20px]' : ''}`}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedRoute element={<Home />} />} />
          <Route path="/tasks" element={<ProtectedRoute element={<Tasks />} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <div onClick={closeNavbar} id="blackBg" className="z-10 hidden fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)]"></div>
    </div>
  );
};

export default App;