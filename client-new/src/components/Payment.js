import React from "react";
import { useNavigate } from "react-router-dom";
import API_BASE from "../config";
function Payment() {
  const navigate = useNavigate();

  const handlePayment = () => {
    setTimeout(() => {
      navigate("/queue");
    }, 1000); // Simulate payment delay
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center p-6">
      <div className="bg-black/70 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-full max-w-md border border-gray-700 text-center">
        
        <h2 className="text-2xl font-bold text-white mb-4">Payment Page</h2>
        <p className="text-lg text-green-400 font-semibold mb-6">
          Estimated Cost: ₹20
        </p>

        <button
          onClick={handlePayment}
          className="w-full py-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition font-bold text-white text-lg shadow-lg"
        >
          Pay Now
        </button>

      </div>
    </div>
  );
}

export default Payment;
