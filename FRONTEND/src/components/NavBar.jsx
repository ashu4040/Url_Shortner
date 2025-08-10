import React from "react";
import { Link } from "@tanstack/react-router";

const Navbar = ({ userName, onLogout, isLoggedIn }) => {
  return (
    <nav className=" shadow-xl backdrop-blur-2xl">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left side - App Name */}
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-white">
              URL Shortener
            </Link>
          </div>

          {/* Right side - Auth buttons */}
          <div className="flex items-center">
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">
                  Welcome, {userName || "User"}
                </span>
                <button
                  onClick={onLogout}
                  className="bg-[#A40743]  text-white px-4 py-2 rounded-md text-sm font-medium cursor-pointer"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/auth"
                className="bg-[#020B59]  text-white px-4 py-2 rounded-md text-sm font-medium cursor-pointer"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
