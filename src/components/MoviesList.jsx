import PropTypes from 'prop-types';

const MoviesList = ({ movie }) => {
  console.log(movie);
  return (
    <div
      className='movieItem'
      style={{
        backgroundImage: `url('${movie.Poster}')`,
        backgroundSize: '100%, 100%',
      }}>
      {'Movie'}
    </div>
  );
};

MoviesList.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MoviesList;
