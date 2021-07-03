import PropTypes from 'prop-types';
import { useContext } from 'react';
import { FaHeart } from 'react-icons/fa';
import MoviesContext from './../context/movies/movieContext';

const MoviesList = ({ movie }) => {
  const movieContext = useContext(MoviesContext);
  const { addFavMovie, removeFavMovie, favorites } = movieContext;

  // Toggle favorite
  const toggleFav = () => {
    const isFav = favorites.some(fav => fav.imdbID === movie.imdbID);

    !isFav ? addFavMovie(movie.imdbID) : removeFavMovie(movie.imdbID);
  };

  return (
    <div
      className='movieItem'
      style={{
        backgroundImage: `url('${movie.Poster}')`,
        backgroundSize: '100%, 100%',
      }}>
      <div className='overlay-container'>
        <div className='overlay-title'>{movie.Title}</div>
        <div className='overlay-body'>
          <FaHeart onClick={() => toggleFav()} />
        </div>
      </div>
    </div>
  );
};

MoviesList.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MoviesList;
