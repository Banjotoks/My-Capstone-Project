import axios from 'axios';

const API_KEY = "1ba32adb";
const BASE_URL = 'https://www.omdbapi.com/';

//Function to fetch movies using titles
export const fetchMoviesByTitle = async (titles) => {
    const movieRequests = titles.map((title) =>
        axios.get(`${BASE_URL}?apikey=${API_KEY}&t=${title}`)
    );

    try{
        const movieResponses = await Promise.all(movieRequests);
        return movieResponses.map(response => response.data);
    } catch (error) {
        console.error('Error fetching movies:', error);
        return [];
    }
}; 




  





