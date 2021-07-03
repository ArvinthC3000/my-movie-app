import { useContext } from 'react';
import FavouritesList from './FavouritesList';
import MoviesContext from './../context/movies/movieContext';

const Favourite = () => {
  const movieContext = useContext(MoviesContext);
  const { movies } = movieContext;

  return (
    <>
      <div className='header'>Popular</div>
      <div className='movieContainer'>
        {movies.map(movie => (
          <FavouritesList key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default Favourite;
