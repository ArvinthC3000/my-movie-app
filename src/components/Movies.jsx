import { useEffect } from 'react';
import MoviesList from './MoviesList';
import { connect } from 'react-redux';
import { getDefaultMovies } from '../actions/movieActions';

const Movies = ({ movie: { movies, popular, searchString } }) => {
  useEffect(() => {
    getDefaultMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className='header'>
        {movies !== null && !movies.length ? 'Popular' : `Search result`}
      </div>
      <div className='movieContainer'>
        {movies == null ? (
          popular.map(movie => <MoviesList key={movie.id} movie={movie} />)
        ) : !movies.length ? (
          <div className='header'>No result found for '{searchString}'</div>
        ) : (
          movies.map(movie => <MoviesList key={movie.id} movie={movie} />)
        )}
      </div>
    </>
  );
};

const mapStatetoProps = state => ({
  movie: state.movie,
});

export default connect(mapStatetoProps, { getDefaultMovies })(Movies);
