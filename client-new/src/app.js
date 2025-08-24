import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "./components/Login";
import Upload from "./components/Upload";
import Preferences from "./components/Preferences";
import Payment from "./components/Payment";
import Queue from "./components/Queue";
import Complete from "./components/Complete";

function App() {
  const isLoggedIn = localStorage.getItem("token");

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/upload" element={isLoggedIn ? <Upload /> : <Navigate to="/login" />} />
        <Route path="/preferences" element={isLoggedIn ? <Preferences /> : <Navigate to="/login" />} />
        <Route path="/payment" element={isLoggedIn ? <Payment /> : <Navigate to="/login" />} />
        <Route path="/queue" element={isLoggedIn ? <Queue /> : <Navigate to="/login" />} />
        <Route path="/complete" element={isLoggedIn ? <Complete /> : <Navigate to="/login" />} />
        
        {/* Redirect all other paths based on login */}
        <Route path="*" element={<Navigate to={isLoggedIn ? "/upload" : "/login"} />} />
      </Routes>
    </Router>
  );
}

export default App;
