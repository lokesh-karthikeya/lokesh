import React, { useState } from "react";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search query:", query);
    // Redirect to Google search or handle search here
  };

  return (
    <div className="App">
      <div className="main-container">
        {/* Google Logo */}
        <div className="logo">
          <img
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="Google Logo"
          />
        </div>

        {/* Search Bar */}
        <div className="search-bar">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search Google or type a URL"
              className="search-input"
            />
          </form>
        </div>

        {/* Buttons */}
        <div className="buttons">
          <button className="search-button">Google Search</button>
          <button className="lucky-button">I'm Feeling Lucky</button>
        </div>
      </div>
    </div>
  );
}

export default App;
