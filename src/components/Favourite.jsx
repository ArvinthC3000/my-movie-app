import { useContext } from 'react';
import FavouritesList from './FavouritesList';
import MoviesContext from './../context/movies/movieContext';

const Favourite = () => {
  const movieContext = useContext(MoviesContext);
  const { favorites } = movieContext;

  return (
    <>
      <div className='header'>Favourites</div>
      <div className='movieContainer'>
        {favorites.map(movie => (
          <FavouritesList key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default Favourite;
