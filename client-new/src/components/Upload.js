import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Upload() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("/api/upload", formData);
      setMessage(res.data.message);
      setTimeout(() => {
        navigate("/preferences");
      }, 1000);
    } catch (err) {
      setMessage("Upload failed");
      console.error(err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1E1E1E] relative">
      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="absolute top-6 right-6 bg-purple-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
      >
        Logout
      </button>

      {/* Upload Card */}
      <div className="bg-[#2A2A2A] p-8 rounded-xl shadow-[8px_8px_0px_rgba(0,0,0,0.5)] w-96 flex flex-col items-center space-y-4">
        {/* File Input */}
        <label className="bg-[#A3D977] text-black px-4 py-2 rounded-full cursor-pointer hover:opacity-90 font-medium">
          CHOOSE FILE
          <input
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>

        {/* File Name */}
        <p className="text-white text-sm">
          {file ? file.name : "No file chosen"}
        </p>

        {/* Upload Button */}
        <button
          onClick={handleUpload}
          className="bg-[#9C6ADE] hover:bg-[#8856d9] text-white px-6 py-2 rounded-full font-semibold shadow-md"
        >
          UPLOAD
        </button>

        {/* Message */}
        {message && (
          <p className="mt-2 text-center text-sm text-green-400">{message}</p>
        )}
      </div>
    </div>
  );
}

export default Upload;
