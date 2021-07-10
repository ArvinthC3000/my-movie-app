import axios from 'axios';
import { useReducer } from 'react';
import {
  ADD_FAVORITES,
  GET_FAVORITES,
  GET_MOVIES,
  GET_SEARCH_STRING,
  REMOVE_FAVORITES,
  REMOVE_MOVIES,
  SET_DEFAULT_MOVIES,
} from '../types';
import MovieContext from './movieContext';
import MovieReducer from './movieReducer';

const MovieState = ({ children }) => {
  const initialState = {
    popular: [],
    movies: null,
    favorites: [],
    searchString: null,
  };

  const api_key = `04c35731a5ee918f014970082a0088b1`; // TMDB
  const tmdb_url = `https://api.themoviedb.org/3`; // TMDB

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

  // Rmove movies from state
  const removeMovies = () => {
    dispatch({
      type: REMOVE_MOVIES,
    });
  };

  // Get Default movies
  const getDefaultMovies = async () => {
    const response = await axios.get(`${tmdb_url}/movie/popular`, {
      params: { api_key, language: 'en-US', page: '1' },
    });
    const { results } = response.data;

    dispatch({
      type: SET_DEFAULT_MOVIES,
      payload: results,
    });
  };

  const getMovies = async string => {
    if (!string.trim().length) {
      setSearchString(null);
      removeMovies();
      return;
    }
    setSearchString(string);
    const response = await axios.get(`${tmdb_url}/search/movie`, {
      params: { sort_by: 'created_at.asc', query: string, api_key },
    });

    const { results } = response.data;

    dispatch({
      type: GET_MOVIES,
      payload: results,
    });
  };

  const setSearchString = string => {
    dispatch({
      type: GET_SEARCH_STRING,
      payload: string,
    });
  };

  return (
    <MovieContext.Provider
      value={{
        movies: state.movies,
        popular: state.popular,
        favorites: state.favorites,
        searchString: state.searchString,
        addFavMovie,
        getFavMovies,
        removeFavMovie,
        getMovies,
        removeMovies,
        getDefaultMovies,
      }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieState;
