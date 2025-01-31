import React, { useState, useEffect, useRef } from "react";
import {
  FaRobot,
  FaBan,
  FaCheckCircle,
  FaFlag,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Main() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Desktop Navbar */}
      <nav className="hidden sm:flex justify-between items-center w-full p-4 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 text-white shadow-lg">
        {/* Logo on the Left */}
        <Link to="/" className="text-2xl font-bold flex items-center">
          <div className="w-14 h-14 rounded-full overflow-hidden">
            <img
              src="images/vintageLogo.jpg"
              alt="Vintage Logo"
              className="object-cover w-full h-full"
            />
          </div>
        </Link>

        {/* Centered Navigation Links */}
        <ul className="flex gap-6 items-center justify-center flex-1">
          <li>
            <Link
              to="/notverify"
              className="flex items-center gap-2 hover:text-gray-300"
            >
              <FaBan />
              <span className="mt-1">Block</span>
            </Link>
          </li>
          <li>
            <Link
              to="/verify"
              className="flex items-center gap-2 hover:text-gray-300"
            >
              <FaCheckCircle />
              <span className="mt-1">Verify</span>
            </Link>
          </li>
          <li>
            <Link
              to="/report"
              className="flex items-center gap-2 hover:text-gray-300"
            >
              <FaFlag />
              <span className="mt-1">Reported Post</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Navbar */}
      <nav className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 text-white shadow-lg sm:hidden z-50">
        <ul className="flex justify-around items-center p-2">
          <li>
            <Link
              to="/block"
              className="flex flex-col items-center text-sm hover:text-gray-300"
            >
              <FaBan className="text-2xl" />
              <span>Block</span>
            </Link>
          </li>
          <li>
            <Link
              to="/verify"
              className="flex flex-col items-center text-sm hover:text-gray-300"
            >
              <FaCheckCircle className="text-2xl" />
              <span>Verify</span>
            </Link>
          </li>
          <li>
            <Link
              to="/reported-posts"
              className="flex flex-col items-center text-sm hover:text-gray-300"
            >
              <FaFlag className="text-2xl" />
              <span>Reported Post</span>
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
    </div>
  );
}

export default Main;
