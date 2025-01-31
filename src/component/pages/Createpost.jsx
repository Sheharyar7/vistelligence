import React, { useState } from "react";
import { notification } from "antd"; // Import notification from Ant Design
import Navbar from "../Layout/Navbar";
import "antd/dist/reset.css"; // Import Ant Design styles
import Footer from "../Layout/Footer";

function Createpost() {
  const [formData, setFormData] = useState({
    userName: "",
    imageUrl: "",
    description: "",
    category: "", // New category field
  });

  const [previewImage, setPreviewImage] = useState("");

  const categories = ["Visa Documents", "Visa Policy", "Visa Suggestion", "Visa Prices", "Others"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        setFormData({ ...formData, imageUrl: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);

    // Display success notification
    notification.success({
      message: "Success",
      description: "The post was created successfully!",
      placement: "topRight",
    });

    // Reset the form after submission
    setFormData({
      userName: "",
      imageUrl: "",
      description: "",
      category: "",
    });
    setPreviewImage("");
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-200 p-5 flex justify-center items-center min-h-screen">
        <div className="bg-white mb-40 p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-center font-lexend">Create Post</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            

            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 font-lexend">
                Name:
              </label>
              <input
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full border rounded-lg px-3 py-2 text-gray-700"
              />
            </div>

            {/* Category Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 font-lexend">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 text-gray-700"
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Upload Image */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 font-lexend">
                Post Image (jpg, png, pdf)
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full border rounded-lg px-3 py-2 text-gray-700"
              />
              {previewImage && (
                <div className="mt-2">
                  <img
                    src={previewImage}
                    alt="Preview"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              )}
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 font-lexend">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Write a description..."
                className="w-full border rounded-lg px-3 py-2 text-gray-700"
                rows="4"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full font-lexend bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Createpost;
