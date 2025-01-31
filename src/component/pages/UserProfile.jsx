import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa'; // Ensure you have installed react-icons

function UserProfile() {
  const navigate = useNavigate();
  const [isEditable, setIsEditable] = useState({
    name: false,
    email: false,
    password: false,
  });

  const user = {
    name: 'Abdul Wahab',
    email: 'wahabnadeem311@gmail.com',
    password: '********', // Password represented as stars
  };

  

  const handleEditClick = (field) => {
    setIsEditable((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  return (
    <>
      {/* User Profile Section */}
      <div className="min-h-screen bg-gray-200">
      <nav className="text-white px-4 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 py-3 flex items-center">
        {/* Back Button */}
        <Link to="/">
          <button className="flex items-center text-white font-medium">
            <img src="images/back.jpg" alt="Back" className="w-8 h-8" />
          </button>
        </Link>
      </nav>
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md mt-24">
          <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">Setting</h1>

          <div className="space-y-4">
            {/* Name Input */}
            <div className="relative">
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 font-lexend">Name</label>
              <div className="flex items-center space-x-2 w-full justify-between">
                <input
                  id="name"
                  type="text"
                  value={user.name}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg shadow-sm"
                  readOnly={!isEditable.name}
                />
                <FaEdit
                  onClick={() => handleEditClick('name')}
                  className={`text-blue-500 mt-3 cursor-pointer absolute right-2 top-1/2 transform -translate-y-1/2 ${isEditable.name ? 'text-red-500' : ''}`}
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="relative">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 font-lexend">Email</label>
              <div className="flex items-center space-x-2 w-full justify-between">
                <input
                  id="email"
                  type="email"
                  value={user.email}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg shadow-sm"
                  readOnly={!isEditable.email}
                />
                
              </div>
            </div>

            {/* Password Input */}
            <div className="relative">
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 font-lexend">Password</label>
              <div className="flex items-center space-x-2 w-full justify-between">
                <input
                  id="password"
                  type="password"
                  value={user.password}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg shadow-sm"
                  readOnly={!isEditable.password}
                />
                <FaEdit
                  onClick={() => handleEditClick('password')}
                  className={`text-blue-500 mt-3 cursor-pointer absolute right-2 top-1/2 transform -translate-y-1/2 ${isEditable.password ? 'text-red-500' : ''}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
