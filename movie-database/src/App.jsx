import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/Sign Up";
import Favourites from "./components/Favorites";
import Search from "./components/Search";

function App() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("Searching for:", searchQuery);
    // You will integrate the API call here later

  };
  
  return (
    <div className="App">
      {/* Header */}
      <header>
      <h1>Movie Code</h1>
      <nav>
        <ul>
          <li><a href="Home"></a></li>
          <li><a href="Login"></a></li>
          <li><a href="Sign Up"></a></li>
          <li><a href="Favorites"></a></li>
        </ul>
      </nav>
      </header>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>


      {/* Search Bar */}
      <section className="search-bar">
        <form onSubmit={handleSearchSubmit}>
          <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search for movies..."
          />
          <button type="submit">Search</button>
        </form>
      </section>

      {/* Trending Movies */}
      <section className="trending-movies">
        <h2>Trending Movies</h2>
        <div className="movie-grid">
          {/* This is where you will map over movie data */}

          <div className="movie-card">Movie 1</div>
          <div className="movie-card">Movie 2</div>
          <div className="movie-card">Movie 3</div>
        </div>
      </section>
    </div>
  );
}


export default App;
