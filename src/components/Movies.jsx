import { useContext } from 'react';
import MoviesList from './MoviesList';
import MoviesContext from './../context/movies/movieContext';

const Movies = () => {
  const movieContext = useContext(MoviesContext);
  const { movies, defaultMovies } = movieContext;

  return (
    <>
      <div className='header'>Popular</div>
      <div className='movieContainer'>
        {movies.length
          ? movies.map(movie => <MoviesList key={movie.imdbID} movie={movie} />)
          : defaultMovies.map(movie => (
              <MoviesList key={movie.imdbID} movie={movie} />
            ))}
      </div>
    </>
  );
};

export default Movies;
