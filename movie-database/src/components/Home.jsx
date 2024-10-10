import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error,setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
           `https://www.omdbapi.com/?t=King+of+Boys&apikey=1ba32adb`
        );
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie:', error);
        setError('Failed to fetch movie data')
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>

  return (
    <div className='min-h-screen bg-contain bg-center' style={{backgroundImage: movie ? `url(${movie.Poster})` : 'none' }}>
      {movie && (     
      <div className='bg-black bg-opacity-50 h-full flex flex-col justify-center items-center'>
        <header className='flex justify-between items-center p-4 w-full'>
        <h1 className='text-white text-7xl sm:text-5xl lg:text-7xl font-bold text-top flex justify-top mx-4'>Movie Code</h1>
        <nav className='w-full sm:w-auto flex sm:flex-row justify-end mt-4 sm:mt-0'>
        <ul className='flex  flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6 text-center'>
          <li><Link to='/' className='text-white mx-4 hover:underline'>Home</Link></li>
          <li><Link to='/movieDetails' className='text-white mx-4 hover:underline'>Movie Details</Link></li>
          <li><Link to='/login' className='text-white mx-4 hover:underline'>Login</Link></li>
          <li><Link to='/signup' className='text-white mx-4 hover:underline'>Sign Up</Link></li>
          <li><Link to='/moviecard' className='text-white mx-4 hover:underline'>Movie Card</Link></li>
          <li><Link to='/search' className='text-white mx-4 hover:underline'>Search</Link></li>
        </ul>  
      </nav>
      </header>
      </div>
      )}
    </div>
  )
}

export default Home;