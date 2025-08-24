import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Queue() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/complete");
    }, 3000); // Simulated queue time
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Your document is in the queue...
        </h2>
        <p className="text-gray-400 mb-6">
          Please wait while it's being printed.
        </p>
        {/* Loader animation */}
        <div className="flex justify-center">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
}

export default Queue;
