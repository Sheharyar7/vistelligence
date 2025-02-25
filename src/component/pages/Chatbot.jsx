import React, { useState } from "react";
import Navbar from "../Layout/Navbar";

const ChatUI = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const suggestions = [
    "- What is Vistelligence?",
    "- What is the cost of USA visit visa for single person?",
    "- Which document is required to get Pakistani passport?",
    "-What documents are need to apply for international scholarships?",
  ];

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: "This is a response from ChatGPT!", sender: "bot" },
        ]);
      }, 1000);
      setInput("");
    }
  };

  const handleSuggestionClick = (text) => {
    setInput(text);
  };

  return (
    <>
      <Navbar />
      <div className=" bg-white mt-4 text-white flex flex-col items-center justify-center">
        {/* Chat Header and Logo Section */}
        <div className="text-center mb-2">
          <div className="flex flex-col justify-center items-center">
            <img
              src="images/vintageBlack.jpg"
              alt="ChatGPT Logo"
              className="h-36 w-36 mb-2"
            />
            <h1 className="text-4xl font-bold font-lexend text-gray-100 d p-4 bg-slate-400 rounded-full">Vistelligence</h1>
          </div>

          {/* Suggestions Section */}
          <div className="mt-4 space-y-2">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="block w-full text-left bg-gray-300 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-lexend"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>

        {/* Chat Section */}
        

        {/* Input Section */}
        <footer className="bg-gray-400 border-t rounded-2xl  p-4 w-full max-w-4xl">
          <div className="flex items-center space-x-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 font-lexend bg-gray-200 text-black border-none rounded-lg px-3 py-2 focus:outline-none  placeholder-gray-400 text-sm"
            />
            <button
              onClick={handleSend}
              className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700"
            >
              {/* Arrow Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ChatUI;
