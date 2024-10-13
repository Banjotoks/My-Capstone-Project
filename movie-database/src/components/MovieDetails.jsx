import React, { useState, useEffect } from 'react';
import { fetchMoviesByTitle } from '../services/FetchData';
import Search from './Search';

function MovieDetails() {
  const [action, setAction] = useState([]);
  const [drama, setDrama] = useState([]);
  const [comedy, setComedy] = useState([]);
  const [recentlyWatched, setRecentlyWatched] = useState([]);
  const [blockbuster, setBlockbuster] = useState([]);
  const [loading, setLoading] = useState([true]);

  {/* Function to fetch movie data for different sections below  */}
  const fetchCategoryMovies = async () => {
    setLoading(true);
    try {
    const action = await fetchMoviesByTitle(['Rings of power', 'The Last Kingdom', 'Vikings', 'Avatar the last airbender', 'Berlin', 'King of Boys'])
    const drama = await fetchMoviesByTitle(['Jumong', 'Merlin', 'Vikings', 'Lord of the Rings', 'Legend of the seeker', 'Flash'])
    const comedy = await fetchMoviesByTitle(['Bridgerton', 'Little Man', 'Mr & Mrs Smith', 'Don', 'Home alone', 'Incoming'])
    const recentlyWatched = await fetchMoviesByTitle(['Money heist', 'Flash', 'Divergent', 'Avengers Endgame', 'Thor', 'The 100'])
    const blockbuster = await fetchMoviesByTitle(['Power', 'John Wick', 'Fast and Furious', 'The Rookie', 'Anikulapo', 'The Equalizer'])

    setAction(action || []);
    setDrama(drama || []);
    setComedy(comedy || []);
    setRecentlyWatched(recentlyWatched || []);
    setBlockbuster(blockbuster || []);
    } catch (error) {
      console.error('Error fetching movies:', error);
    } finally {
      setLoading(false);
    } 
  };

  const fetchMovieDetailsFromAPI = async (imdbID) => {
    const response = await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=1ba32adb`);
    if (!response.ok) {
      throw new Error('Failed to fetch movie details');
    }
    return await response.json();
  };

  const fetchMovieDetails = async (imdbID) => {
    setMovieDetailsLoading(true);
    try{
      const details = await fetchMovieDetailsFromAPI(imdbID);
      setSelectedMovie(details);
    } catch (error) {
      console.error('Error fetching movie details:', error);
    } finally {
      setMovieDetailsLoading(false);
    }
  };

  useEffect(() => {
    fetchCategoryMovies();
  }, []);
  if (loading) return <div>Loading</div>
  
  return(
    <div className='home bg-white'>
      <h2 className='text-black text-4xl font-bold text-top flex justify-top mx-4'>Various movie genres to enjoy</h2>
    
      {/*Section for Action*/}
      <section className='my-8'>
      <h2 className='text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-black'>ACTION MOVIES</h2>
        <div className='flex flex-row space-x-4 overflow-x-auto'>
          {action.map((movie) => (
              <div key={movie.imdbID} className='movie-card flex-none'>
              <h3 className='text-black'>{movie.Title}</h3>
              <img src={movie.Poster} alt={movie.Title} className='w-36 h-52 sm:w-48 sm:h-72 md:w-56 md:h-80 object-cover' />
              <p className='text-black'>{movie.Year}</p>
              <p className='text-black'>Rating: {movie.imdbRating ? movie.imdbRating : 'N/A'}</p>
              </div>
          ))}
      </div>
        </section>

    {/*Section for Drama*/}
      <section className='my-8'>
        <h2 className='text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-black'>DRAMA MOVIES</h2>
        <div className='movie-grid flex flex-row space-x-4 overflow-x-auto'>
          {drama.map((movie) => (
            <div key={movie.imdbID} className='movie-card flex-none'>
              <h3 className='text-black'>{movie.Title}</h3>
              <img src={movie.Poster} alt={movie.Title} className='w-36 h-52 sm:w-48 sm:h-72 md:w-56 md:h-80 object-cover' />
              <p className='text-black'>{movie.Year}</p>
              <p className='text-black'>Rating: {movie.imdbRating ? movie.imdbRating : 'N/A'}</p>
              </div>
          ))}
          </div>
      </section>

      {/* Section for Comedy */}
      <section className='my-8'>
        <h2 className='text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-black'>100% Comedy</h2>
        <div className='movie-grid flex space-x-4 overflow-x-auto'>
          {comedy.map((movie) => (
            <div key={movie.imdbID} className='movie-card flex-none'>
              <h3 className='text-black'>{movie.Title}</h3>
              <img src={movie.Poster} alt={movie.Title} className='w-36 h-52 sm:w-48 sm:h-72 md:w-56 md:h-80 object-cover' />
              <p className='text-black'>{movie.Year}</p>
              <p className='text-black'>Rating: {movie.imdbRating ? movie.imdbRating : 'N/A'}</p>
              </div>
          ))}
          </div>
        </section>

{/* Section for Recently Watched movies */}
      <section className='my-8'>
        <h2 className='text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-black'>RECENTLY WATCHED</h2>
        <div className='movie-grid flex space-x-4 overflow-x-auto'>
          {recentlyWatched.map((movie) => (
            <div key={movie.imdbID} className='movie-card flex-none'>
              <h3 className='text-black'>{movie.Title}</h3>
              <img src={movie.Poster} alt={movie.Title} className='w-36 h-52 sm:w-48 sm:h-72 md:w-56 md:h-80 object-cover' />
              <p className='text-black'>{movie.Year}</p>
              <p className='text-black'>Rating: {movie.imdbRating ? movie.imdbRating : 'N/A'}</p>
              </div>
          ))}
          </div>
        </section>

{/* Section for Blockbuster movies */}
<section className='my-8'>
        <h2 className='text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-black'>BlOCKBUSTER MOVIES</h2>
        <div className='movie-grid flex space-x-4 overflow-x-auto'>
          {blockbuster.map((movie) => (
            <div key={movie.imdbID} className='movie-card flex-none'>
              <h3 className='text-black'>{movie.Title}</h3>
              <img src={movie.Poster} alt={movie.Title} className='w-36 h-52 sm:w-48 sm:h-72 md:w-56 md:h-80 object-cover' />
              <p className='text-black'>{movie.Year}</p>
              <p className='text-black'>Rating: {movie.imdbRating ? movie.imdbRating : 'N/A'}</p>
              </div>
          ))}
          </div>
        </section>
    </div> 
  );
  }
  
export default MovieDetails;