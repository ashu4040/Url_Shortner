import React from "react";
import { Outlet, useNavigate } from "@tanstack/react-router";
import Navbar from "./components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./store/slice/authSlice";

const RootLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate({ to: "/" }); // 👈 Redirect immediately
  };

  return (
    <>
      <Navbar
        userName={user?.name || user?.email}
        isLoggedIn={isAuthenticated}
        onLogout={handleLogout}
      />
      <Outlet />
    </>
  );
};

export default RootLayout;
