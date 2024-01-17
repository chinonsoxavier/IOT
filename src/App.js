import "./App.css";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import VerifyOTP from "./Pages/VerifyOTP";
import { UserContext, UserProvider } from "./context/context";
import { useState } from "react";
import { useEffect } from "react";
import Home from "./Pages/Home";
import ResetPassword from "./Pages/ResetPassword";
import { ToastContainer } from "react-toastify";
import UsersList from "./Pages/UsersList";


function App() {
  const [user, setUser] = useState({
    email: null,
    accessToken: sessionStorage.getItem("accessToken") || null,
  });

  const dispatchUserEvent = (actionType, payload) => {
    switch (actionType) {
      case "Register":
        setUser({
          email: payload.email,
        });
        break;
      case "Login":
        setUser({
          accessToken: payload.accessToken,
        });
      default:
        break;
    }
  };

  const navigate = useNavigate();
  useEffect(() => {
    // user.email ? navigate('/verify-otp'):navigate('/register')
  }, [user]);

  return (
    <UserContext.Provider value={{ user, dispatchUserEvent }}>
      {/* <BrowserRouter className="App"> */}
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={true}
        pauseOnFocusLoss={true}
        draggable
        pauseOnHover
        theme="light"
        rtl={false}
        fontSize="2px"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/users-list" element={<UsersList />} />
        <Route path="/otp-verification" element={<VerifyOTP />} />
      </Routes>
      {/* </BrowserRouter> */}
    </UserContext.Provider>
  );
}

export default App;
