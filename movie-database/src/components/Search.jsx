import React, { useState } from 'react';
import axios from 'axios';

function Search({ onSearch }) {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit =async (e) => {
    e.preventDefault();
    if (query.trim() === '') {
      return;
    }

    setLoading(true);
    setError(null);
  
    try {
      const response = await axios.get(`https://www.omdbapi.com/?s=${query}&apikey=1ba32adb`);
      if (response.data.Response === 'True') {
        setSearchResults(response.data.Search);
        setError(null);
      } else {
        setSearchResults([]);
        setError(response.data.Error);
      }
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('An error occurred while fetching data');
    } finally {
      setLoading(false);
    }
    setQuery(''); //clear search field after submission
    
  };
 
  return (
    <div className='search-form bg-gray-100 min-h-screen p-6 sm:p-6 md:p-8'>
      <h2 className='text-black text-2xl mb-6'>Search Movies</h2>
      <form onSubmit={handleSubmit} className='max-w-xs sm:max-w-sm md:max-w-md' >
        <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for movies..."
        className='border border-black bg-white text-black p-2 w-full rounded-lg mb-4'
        />
        <button type="submit" className='bg-white text-black rounded-lg hover:bg-blue-800 transition'>Search</button>
      </form>

            {/* For loading */}
      {loading && <p className='text-black'> Loading...</p>}

      {/* For error */}
      {error && <p className='error-message text-red-500'>{error}</p>}

      {/* For Searching */}
      <div className='search-movies'>
        {searchResults.length > 0 ? (
          <ul className='grid grid-cols-2 gap-4'>
            {searchResults.map((movie) => (
              <li key={movie.imdbID} className='bg-gray p-4 rounded-lg shadow-lg'>
                <h3 className='text-black font-bold mb-2'>{movie.Title} ({movie.Year})</h3>
                <img src={movie.Poster} alt={movie.Title} />
              </li>
            ))}
          </ul>
        ) : (
          !loading && !error && <p>No results found</p>

        )}
      </div>
    </div>
  );
}

export default Search;

