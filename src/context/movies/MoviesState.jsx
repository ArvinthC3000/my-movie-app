import axios from 'axios';
import { useReducer } from 'react';
import {
  ADD_FAVORITES,
  GET_FAVORITES,
  GET_MOVIES,
  REMOVE_FAVORITES,
  SET_DEFAULT_MOVIES,
} from '../types';
import MovieContext from './movieContext';
import MovieReducer from './movieReducer';

const MovieState = ({ children }) => {
  const initialState = {
    default: [],
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
      `https://api.themoviedb.org/3/search/movie`,
      {
        params: { sort_by: 'created_at.asc', query: string, api_key },
      }
    );

    const { results } = response.data;

    dispatch({
      type: GET_MOVIES,
      payload: results,
    });
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
