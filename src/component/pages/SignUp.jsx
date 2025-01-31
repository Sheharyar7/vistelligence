import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigation = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    // After successful signup, navigate to login page
    navigation("/login");
  };

  const handleBackClick = () => {
    navigation("/");
  };

  return (
    <>
      <nav className="text-white px-4 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 py-3 flex items-center">
              {/* Back Button */}
              <Link to="/">
                <button className="flex items-center text-white font-medium">
                  <img src="images/back.jpg" alt="Back" className="w-8 h-8" />
                </button>
              </Link>
            </nav>
      <div className="flex items-center justify-center h-screen p-5 bg-gray-300 overflow-hidden relative">
        {/* Blurred Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/Post2.jpg)', // Set your traveling background image here
            filter: "blur(5px)", // Blur effect
            zIndex: 1,
          }}
        ></div>

        {/* Form Container */}
        <div className="relative z-10 w-full max-w-md p-8 rounded-lg shadow-lg bg-gray-800 bg-opacity-80">
          <h2 className="text-2xl font-semibold text-center text-white mb-6 font-lexend">
            Sign Up
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-white mb-2">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-white mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-white mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition"
            >
              Sign Up
            </button>
          </form>
          <p className="text-sm text-gray-400 text-center mt-4">
            Already have an account?{" "}
            <Link to="/login">
            <a className="text-blue-400 hover:underline">
              Login
            </a>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
