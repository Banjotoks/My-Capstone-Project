import React, { useState } from 'react';

function MovieCard() {
  const [movieCard, setMovieCard] = useState([
    { id: 1,title: 'The Predator', releaseDate: 'October 18,2024', genre: 'Sci-Fi', synopsis: 'After a deadly alien crash lands on earth, a soldier claims some of its tech for himself, setting off a brutal battle between Predator and prey' },
    { id: 2,title: 'The Greatest of all time', releaseDate: 'October 22,2024', genre: 'Indian Action', synopsis: 'He was his agencys top hostage negotiator, field agent and spy- but years after retiring, one mission brings his past back to haunt him and his' },
    { id: 3,title: 'The Platform 2', releaseDate: 'October 29,2024', genre: 'Thriller', synopsis: 'In a vertical system of cruel food distribution, a group of residents takes charge to ensureeveryone gets to eat. But can solidarity truly be enforced' },
    { id: 4,title: 'Hitman', releaseDate: 'Novemmber 5,2024', genre: 'Action', synopsis: 'Betrayed by the Organization that trained him, an elite assassin hunts for answers in this "thoroughly entertaining" thriller(The Washington Post).'},
    { id: 5,title: 'The Resident', releaseDate: 'November 22,2024', genre: 'Medical Drama', synopsis: 'An idealistic interns outlook changes when he trains with a brash, but brilliant doctor and a surgeon with a secret in this tense medical drama.' },
    { id: 6,title: 'GYEONGSEONG CREATURE', releaseDate: 'December 1, 2024', genre: 'Thriller', synopsis: 'In this fictional drama that spans generations, a pair caught in time fights for survival against deadly monsters created by their enemy.'},
    { id: 7,title: 'LISABI- The Uprising', releaseDate: 'December 2, 2024', genre: 'African Drama', synopsis: 'Based on the legendary story of the Egba people and a rebellion led by Lisabi, a traditional Yoruba hero with a hunger for freedom.'},
    { id: 8,title: 'ITS What Inside', releaseDate: 'Decemer 26,2024', genre: 'Comedy', synopsis: 'A mysterious party game unleashes mind-blowing mayhem at a reunion of college frenemies in this psychological thriller where nobody is who they seem.' },
    { id: 9,title: 'Trouble', releaseDate: 'December 31,2024', genre: 'Crime', synopsis: 'He is a salesman wrongfully convicted of murder.She is a fearless coptold to drop his case. When they join forces, bullets-and sparks-start flying.'},
  ]);
 
  return (
    <div className='max-w-2xl mx-auto p-5 bg-white rounded-lg shadow-lg'>
      <h2 className='text-4xl font-bold mb-2'>Later This Year: Movie- Card Upcoming Blockbusters Of Different Genres</h2>
      <p className='text-gray-700 mb-4'>Exiting Movies to look out for later this year</p>
      <ul className='list-disc ml-5 space-y-4'> 
         {movieCard.length > 0 ? (
          movieCard.map((movie) => (
            <li key={movie.id}>
              <h3 className='text-xl font-semi-bold'>{movie.title}</h3>
              <p className='text-sky-500'>Release Date: {movie.releaseDate}</p>
              <p text-blue>Genre: {movie.genre}</p>
              <p className='text-black'>{movie.synopsis}</p>              
            </li>
          ))
         ) : (
          <p>Not on Movie Card</p>
         )}
      </ul>
      <footer className='bg-black text-white text-center py-4 w-full mt-auto'>
        <p text-sm>© Movie Code. All rights reserved</p>
      </footer>
    </div>
  );
}

export default MovieCard;   