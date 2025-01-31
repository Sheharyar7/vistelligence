import React, { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa"; // For the Tick and X icons
import { AiOutlineDelete } from "react-icons/ai"; // Delete icon
import { useNavigate } from "react-router-dom";

function NonVerifyPage() {
  const navigate = useNavigate();

  // List of emails
  const emailList = [
    'wahabnadeem311@gmail.com',
    'Zeeshan@gmail.com',
    'Tahirgmail.com',
  ];

  const handleVerify = (email) => {
    alert(`${email} is now verified!`);
  };

  const handleReject = (email) => {
    alert(`${email} verification rejected.`);
  };

  const handleDelete = (email) => {
    alert(`Email ${email} Deleted`);
  };

  const handleBackClick = () => {
    navigate("/shery");
  };

  return (
    <>
      <nav className="text-white px-4 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 py-3 flex items-center">
        {/* Back Button */}
        <button
          onClick={handleBackClick}
          className="flex items-center text-white font-medium"
        >
          <img src="images/back.jpg" alt="Back" className="w-8 h-8" />
        </button>
      </nav>

      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 p-4">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 font-lexend">
            Blocked/Unblocked Emails
          </h1>
          
          {/* List of emails with tick, cross, and delete icons */}
          <div className="space-y-3">
            {emailList.map((email, index) => (
              <div key={index} className="flex justify-between items-center border-b py-2">
                <div className="flex flex-col text-left">
                  <h1 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-lexend">{email}</h1>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg">This email has not been verified.</p>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleVerify(email)}
                    className="text-green-500 hover:text-green-700 text-lg sm:text-xl md:text-2xl lg:text-3xl"
                    title="Verify Email"
                  >
                    <FaCheck />
                  </button>
                  <button
                    onClick={() => handleReject(email)}
                    className="text-red-500 hover:text-red-700 text-lg sm:text-xl md:text-2xl lg:text-3xl"
                    title="Reject Email"
                  >
                    <FaTimes />
                  </button>
                  <button
                    onClick={() => handleDelete(email)}
                    className="text-red-500 hover:text-red-700 text-lg sm:text-xl md:text-2xl lg:text-3xl"
                    title="Delete Email"
                  >
                    <AiOutlineDelete />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default NonVerifyPage;
