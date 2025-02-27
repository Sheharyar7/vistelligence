import React, { useState } from "react";
import Footer from "../Layout/Footer";
import { Link } from "react-router-dom";
import {
  FaRobot,
  FaBan,
  FaCheckCircle,
  FaFlag,
} from "react-icons/fa";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "misLeading Information", "Hate Speach", "False News", "Others"];
  const posts = [
    {
      userName: "John",
      category: "misLeading Information",
      imageUrl: "images/Post1.jpg",
      description: "Check out this amazing post about tech!",
      comments: ["Great post!", "Love this!"],
    },
    {
      userName: "Jane",
      category: "Hate Speach",
      imageUrl: "images/Post2.jpg",
      description: "Exploring the latest fashion trends.",
      comments: ["Beautiful outfits!", "I want those!"],
    },
    {
      userName: "John",
      category: "False News",
      imageUrl: "images/post3.jpg",
      description: "Exciting new developments in sports.",
      comments: ["Amazing skills!", "What a match!"],
    },
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
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


          <ul className="flex gap-6 items-center justify-center flex-1">
            <li>
              <Link to="/report" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
                <FaFlag />
                <span>Reported Post</span>
              </Link>
            </li>
            <li>
              <Link to="/verify" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
                <FaCheckCircle />
                <span>Verify</span>
              </Link>
            </li>
            <li>
              <Link to="/notverify" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
                <FaBan />
                <span>Block</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Navbar */}
        <nav className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 text-white shadow-lg sm:hidden z-50">
          <ul className="flex justify-around items-center p-2">
            <li>
              <Link to="/report" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
                <FaFlag />
                <span>Reported Post</span>
              </Link>
            </li>
            <li>
              <Link to="/verify" className="flex flex-col items-center text-sm hover:text-gray-300 transition-colors">
                <FaCheckCircle className="text-2xl" />
                <span>Verify</span>
              </Link>
            </li>
            <li>
              <Link to="/notverify" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
                <FaBan />
                <span>Block</span>
              </Link>
            </li>
          </ul>
          <Link to="/chatbot" className="fixed bottom-[100px] right-5 sm:hidden w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition z-50">
            <FaRobot className="text-white text-2xl" />
          </Link>
        </nav>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row mt-5 w-full px-4">
          {/* Sidebar Filter */}
          <div className="w-full md:w-64 bg-white p-4 rounded-lg shadow-md mb-4 md:mb-0">
            <h2 className="font-semibold text-xl mb-4 text-gray-800">Categories</h2>
            <div className="space-y-2">
              {categories.map((category, index) => (
                <div key={index}>
                  <button
                    onClick={() => handleCategoryClick(category)}
                    className={`w-full text-left p-2 rounded-md font-medium transition-colors ${selectedCategory === category
                        ? "bg-blue-500 text-white"
                        : "bg-white text-gray-700 hover:bg-blue-100"
                      }`}
                  >
                    {category}
                  </button>

                  {/* Displaying post names below each category */}
                  {selectedCategory === category &&
                    posts
                      .filter((post) => post.category === category)
                      .map((post, index) => (
                        <p key={index} className="ml-4 text-sm text-gray-600">
                          {post.userName}
                        </p>
                      ))}
                </div>
              ))}
            </div>
          </div>

          {/* Post Cards Section */}
          <div className="mb-24 flex-1 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts
              .filter((post) =>
                selectedCategory === "All" ? true : post.category === selectedCategory
              )
              .map((post, index) => (
                <div key={index} className="border rounded-lg bg-white shadow-md p-4 transition-transform transform hover:scale-105">
                  {/* Profile Name and Image */}
                  <div className="flex items-center mb-4">
                    <div>
                      <span className="font-semibold text-gray-800 text-2xl block">
                        {post.userName}
                      </span>
                    </div>
                  </div>

                  {/* Post Image */}
                  <div className="w-full h-[350px] overflow-hidden mb-4">
                    <img
                      src={post.imageUrl}
                      alt="Post"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-700 mb-4">{post.description}</p>

                  {/* Footer with Comments */}
                  <div className="relative">
                    <div className="absolute -bottom-[70px] mr-40 w-[200px] -left-4 flex items-center justify-between p-4 bg-white rounded-br-[300px] shadow-md">
                      <div className="space-x-3">
                        <button className="bg-green-500 text-white py-1 px-3 rounded-lg text-sm font-medium hover:bg-green-600 flex-shrink-0">
                          Accept
                        </button>
                        <button className="bg-red-500 text-white py-1 px-3 rounded-lg text-sm font-medium hover:bg-red-600 flex-shrink-0">
                          Decline
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Categories;
