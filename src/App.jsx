import React from "react";
import Home from "./compenents/Home";
import Navbar from "./compenents/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth } from "./Context/AuthContext";
import PlayingVideo from "./compenents/PlayingVideo";
import Search from "./compenents/Search";

const App = () => {
  const { loading, data } = useAuth();
  console.log(loading);
  console.log(data);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:id" element={<PlayingVideo />} />
        <Route path="/search/:searchQuery" element={<Search />} />
      </Routes>
    </Router>
  );
};

export default App;
