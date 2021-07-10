import { useContext, useEffect } from 'react';
import MoviesList from './MoviesList';
import MoviesContext from './../context/movies/movieContext';

const Movies = () => {
  const movieContext = useContext(MoviesContext);
  const { movies, popular, getDefaultMovies, searchString } = movieContext;
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

export default Movies;
