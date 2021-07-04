import { useContext, useEffect } from 'react';
import MoviesList from './MoviesList';
import MoviesContext from './../context/movies/movieContext';

const Movies = () => {
  const movieContext = useContext(MoviesContext);
  const { movies, defaultMovies, getDefaultMovies } = movieContext;
  useEffect(() => {
    getDefaultMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className='header'>Popular</div>
      <div className='movieContainer'>
        {movies.length
          ? movies.map(movie => <MoviesList key={movie.id} movie={movie} />)
          : defaultMovies.map(movie => (
              <MoviesList key={movie.id} movie={movie} />
            ))}
      </div>
    </>
  );
};

export default Movies;
