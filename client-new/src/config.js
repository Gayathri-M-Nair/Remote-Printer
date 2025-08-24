// src/config.js
const dev = process.env.NODE_ENV !== "production";

const API_BASE = dev
  ? "http://127.0.0.1:5000"
  : "https://remote-printer.onrender.com";

export default API_BASE;
