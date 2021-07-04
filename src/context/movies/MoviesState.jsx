import axios from 'axios';
import { useReducer } from 'react';
import {
  ADD_FAVORITES,
  GET_FAVORITES,
  REMOVE_FAVORITES,
  SET_DEFAULT_MOVIES,
} from '../types';
import MovieContext from './movieContext';
import MovieReducer from './movieReducer';

const MovieState = ({ children }) => {
  const initialState = {
    default: [
      {
        Title: 'The Avengers',
        Year: '2012',
        imdbID: 'tt0848228',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
      },
      {
        Title: 'Avengers: Endgame',
        Year: '2019',
        imdbID: 'tt4154796',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
      },
      {
        Title: 'Avengers: Infinity War',
        Year: '2018',
        imdbID: 'tt4154756',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
      },
      {
        Title: 'Avengers: Age of Ultron',
        Year: '2015',
        imdbID: 'tt2395427',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
      },
      {
        Title: 'The Avengers',
        Year: '1998',
        imdbID: 'tt0118661',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BYWE1NTdjOWQtYTQ2Ny00Nzc5LWExYzMtNmRlOThmOTE2N2I4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg',
      },
      {
        Title: "The Avengers: Earth's Mightiest Heroes",
        Year: '2010–2012',
        imdbID: 'tt1626038',
        Type: 'series',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BYzA4ZjVhYzctZmI0NC00ZmIxLWFmYTgtOGIxMDYxODhmMGQ2XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg',
      },
      {
        Title: 'Ultimate Avengers: The Movie',
        Year: '2006',
        imdbID: 'tt0491703',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BMTYyMjk0NTMwMl5BMl5BanBnXkFtZTgwNzY0NjAwNzE@._V1_SX300.jpg',
      },
      {
        Title: 'Ultimate Avengers II',
        Year: '2006',
        imdbID: 'tt0803093',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BZjI3MTI5ZTYtZmNmNy00OGZmLTlhNWMtNjZiYmYzNDhlOGRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
      },
      {
        Title: 'The Avengers',
        Year: '1961–1969',
        imdbID: 'tt0054518',
        Type: 'series',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BZWQwZTdjMDUtNTY1YS00MDI0LWFkNjYtZDA4MDdmZjdlMDRlXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg',
      },
      {
        Title: 'Avengers Assemble',
        Year: '2012–2019',
        imdbID: 'tt2455546',
        Type: 'series',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BMTY0NTUyMDQwOV5BMl5BanBnXkFtZTgwNjAwMTA0MDE@._V1_SX300.jpg',
      },
    ],
    movies: [],
    favorites: [],
  };

  const api_key = `04c35731a5ee918f014970082a0088b1`;

  const [state, dispatch] = useReducer(MovieReducer, initialState);

  // Add new fav movies
  const addFavMovie = id => {
    dispatch({
      type: ADD_FAVORITES,
      payload: id,
    });
  };

  // Remove from fav movies
  const removeFavMovie = id => {
    dispatch({
      type: REMOVE_FAVORITES,
      payload: id,
    });
  };

  // Get favorite movies from local storage
  const getFavMovies = () => {
    dispatch({
      type: GET_FAVORITES,
    });
  };

  // Get Default movies
  const getDefaultMovies = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular`,
      {
        params: { api_key, language: 'en-US', page: '1' },
      }
    );
    const { results } = response.data;
    dispatch({
      type: SET_DEFAULT_MOVIES,
      payload: results,
    });
  };

  const getMovies = async string => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular`,
      {
        params: { api_key, language: 'en-US', page: '1' },
      }
    );

    const { results } = response.data;
    console.log();
  };

  return (
    <MovieContext.Provider
      value={{
        movies: state.movies,
        defaultMovies: state.default,
        favorites: state.favorites,
        addFavMovie,
        getFavMovies,
        removeFavMovie,
        getMovies,
        getDefaultMovies,
      }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieState;
