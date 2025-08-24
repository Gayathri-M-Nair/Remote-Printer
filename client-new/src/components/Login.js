import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/common.css";
import API_BASE from "../config"; // ✅ import API base
import { setToken } from "../utils/auth"; // ✅ use auth.js utilities

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("student");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginURL =
      userType === "admin"
        ? `${API_BASE}/api/admin-login`
        : `${API_BASE}/api/login`;

    try {
      const response = await fetch(loginURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (data.token) {
        setToken(data.token);  // ✅ uses auth.js
        navigate("/upload");
      } else {
        setError("Login failed");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1E1E1E]">
      <div className="bg-[#2A2A2A] p-8 rounded-xl shadow-[8px_8px_0px_rgba(0,0,0,0.5)] w-96">
        <h2 className="text-white text-xl font-bold text-center mb-6">
          WELCOME BACK!
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* User Type Selector */}
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            className="w-full bg-black text-white border border-gray-600 rounded-md p-2 focus:outline-none"
          >
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </select>

          {/* Email Field */}
          <div className="flex items-center bg-black rounded-md overflow-hidden">
            <label className="bg-[#9C6ADE] text-white px-3 py-2 text-sm">
              Email
            </label>
            <input
              type="email"
              placeholder="email@gmail.com"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-black text-white px-3 py-2 focus:outline-none"
            />
          </div>

          {/* Password Field */}
          <div className="flex items-center bg-black rounded-md overflow-hidden">
            <label className="bg-[#9C6ADE] text-white px-3 py-2 text-sm">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              className="flex-1 bg-black text-white px-3 py-2 focus:outline-none"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#C77DFF] hover:bg-[#b06ce6] text-white py-2 rounded-full font-semibold shadow-md"
          >
            LOGIN
          </button>

          {/* Error Message */}
          {error && <p className="text-red-500 text-center">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default Login;
