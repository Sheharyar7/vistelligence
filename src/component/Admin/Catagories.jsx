import React, { useState } from "react";
import Footer from "../Layout/Footer";
import { Link } from "react-router-dom";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "misLeading Information", "Wate Speach", "False News", "Others"];
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
      category: "Wate Speach",
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
    // More posts...
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <nav className="text-white px-4 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 py-3 flex items-center">
        {/* Back Button */}
        <Link to="/shery">
          <button className="flex items-center text-white font-medium">
            <img src="images/back.jpg" alt="Back" className="w-8 h-8" />
          </button>
        </Link>
      </nav>
      <div className="flex flex-col md:flex-row mt-5">
        {/* Sidebar Filter */}
        <div className="w-full md:w-64 bg-secondary p-4 rounded-lg shadow-md mb-4 md:mb-0">
          <h2 className="font-semibold text-xl mb-4 text-gray-800 font-lexend">
            Categories
          </h2>
          <div className="space-y-2">
            {categories.map((category, index) => (
              <div key={index}>
                <button
                  onClick={() => handleCategoryClick(category)}
                  className={`w-full text-left p-2 rounded-md font-medium transition-colors ${
                    selectedCategory === category
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
        <div className="mb-24 flex-1 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          {posts
            .filter((post) =>
              selectedCategory === "All"
                ? true
                : post.category === selectedCategory
            )
            .map((post, index) => (
              <div key={index} className="border rounded-lg bg-white shadow-md p-4">
                {/* Profile Name and Image */}
                <div className="flex items-center mb-4">
                  <div>
                    <span className="font-semibold text-gray-800 text-2xl font-lexend block">
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
      <Footer />
    </>
  );
};

export default Categories;
