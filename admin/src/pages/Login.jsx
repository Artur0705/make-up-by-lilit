import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../features/auth/authSlice";

const Auth = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    await dispatch(login(credentials));
  };

  const handleLogout = async () => {
    await dispatch(logout());
  };

  return (
    <div className="auth-container">
      {!authState.user ? (
        <div className="login-form">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={credentials.username}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleInputChange}
          />
          <button onClick={handleLogin} disabled={authState.isLoading}>
            Login
          </button>
        </div>
      ) : (
        <button onClick={handleLogout} disabled={authState.isLoading}>
          Logout
        </button>
      )}
    </div>
  );
};

export default Auth;
