import PropTypes from 'prop-types';
import { FaHeart } from 'react-icons/fa';

const FavouritesList = ({ movie }) => {
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
          <FaHeart color='red' />
        </div>
      </div>
    </div>
  );
};

FavouritesList.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default FavouritesList;
