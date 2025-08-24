import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Preference() {
  const [preferences, setPreferences] = useState({
    copies: 1,
    color: "black-and-white",
    layout: "single",
    destination: "Microsoft Print to PDF",
    pages: "all",
    paperSize: "letter",
    pagesPerSheet: "1",
    scale: "100",
    sides: "single"
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPreferences({ ...preferences, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("preferences", JSON.stringify(preferences));
    navigate("/payment");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center p-6">
      <div className="bg-black/70 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-full max-w-md border border-gray-700">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Print Preferences</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Destination */}
          <div>
            <label className="block text-gray-300 mb-1">Destination</label>
            <select
              name="destination"
              value={preferences.destination}
              onChange={handleChange}
              className="w-full bg-black/40 text-white rounded-lg px-4 py-2 border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <option>Microsoft Print to PDF</option>
              <option>HP Printer</option>
              <option>Canon Printer</option>
            </select>
          </div>

          {/* Pages */}
          <div>
            <label className="block text-gray-300 mb-1">Pages</label>
            <select
              name="pages"
              value={preferences.pages}
              onChange={handleChange}
              className="w-full bg-black/40 text-white rounded-lg px-4 py-2 border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <option value="all">All</option>
              <option value="custom">Custom</option>
            </select>
          </div>

          {/* Number of Copies */}
          <div>
            <label className="block text-gray-300 mb-1">Number of Copies</label>
            <input
              type="number"
              name="copies"
              value={preferences.copies}
              onChange={handleChange}
              min="1"
              className="w-full bg-black/40 text-white rounded-lg px-4 py-2 border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400 appearance-number-input"
            />
          </div>

          {/* Single/Double Sided */}
          <div>
            <label className="block text-gray-300 mb-1">Print Sides</label>
            <select
              name="sides"
              value={preferences.sides}
              onChange={handleChange}
              className="w-full bg-black/40 text-white rounded-lg px-4 py-2 border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <option value="single">Single-Sided</option>
              <option value="double">Double-Sided</option>
            </select>
          </div>

          {/* Color */}
          <div>
            <label className="block text-gray-300 mb-1">Color</label>
            <select
              name="color"
              value={preferences.color}
              onChange={handleChange}
              className="w-full bg-black/40 text-white rounded-lg px-4 py-2 border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <option value="black-and-white">Black & White</option>
              <option value="color">Color</option>
            </select>
          </div>

          {/* Paper size */}
          <div>
            <label className="block text-gray-300 mb-1">Paper Size</label>
            <select
              name="paperSize"
              value={preferences.paperSize}
              onChange={handleChange}
              className="w-full bg-black/40 text-white rounded-lg px-4 py-2 border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <option value="letter">Letter</option>
              <option value="a4">A4</option>
            </select>
          </div>

          {/* Pages per sheet */}
          <div>
            <label className="block text-gray-300 mb-1">Pages per Sheet</label>
            <select
              name="pagesPerSheet"
              value={preferences.pagesPerSheet}
              onChange={handleChange}
              className="w-full bg-black/40 text-white rounded-lg px-4 py-2 border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              {[1, 2, 4, 6, 9, 16].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>

          {/* Scale */}
          <div>
            <label className="block text-gray-300 mb-1">Scale (%)</label>
            <input
              type="number"
              name="scale"
              value={preferences.scale}
              onChange={handleChange}
              className="w-full bg-black/40 text-white rounded-lg px-4 py-2 border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition font-bold text-white text-lg shadow-lg"
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
}

export default Preference;
