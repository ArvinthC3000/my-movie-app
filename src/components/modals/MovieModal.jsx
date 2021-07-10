import { useContext } from 'react';
import MoviesContext from '../../context/movies/movieContext';

const MovieModal = e => {
  const movieContext = useContext(MoviesContext);
  const { modalData: movie } = movieContext;

  return (
    <div id='movie-modal' className='modal grey darken-4' style={modalStyle}>
      <div className='modal-content' style={{ padding: '1rem' }}>
        {movie && (
          <>
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
            <div></div>
          </>
        )}
      </div>
      <div className='modal-footer grey darken-4'>
        {/* <a href='#!' className='modal-close waves-effect blue waves-light btn'>
          Enter
        </a> */}
      </div>
    </div>
  );
};

const modalStyle = {
  width: '75%',
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

export default MovieModal;
