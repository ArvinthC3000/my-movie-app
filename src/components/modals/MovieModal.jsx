import { useContext } from 'react';
import MoviesContext from '../../context/movies/movieContext';

const MovieModal = e => {
  const movieContext = useContext(MoviesContext);
  const { modalData: movie } = movieContext;

  return (
    <div id='movie-modal' className='modal grey darken-4' style={modalStyle}>
      <div className='modal-content mainModalContainer'>
        {movie && (
          <>
            <div style={{ display: 'block' }}>
              <div style={fontTitle}>
                <span style={{ ...lightFont, ...noDisplay }}>Title:</span>{' '}
                {movie.title}{' '}
                {`(${new Date(movie.release_date).getFullYear()})`}
              </div>
              <div style={fontTitle}>
                <span style={{ ...lightFont }}>Released Date:</span>{' '}
                {movie.release_date}
              </div>
              <div style={fontTitle}>
                <span style={{ ...lightFont }}>Rating:</span>{' '}
                {movie.vote_average}
              </div>
              <div style={fontTitle}>
                <span style={{ ...lightFont }}>Popularity:</span>{' '}
                {movie.popularity.toFixed(2)}
              </div>
              <div style={{ ...normalFont, paddingTop: '1rem' }}>
                <span style={{ ...lightFont }}>Overview:</span>{' '}
                <p style={{ padding: '0' }}>{movie.overview}</p>
              </div>
            </div>
            <div>
              <div
                style={{
                  ...backdropStyle,
                  height: '18rem',
                  backgroundImage: `url('https://image.tmdb.org/t/p/w500/${movie.poster_path}')`,
                }}></div>
              <div
                style={{
                  ...backdropStyle,
                  backgroundImage: `url('https://image.tmdb.org/t/p/w500/${movie.backdrop_path}')`,
                }}></div>
            </div>
          </>
        )}
      </div>
      <div className='modal-footer grey darken-4'>
        <a href='#!' className='modal-close waves-effect grey waves-light btn'>
          Close
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: '85%',
  height: '80%',
  zIndex: 5,
  transform: 'translate(0px, -50%)',
  top: '50%',
};

const backdropStyle = {
  backgroundSize: 'cover',
  height: '6.5rem',
  width: '12rem',
  margin: '0.2rem',
};

const fontTitle = {
  padding: '0 1rem',
  fontSize: '4vmin',
  fontWeight: 'normal',
};

const normalFont = {
  padding: '0 1rem',
  fontSize: '3vmin',
  fontWeight: 'light',
};

const lightFont = {
  fontWeight: 'lighter',
  opacity: '.2',
};

const noDisplay = {
  display: 'none',
};

export default MovieModal;
