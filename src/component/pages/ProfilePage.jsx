import React, { useState } from "react";
import Navbar from "../Layout/Navbar"; // Import your Navbar component
import Footer from "../Layout/Footer";

function ProfilePage() {
  const [posts, setPosts] = useState([
    {
      userName: "Bus",
      imageUrl: "images/Post1.jpg",
      description: "Booking the Flight Ticket.....",
      uploadDate: "2025-09-01T10:00:00Z",
    },
    {
      userName: "Car",
      imageUrl: "images/Post2.jpg",
      description: "Booking The Ticket To Travel.",
      uploadDate: "2025-09-01T10:00:00Z",
    },
    {
      userName: "Train",
      imageUrl: "images/post3.jpg",
      description: "Booking The New York Visa.",
      uploadDate: "2025-09-01T10:00:00Z",
    },
    {
      userName: "Bicycle",
      imageUrl: "", // No image for this post
      description: "The visa booking visit our site.",
      uploadDate: "2025-09-01T12:00:00Z",
    },
    {
      userName: "Plane",
      profileImageUrl: "images/plan.jpg",
      imageUrl: "", // No image for this post
      description: "The visa booking visit our site.",
      uploadDate: "2025-09-01T14:00:00Z",
    },
  ]);

  const user = {
    username: "John",
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-200 min-h-screen">
        {/* Profile Header */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-6">
            <div className="mt-10 flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-6">
              {/* Profile Details */}
              <div className="text-center sm:text-left">
                <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 font-lexend">
                  {user.username}
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Post Grid */}
        <div className="mt-10 max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Posts</h2>
          <div className="mb-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {posts.map((post, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-lg shadow-md flex flex-col ${
                  post.imageUrl ? "min-h-[250px]" : "min-h-[150px]"
                }`}
              >
                {/* Post Image or Placeholder */}
                {post.imageUrl ? (
                  <img
                    src={post.imageUrl}
                    alt={`Post ${index + 1}`}
                    className="w-full h-[350px] object-cover rounded-t-lg" // Ensures full image display
                  />
                ) : null}

                {/* Post Description */}
                <div className="p-4 text-center ">
                  <p className="text-md text-gray-700">{post.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default ProfilePage;
