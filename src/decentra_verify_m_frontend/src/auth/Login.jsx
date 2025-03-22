import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import "./login.css";

const Login = () => {
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div>
      <div className="main-logo">
        <h2>DecentraVerify</h2>
      </div>
      <div className="login-container">
        <div className="login">
          <h1>Profile Verifivation</h1>
          <button onClick={login}>Login with Internet Identity</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
