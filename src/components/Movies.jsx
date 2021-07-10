import { useContext, useEffect } from 'react';
import MoviesList from './MoviesList';
import MoviesContext from './../context/movies/movieContext';

const Movies = () => {
  const movieContext = useContext(MoviesContext);
  const { movies, popular, getDefaultMovies } = movieContext;
  useEffect(() => {
    getDefaultMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(movies);

  return (
    <>
      <div className='header'>
        {movies !== null && !movies.length ? 'Popular' : `Search result`}
      </div>
      <div className='movieContainer'>
        {movies == null
          ? popular.map(movie => <MoviesList key={movie.id} movie={movie} />)
          : !movies.length
          ? 'No movies'
          : movies.map(movie => <MoviesList key={movie.id} movie={movie} />)}
      </div>
    </>
  );
};

export default Movies;
