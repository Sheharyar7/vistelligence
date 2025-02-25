import React, { useState, useEffect, useRef } from "react";
import {
  FaCog,
  FaTwitch,
  FaRobot,
  FaPlusCircle,
  FaBus,
  FaUser,
  FaSignInAlt,
} from "react-icons/fa"; // Import icons
import { Link } from "react-router-dom";
import { AiFillCheckCircle } from "react-icons/ai";


const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isAuthenticated, setAuthenticated] = useState(false); // Track authentication
  const dropdownRef = useRef(null); // Ref to dropdown menu

  // Close the dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden sm:flex items-center justify-between  p-4 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 text-white shadow-lg">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold flex items-center">
            {/* Circular Icon */}
            <div className="flex items-center justify-center w-16 h-16 rounded-full overflow-hidden">
              <img
                src="images/vintageLogo.jpg"
                alt="Vintage Logo"
                className="object-cover w-full h-full"
              />
            </div>
            {/* Text */}
          </Link>
          <Link to="/shery">
          <AiFillCheckCircle />
</Link>
        </div>

        <ul className="flex gap-6 items-center mt-[14px]">
          <li className="mr-7 text-2xl hover:underline decoration-2 underline-offset-8">
            <Link
              to="/"
              className="flex items-center gap-2 hover:text-gray-300"
            >
              <FaRobot />
              <span className="mt-1">Vistelligence</span>
            </Link>
          </li>
          <li>
            <Link
              to="/community"
              className="flex items-center gap-2 hover:text-gray-300"
            >
              <FaTwitch />
              <span className="mt-1">Community Posts</span>
            </Link>
          </li>
          <li>
            <Link
              to="/create-post"
              className="flex items-center gap-2 hover:text-gray-300"
            >
              <FaPlusCircle />
              <span className="mt-1">Create Post</span>
            </Link>
          </li>
          <li>
            <Link
              to="/account"
              className="flex items-center gap-2 hover:text-gray-300"
            >
              <FaUser />
              <span className="mt-1">Profile</span>
            </Link>
          </li>
        </ul>
        <div
          className="relative"
          onClick={() => setDropdownOpen((prev) => !prev)}
        >
        <div className="flex items-center cursor-pointer  rounded">
        <FaCog className="text-2xl cursor-pointer hover:text-gray-300" />
        <p className="ml-2 mt-4">Settings</p>
</div>

          {isDropdownOpen && (
            <div
              ref={dropdownRef} // Attach ref to dropdown menu
              className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md z-50"
            >
              <ul>
                <li>
                  <Link
                    to="/UserProfile"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Setting
                  </Link>
                </li>
                {!isAuthenticated ? (
                  <li>
                    <Link
                      to="/signup"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Sign-Up
                    </Link>
                  </li>
                ) : (
                  <li>
                    <Link
                      to="/login"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      onClick={() => setAuthenticated(false)}
                    >
                      Logout
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 text-white shadow-lg sm:hidden z-50">
        <ul className="flex justify-around items-center p-2">
          <li>
            <Link
              to="/"
              className="flex flex-col items-center text-sm hover:text-gray-300"
            >
              <FaTwitch className="text-2xl" />
              <span>Community Posts</span>
            </Link>
          </li>
          <li>
            <Link
              to="/create-post"
              className="flex flex-col items-center text-sm hover:text-gray-300"
            >
              <FaPlusCircle className="text-2xl" />
              <span>Post</span>
            </Link>
          </li>

          <li>
            <Link
              to="/account"
              className="flex flex-col items-center text-sm cursor-pointer hover:text-gray-300"
            >
              <FaUser className="text-2xl" />
              <span>Account</span>
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="flex flex-col items-center text-sm hover:text-gray-300"
            >
              <FaSignInAlt className="text-2xl" /> {/* Login Icon */}
              <span>Login</span>
            </Link>
          </li>
        </ul>
        <Link
          to="/chatbot"
          className="fixed bottom-[100px] right-5 sm:hidden w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition z-50"
        >
          <FaRobot className="text-white text-2xl" />
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
