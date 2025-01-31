import React, { useState } from 'react';

const Modal = ({ closeModal }) => {
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([
    { userName: 'John Doe', text: 'Great post! Really enjoyed it.' },
    { userName: 'Jane Smith', text: 'Amazing work, keep it up!' },
    { userName: 'Alice Johnson', text: 'Loved the insights shared here.' },
  ]);

  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleSubmitComment = () => {
    if (commentText.trim()) {
      setComments([...comments, { userName: 'New User', text: commentText }]);
      setCommentText(''); // Clear the input after submission
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-96 p-4">
        <h3 className="text-xl font-semibold mb-4">Comments</h3>
        
        <div className="space-y-4">
          {comments.map((comment, index) => (
            <div key={index} className="flex flex-col">
              <span className="font-semibold">{comment.userName}</span>
              <p className="text-sm text-gray-600">{comment.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <textarea
            value={commentText}
            onChange={handleCommentChange}
            rows="3"
            placeholder="Add a comment..."
            className="w-full p-2 border border-gray-300 rounded-md"
          ></textarea>
        </div>

        <div className="flex justify-end mt-4">
          <button
            onClick={handleSubmitComment}
            className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2"
          >
            Submit
          </button>
          <button
            onClick={closeModal}
            className="px-4 py-2 bg-gray-500 text-white rounded-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
