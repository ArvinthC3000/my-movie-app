import PropTypes from 'prop-types';
import { FaHeart } from 'react-icons/fa';

const MoviesList = ({ movie }) => {
  // console.log(movie);
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
          <FaHeart />
        </div>
      </div>
    </div>
  );
};

MoviesList.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MoviesList;
