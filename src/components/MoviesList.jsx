import PropTypes from 'prop-types';
import { useContext } from 'react';
import { FaHeart } from 'react-icons/fa';
import MoviesContext from './../context/movies/movieContext';

const MoviesList = ({ movie }) => {
  const movieContext = useContext(MoviesContext);
  const { addFavMovie, removeFavMovie, favorites } = movieContext;
  // console.log(movie);

  const isFav =
    favorites !== null ? favorites.some(fav => fav.id === movie.id) : false;

  // Toggle favorite
  const toggleFav = () => {
    !isFav ? addFavMovie(movie.id) : removeFavMovie(movie.id);
  };

  return (
    <div
      className='movieItem'
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/w500/${movie.poster_path}')`,
        backgroundSize: '100%, 100%',
      }}>
      <div className='overlay-container'>
        <div className='overlay-title'>{movie.title}</div>
        <div className='overlay-body'>
          <FaHeart
            color={`${isFav ? 'red' : ''}`}
            onClick={() => toggleFav()}
          />
        </div>
      </div>
    </div>
  );
};

MoviesList.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MoviesList;
