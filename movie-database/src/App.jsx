import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import MovieCard from "./components/MovieCard";
import Search from "./components/Search";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
 
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="App">
      {/* Routing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movieDetails" element={<MovieDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/movieCard" element={<MovieCard />} />
          <Route path="/search" element={<Search />} />
        </Routes>        
    </div>
  );
}

export default App;
