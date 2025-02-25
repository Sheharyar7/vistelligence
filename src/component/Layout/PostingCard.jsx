import React, { useState } from "react";
import { FaHeart, FaRegHeart, FaRegComment, FaEllipsisH } from "react-icons/fa"; // Import icons
import Modal from "../Model/Model";
import { Link } from "react-router-dom";

const PostingCard = ({ post }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [liked, setLiked] = useState(false);
  const [isOptionsVisible, setOptionsVisible] = useState(false); // State to manage dropdown visibility
  const [isAnimating, setIsAnimating] = useState(false); // State to handle animation

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const toggleLike = () => {
    if (!liked) {
      setIsAnimating(true); // Start the animation
      setTimeout(() => setIsAnimating(false), 500); // Reset animation after 500ms
    }
    setLiked(!liked);
  };

  const toggleOptions = () => setOptionsVisible(!isOptionsVisible); // Toggle visibility of options

  return (
    <div className="relative mt-4 w-full sm:w-80 max-w-sm p-4 box-border">
      <div className="border rounded-lg bg-white shadow-md overflow-hidden">
        {/* Profile Name and Image */}
        <div className="flex items-center p-4">
          <div>
            <span className="text-gray-600 font-semibold font-lexend text-lg">
              {post.userName}
            </span><br/>
            <span className="text-sm text-slate-500">{post.category}</span>
            </div>

          {/* Three dots icon for options */}
          <div className="ml-auto relative flex flex-col items-end">
            <FaEllipsisH
              className="text-gray-600 cursor-pointer text-xl transform rotate-90"
              onClick={toggleOptions}
            />
            {isOptionsVisible && (
              <div className="absolute top-full right-0 mt-2 w-32 bg-white shadow-lg rounded-md z-10">
                <ul>
                  <li className="px-4 py-2 text-gray-700 hover:bg-gray-200 cursor-pointer">
                    Report
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Conditionally render Post Image only if imageUrl is provided */}
        {post.imageUrl && (
          <div className="w-full h-56 overflow-hidden">
            <img
              src={post.imageUrl}
              alt="Post"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Description */}
        <p className="p-4 text-sm text-gray-700">{post.description}</p>

        {isModalOpen && <Modal closeModal={closeModal} comments={post.comments} />}
      </div>

      {/* Footer with Absolute Position */}
      <div className="absolute -bottom-1 left-0 right-0 flex justify-between px-4">
        {/* Left-side div */}
        <div className="-bottom-8 w-[130px] sm:w-[130px] md:w-[140px] lg:w-[150px] flex items-center justify-between rounded-md p-4 bg-white rounded-br-[100px]">
          <div className="flex items-center space-x-4">
            <div className="relative">
              {liked && isAnimating && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaHeart className="text-red-600 text-3xl animate-ping" />
                </div>
              )}
              {liked ? (
                <FaHeart
                  className={`${
                    isAnimating ? "scale-125 transition-transform" : ""
                  } text-red-600 cursor-pointer text-xl`}
                  onClick={toggleLike}
                />
              ) : (
                <FaRegHeart
                  className="text-gray-600 cursor-pointer text-xl"
                  onClick={toggleLike}
                />
              )}
            </div>
            <FaRegComment
              className="text-gray-600 text-xl cursor-pointer"
              onClick={openModal}
              title="Open Comments"
            />
          </div>
        </div>

        {/* Right-side div */}
        <div className="absolute mt-[10px] w-[250px] sm:w-[150px] md:w-[170px] lg:w-[190px] h-8 ml-[120px] sm:ml-[120px] md:ml-[130px] lg:ml-[138px] flex items-center justify-between p-4 rounded-tl-[150px] border-l bg-secondary border-t-transparent border-b-transparent"></div>
      </div>
    </div>
  );
};

export default PostingCard;

