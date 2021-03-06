import PropTypes from 'prop-types';
import MoviesContext from './../context/movies/movieContext';
import { useContext } from 'react';
import { FaHeart } from 'react-icons/fa';

const FavouritesList = ({ movie }) => {
  const movieContext = useContext(MoviesContext);
  const { removeFavMovie, setModalID } = movieContext;

  // Remove favorite
  const toggleFav = e => {
    e.stopPropagation();
    removeFavMovie(movie.id);
  };

  return (
    <a
      href='#movie-modal'
      className='movieItem modal-trigger'
      onClick={() => setModalID(movie)}>
      <div
        className='movieItem'
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/w500/${movie.poster_path}')`,
          backgroundSize: '100%, 100%',
        }}>
        <div className='overlay-container'>
          <div className='overlay-title'>{movie.title}</div>
          <div className='overlay-body'>
            <FaHeart onClick={toggleFav} color='red' />
          </div>
        </div>
      </div>
    </a>
  );
};

FavouritesList.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default FavouritesList;
