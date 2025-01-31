import React, { useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai'; // Delete icon
import { useNavigate } from 'react-router-dom';

function VerifyPage() {
  // List of emails
  const navigate = useNavigate();

  const emailList = [
    'wahabnadeem311@gmail.com',
    'Zeeshan@gmail.com',
    'Tahirgmail.com',
  ];

  const handleDelete = (email) => {
    alert(`Email ${email} Deleted`);
  };

  const handleBackClick = () => {
    navigate("/shery");
  };

  return (
    <>
     <nav className="text-white px-4 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 py-3 flex items-center">
     <button
          onClick={handleBackClick}
          className="flex items-center text-white font-medium"
        >
          <img src="images/back.jpg" alt="Back" className="w-8 h-8" />
        </button>
</nav>
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl text-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 font-lexend">Verified Emails</h1>
        
        {/* List of emails with delete icons */}
        <div className="space-y-3">
          {emailList.map((email, index) => (
            <div key={index} className="flex justify-between items-center border-b py-2">
              <div className='flex flex-col text-left'>
                <h1 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-lexend">{email}</h1>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg">This email has been verified.</p>
              </div>
              <button
                onClick={() => handleDelete(email)}
                className="text-red-500 hover:text-red-700 text-lg sm:text-xl md:text-2xl lg:text-3xl"
                title="Delete Email"
              >
                <AiOutlineDelete />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

export default VerifyPage;
