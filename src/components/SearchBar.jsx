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
          style={{ color: 'white' }}
        />
      </div>
    </>
  );
};

export default SearchBar;
