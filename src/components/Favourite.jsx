import { useContext, useEffect } from 'react';
import FavouritesList from './FavouritesList';
import MoviesContext from './../context/movies/movieContext';

const Favourite = () => {
  const movieContext = useContext(MoviesContext);
  const { favorites, getFavMovies } = movieContext;

  useEffect(() => {
    getFavMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className='header'>Favourites</div>
      <div className='movieContainer'>
        {favorites !== null
          ? favorites.map(movie => (
              <FavouritesList key={movie.id} movie={movie} />
            ))
          : 'No favourites yet'}
      </div>
    </>
  );
};

export default Favourite;
