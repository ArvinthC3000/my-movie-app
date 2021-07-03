import { useContext } from 'react';
import MoviesList from './MoviesList';
import MoviesContext from './../context/movies/movieContext';

const Movies = () => {
  const movieContext = useContext(MoviesContext);
  const { movies } = movieContext;

  return (
    <div className='movieContainer'>
      {movies.map(movie => (
        <MoviesList key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default Movies;
