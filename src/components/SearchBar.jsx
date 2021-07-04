import { useContext } from 'react';
import MoviesContext from './../context/movies/movieContext';

const SearchBar = () => {
  const movieContext = useContext(MoviesContext);
  const { getMovies } = movieContext;
  const searchMovies = e => {
    getMovies(e.target.value);
  };

  return (
    <>
      <div className='searchBar'>
        <input
          type='text'
          onChange={searchMovies}
          name='movieString'
          placeholder='Search movies...'
        />
      </div>
    </>
  );
};

export default SearchBar;
