import React from "react";
import { useNavigate } from "react-router-dom";
import API_BASE from "../config";
function Complete() {
  const navigate = useNavigate();

  const handleDone = () => {
    navigate("/upload");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-green-400 mb-4">
          Printing Complete!
        </h2>
        <p className="text-gray-400 mb-6">
          You can now collect your printed document.
        </p>
        <button
          onClick={handleDone}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
        >
          Back to Upload
        </button>
      </div>
    </div>
  );
}

export default Complete;
