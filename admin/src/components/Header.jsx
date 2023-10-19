import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  console.log(authState);

  const handleLogout = async () => {
    await dispatch(logout());
  };

  return (
    <header className="p-4 bg-indigo-600 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
        {authState.user && (
          <div className="flex items-center">
            <span className="mr-4">{authState.user.username}</span>
            <button
              onClick={handleLogout}
              className="text-white bg-red-500 px-4 py-2 rounded"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
