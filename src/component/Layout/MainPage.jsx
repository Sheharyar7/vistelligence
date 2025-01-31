import React, { useState } from "react";
import SideFilter from "./SideFilter";
import PostingCard from "./PostingCard";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer"

const MainPage = () => {
  const [posts, setPosts] = useState([
    {
      userName: "John",
      imageUrl: "images/Post2.jpg",
      description: "This is a sample description for Post.....",
      category: "Visa Documents",
      likes: 10,
      comments: [{ userName: "Jane Smith", text: "Great post!" }],
    },
    {
      userName: "John",
      imageUrl: "images/Post1.jpg",
      description: "This is a sample description for Post.....",
      category: "Visa Policy",
      likes: 15,
      comments: [{ userName: "John Doe", text: "Very informative!" }],
    },
    {
      userName: "John",
      imageUrl: "images/post3.jpg",
      description: "This is a sample description for Post.....",
      category: "Visa Suggestion",
      likes: 5,
      comments: [{ userName: "Bob Lee", text: "Helpful, thanks!" }],
    },
    {
      userName: "John",
      profileImageUrl: "images/bicycle.jpg",
      imageUrl: "",
      description: "This is a post about Bicycle.",
      category: "Visa Prices",
    },
    {
      userName: "John",
      profileImageUrl: "images/plan.jpg",
      imageUrl: "",
      description: "This is a post about Plane .",
      category: "Others",
    },
  ]);

  const [filteredPosts, setFilteredPosts] = useState(posts);

  const categories = ["Visa Documents", "Visa Policy", "Visa Suggestion", "Visa Prices", "Others"];

  const handleFilterChange = (category) => {
    if (category.length > 0) {
      setFilteredPosts(
        posts.filter((post) => category.includes(post.category))
      );
    } else {
      setFilteredPosts(posts);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-secondary">
        <Navbar />
        <div className="flex flex-col lg:flex-row p-4 gap-4">
          {/* Sidebar */}
          <div className="w-full lg:w-1/4">
            <SideFilter
              categories={categories}
              onFilterChange={handleFilterChange}
            />
          </div>

          {/* Posts Section */}
          <div className="mb-56 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 w-full">
            {filteredPosts.map((post, index) => (
              <PostingCard key={index} post={post} />
            ))}
          </div>
        </div>
        <Footer />

      </div>
    </>
  );
};

export default MainPage;
