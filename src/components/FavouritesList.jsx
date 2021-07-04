import PropTypes from 'prop-types';
import MoviesContext from './../context/movies/movieContext';
import { useContext } from 'react';
import { FaHeart } from 'react-icons/fa';

const FavouritesList = ({ movie }) => {
  const movieContext = useContext(MoviesContext);
  const { removeFavMovie } = movieContext;

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
          <FaHeart onClick={() => removeFavMovie(movie.imdbID)} color='red' />
        </div>
      </div>
    </div>
  );
};

FavouritesList.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default FavouritesList;
